import { graphQlHandler, playgroundHandler } from '../index';

describe('graphQL/index', () => {
  test('graphQlHandler is function', () => {
    expect(graphQlHandler).toBeDefined();
    expect(graphQlHandler).toBeInstanceOf(Function);
  });

  test('playgroundHandler is function', () => {
    expect(playgroundHandler).toBeDefined();
    expect(playgroundHandler).toBeInstanceOf(Function);
  });
});
