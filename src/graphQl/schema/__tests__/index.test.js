import { GraphQLSchema } from 'graphql';
import schema from '../index';

describe('graphQL/schema/index', () => {
  test('schema is defined', () => {
    expect(schema).toBeDefined();
    expect(schema).toBeInstanceOf(GraphQLSchema);
  });
});
