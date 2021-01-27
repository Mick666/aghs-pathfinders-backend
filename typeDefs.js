const { gql } = require('apollo-server-express')

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

    type User {
        username: String!
        passwordHash: String!
        guides: [ID!]
        id: ID!
    }

    type Token {
        value: String!
    }

    type Match {
        levelData: levelData!
        players: [player!]!
    }

    type levelData {
        rooms: [room]!
        victory: Boolean!
    }
    
    type room {
        lives_lost: Int
        modifiers: [String]!
        picked_elite: pickedElite
        picked_name: String
        unpicked_elite: pickedElite
        unpicked_name: String
    }

    union pickedElite = BooleanBox | StringBox

    type StringBox {
        value: String
    }

    type BooleanBox {
        value: Boolean
    }

    type player {
        damage_dealt: Int!
        damage_taken: Int!
        deaths: Int!
        depth: Int!
        hero: String!
        items: [String]!
        upgrades: [String]!
    }

    input itemGroupInput {
        groupName: String!
        items: [String!]!
    }

    input shardCombinationInput {
        combination: [String!]!
        description: String!
    }

    type Query {
        allGuides: [Guide!]!
        allHeroGuides(hero: String!): [Guide!]!
        guideSearch(hero: String!): [Guide!]!
        allMatchData: [Match!]!
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
module.exports = typeDefs