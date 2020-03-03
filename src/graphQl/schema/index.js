import { makeExecutableSchema } from 'graphql-tools';
import gql from 'graphql-tag';

const pingSchema = gql`
type Query {
  "Returns 'pong'"
  ping: String
}
`;

const typeDefs = [
  pingSchema,
];

const resolvers = {
  Query: {
    ping: () => 'pong',
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
