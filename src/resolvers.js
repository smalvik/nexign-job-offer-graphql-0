import { cartoons, characters } from "./db";

export const resolvers = {
  Query: {
    getCartoons: async () => cartoons,

    getCartoon: async (parent, { id }, context) => {
      return cartoons.find((cartoon) => cartoon.id === id);
    },

    getCharacters: async () => characters,

    getCharacter: async (parent, { id }, context) =>
      characters.find((character) => character.id === id),
  },

  Cartoon: {
    characters: ({ id }, args, context) => {
      return characters.filter((item) => item.cartoonId === id);
    },
  },

  Character: {
    cartoon: ({ cartoonId }, args, context) => {
      return cartoons.find((item) => item.id === cartoonId);
    },
  },
};
