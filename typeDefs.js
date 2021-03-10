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

    type difficultyData {
        convertedData: Match!
        convertedHeroes: HeroData!
        heroAsArray: [heroDifficultyData!]!
        victoriousGames: [Match]!
        shardWinrates: [shardStats!]!
    }

    type victoriousMatches {
        victoriousGame: [Match]
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
        picked_elite: Boolean
        picked_name: String
        unpicked_elite: Boolean
        unpicked_name: String
    }

    union pickedElite = BooleanBox | StringBox

    type StringBox {
        value: String
    }

    type BooleanBox {
        value: Boolean
    }

    type HeroData {
        Axe: heroDifficultyData!
        Disruptor: heroDifficultyData!
        Hoodwink: heroDifficultyData!
        DragonKnight: heroDifficultyData!
        Jakiro: heroDifficultyData!
        Juggernaut: heroDifficultyData!
        LegionCommander: heroDifficultyData!
        Magnus: heroDifficultyData!
        Mars: heroDifficultyData!
        OgreMagi: heroDifficultyData!
        Omniknight: heroDifficultyData!
        PhantomAssassin: heroDifficultyData!
        Phoenix: heroDifficultyData!
        QueenofPain: heroDifficultyData!
        ShadowFiend: heroDifficultyData!
        Slark: heroDifficultyData!
        Snapfire: heroDifficultyData!
        Sniper: heroDifficultyData!
        TemplarAssassin: heroDifficultyData!
        Tidehunter: heroDifficultyData!
        Tusk: heroDifficultyData!
        Ursa: heroDifficultyData!
        Venomancer: heroDifficultyData!
        Viper: heroDifficultyData!
        Weaver: heroDifficultyData!
        Windranger: heroDifficultyData!
        WinterWyvern: heroDifficultyData!
        WitchDoctor: heroDifficultyData!
    }

    type heroDifficultyData {
        deaths: Int!
        defeats: Int!
        hero: String!
        totalGames: Int!
        victories: Int!
        id: String!
    }

    type player {
        damage_dealt: Float!
        damage_taken: Float!
        deaths: Int!
        depth: Int!
        hero: String!
        items: [String]
        upgrades: [String]
    }

    type shardStats {
        defeats: Int!
        hero: String!
        shard: String!
        totalGames: Int!
        victories: Int!
    }

    type singleHeroStats {
        singleHeroStats: heroDifficultyData!
        shardWinrates: [shardStats]!
        victoriousGames: [Match!]!
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
        allGuides(first: Int, after: Int): [Guide!]!
        allHeroGuides(hero: String!): [Guide!]!
        guideSearch(hero: String!): [Guide!]!
        guideCount(hero: String): Int!
        allMatchData: [difficultyData!]!
        heroStats(hero: String!): [singleHeroStats!]!
        victoriousMatches(hero: String, first: Int, after: Int, difficulty: Int!): [Match]
        victoriousMatchesCount(hero: String, difficulty: Int!): Int!
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