export const typeDefs = `#graphql

  type Query {
    getCartoons: [Cartoon!]!
    getCartoon(id: Int!): Cartoon!
    getCharacters: [Character!]!
    getCharacter(id: Int!): Character!
  }

  type Cartoon {
    id: Int!
    title: String!
    description: String!
    characters: [Character!]!
  }

  type Character {
    id: Int!
    name: String!
    img: String!
    description: String!
    cartoon: Cartoon!
  }

`;
