import { ApolloServer } from 'apollo-server-lambda';

import schema from './schema';

const ENABLE_INTROSPECTION = process.env.STAGE !== 'prod';

const server = new ApolloServer({
  schema,
  playground: ENABLE_INTROSPECTION,
  introspection: ENABLE_INTROSPECTION,
});

export const graphQlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});