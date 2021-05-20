const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const { ApolloServer, UserInputError } = require('apollo-server-express')
const mongoose = require('mongoose')
const typeDefs = require('./typeDefs')
const Guide = require('./schemas/guideSchema')
const Changelog = require('./schemas/changelogSchema')
const config = require('./utils/config')
const Stats = require('./stats')
const statsData = fetchStats()

app.use(cors())

async function fetchStats(difficulty) {
    return await Stats(difficulty)
}


// async function fetchStats(difficulty) {
//     const url = 'http://localhost:4002/stats'
//     const data = await axios.get(url)
//     console.log(typeof data)
//     return data.data
// }

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
        allMatchData: () => {
            return statsData
        },
        victoriousMatches: async (root, args) => {
            const vicStats = await statsData
            // console.log(vicStats)
            const vicGames = vicStats.map(difficulty => difficulty.victoriousGames)
            // console.log(statsData)
            if (!args.hero) {
                if (!args.first && !args.after) return vicGames[args.difficulty]
                else if (!args.after) return vicGames[args.difficulty].slice(0, args.first)
                else return vicGames[args.difficulty].slice(args.after, args.after+args.first)
            }
        },
        victoriousMatchesCount: async (root, args) => {
            const vicStats = await statsData
            const vicGames = vicStats.map(difficulty => difficulty.victoriousGames)
            if (!args.hero) return vicGames[args.difficulty].length
        },
        homePageData: async () => {
            const vicStats = await statsData
            const vicGames = vicStats.map(difficulty => difficulty.victoriousGames).map(difficulty => difficulty.slice(0, 3))
            const guides = await Guide.find({}).sort({ _id: -1 })
            const changelogs = await Changelog.find({}).sort({ _id: -1})
            return {
                victoriousMatches: vicGames,
                guides: guides.slice(0, 3),
                changelogs: changelogs
            }
        },
        individualGame: async (root, args) => {
            const individualGameData = await Stats(args.difficulty, args.matchId)
            if (individualGameData === 'No match found') {
                throw new UserInputError('No match found', {
                    invalidArgs: args.matchId,
                })
            }
            return individualGameData
        },
        allChangelogs: (root, args) => Changelog.find({}).sort({ _id: -1}),
        heroStats: async (root, args) => {
            const heroStatsData = await statsData
            const heroStats = heroStatsData.map(difficulty => {
                return {
                    shardWinrates: [...difficulty.shardWinrates].filter(shard => shard.hero === args.hero),
                    victoriousGames: [...difficulty.victoriousGames].filter(game => game.players.filter(player => player.hero === args.hero).length > 0),
                    singleHeroStats: difficulty.convertedHeroes[args.hero]
                }
            })
            return heroStats
        },
    },
    Mutation: {
        addGuide: (root, args) => {
            const newGuide = new Guide({ ...args })
            return newGuide.save()
        },
        addChangelog: (root, args) => {
            const newChangelog = new Changelog({ ...args })
            return newChangelog.save()
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