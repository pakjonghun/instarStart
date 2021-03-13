require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import express from "express";
import morgan from "morgan";
import { resolvers, typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

server.applyMiddleware({ app });
app.use(morgan("dev"));
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`⚡️Server is Running on ${PORT}`));
