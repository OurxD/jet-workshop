const { makeExecutableSchema } = require('graphql-tools');

const USERS = [
  {
    id: 1,
    name: 'one 🙉',
    posts: [1],
  },
  {
    id: 2,
    name: '🙉',
    posts: [],
  },
  {
    id: 3,
    name: 'one 🙉',
    posts: [3],
  },
];
const POSTS = [
  {
    id: 1,
    title: 'first post title',
  },
  {
    id: 2,
    title: 'second post title',
  },
];

const schema = makeExecutableSchema({
  typeDefs: `
    type Post {
      id: Int!
      title: String
    }

    type User {
      id: Int!
      name: String
      posts: [Int]
    }

    type Query {
      posts(id: Int): [Post]
      users(id: Int): [User]
    }
  `,
  resolvers: {
    Query: {
      posts: (_, { id }) => (id
        ? [POSTS.find(({ id: postId }) => id === postId)]
        : POSTS),
      users: (_, { id }) => (id
        ? [USERS.find(({ id: userId }) => id === userId)]
        : USERS),
    },
  },
});

module.exports = schema;
