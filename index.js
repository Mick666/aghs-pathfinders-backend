const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const Guide = require('./schemas/guideSchema')
const config = require('./utils/config')

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
        rating: Int!
        id: ID!
        hero: String!
        itemGroups: [itemGroups!]!
        selectedTalents: [String!]!
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
            rating: Int!
            hero: String!
            itemGroups: [itemGroupInput!]!
            selectedTalents: [String!]!
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

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen(config.PORT).then(({ url }) => {
    console.log(`Server ready at ${url}`)
})