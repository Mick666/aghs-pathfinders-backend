const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const typeDefs = require('./typeDefs')
const Guide = require('./schemas/guideSchema')
const config = require('./utils/config')
const Stats = require('./stats')

app.use(cors())

mongoose
    .connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })

const resolvers = {
    Query: {
        allGuides: async (root, args) => {
            const guides = await Guide.find({}).sort({ _id: -1 })
            if (!args.first) return guides
            else if (!args.after) return guides.slice(0, args.first)
            else return guides.slice(args.after, args.after+args.first)
        },
        allHeroGuides: (root, args) =>
            Guide.find({ hero: args.hero }).sort({ _id: -1 }),
        guideSearch: (root, args) =>
            Guide.find({ title: new RegExp(args.hero, 'i') }),
        guideCount: (root, args) => {
            if (args.hero) return Guide.collection.countDocuments( {hero: args.hero})
            else return Guide.collection.countDocuments()
        },
        allMatchData: () => Stats,
        heroStats: (root, args) =>
            Stats.map(difficulty => {
                return {
                    shardWinrates: [...difficulty.shardWinrates].filter(shard => shard.hero === args.hero),
                    victoriousGames: [...difficulty.victoriousGames].filter(game => game.players.filter(player => player.hero === args.hero).length > 0),
                    singleHeroStats: difficulty.convertedHeroes[args.hero]
                }
            })
    },
    Mutation: {
        addGuide: (root, args) => {
            const newGuide = new Guide({ ...args })
            return newGuide.save()
        }
    }
}

app.use(express.static('build'))

app.get('*', (req, res) => {
    let url = path.join(__dirname, './build', 'index.html')
    res.sendFile(url)
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.applyMiddleware({
    path: '/graphql',
    app,
})

app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log('🚀  Server ready at http://localhost:4000')
})