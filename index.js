const { ApolloServer, gql } = require('apollo-server')
const guides = require('./Guides')

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
    }
`

const resolvers = {
    Query: {
        allGuides: () => guides
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
  })