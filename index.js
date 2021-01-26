const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const { ApolloServer, gql } = require('apollo-server-express')
const mongoose = require('mongoose')
const Guide = require('./schemas/guideSchema')
const config = require('./utils/config')

app.use(cors())

mongoose
    .connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })


const typeDefs = gql`
    type Guide {
        title: String!
        createdAt: String!
        rating: [Int!]!
        id: ID!
        hero: String!
        itemGroups: [itemGroups!]!
        selectedTalents: [Int!]!
        levels: [Int!]!
        shards: [String!]!
        shardCombinations: [shardCombination!]!
    }

    type itemGroups {
        groupName: String!
        items: [String!]!
    }

    type shardCombination {
        combination: [String!]!
        description: String!
    }

    type Query {
        allGuides: [Guide!]!
        allHeroGuides(hero: String!): [Guide!]!
        guideSearch(hero: String!): [Guide!]!
    }

    type User {
        username: String!
        passwordHash: String!
        guides: [ID!]
        id: ID!
    }

    type Token {
        value: String!
    }

    input itemGroupInput {
        groupName: String!
        items: [String!]!
    }

    input shardCombinationInput {
        combination: [String!]!
        description: String!
    }

    type Mutation {
        addGuide(
            title: String!
            createdAt: String!
            rating: [Int!]!
            hero: String!
            itemGroups: [itemGroupInput!]!
            selectedTalents: [Int!]!
            levels: [Int!]!
            shards: [String!]!
            shardCombinations: [shardCombinationInput!]!
        ): Guide
        createUser(
            username: String!
        ): User
        login(
            username: String!
            password: String!
        ): Token
    }
`

const resolvers = {
    Query: {
        allGuides: () => Guide.find({}),
        allHeroGuides: (root, args) =>
            Guide.find({ hero: args.hero }),
        guideSearch: (root, args) =>
            Guide.find({ title: new RegExp(args.hero, 'i') })
    },
    Mutation: {
        addGuide: (root, args) => {
            const newGuide = new Guide({ ...args })
            return newGuide.save()
        }
    }
}

// app.get('/aghs-pathfinders-guides', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
// })

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
    path: '/graphql', // you should change this to whatever you want
    app,
})

app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log('🚀  Server ready at http://localhost:4000')
})