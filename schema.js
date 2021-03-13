import { loadFilesSync, mergeResolvers, mergeTypeDefs } from "graphql-tools";

const allTypeDefs = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const allResolvers = loadFilesSync(`${__dirname}//**/*.resolvers.js`);

export const typeDefs = mergeTypeDefs(allTypeDefs);
export const resolvers = mergeResolvers(allResolvers);
