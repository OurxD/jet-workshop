const { makeExecutableSchema } = require('graphql-tools');

const USERS = [
  {
    id: 1,
    name: '🙉',
    postsIds: [1],
  },
  {
    id: 2,
    name: '🙈',
    postsIds: [2, 3],
  },
  {
    id: 3,
    name: '🙊',
    postsIds: [4, 5, 6],
  },
];
const POSTS = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Consectetur adipiscing elit. Curabitur nisi mauris, sodales a ullamcorper non, viverra nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam mattis vel tellus vel dictum. Etiam ac libero ac lorem rhoncus consectetur. Donec a felis ullamcorper, volutpat enim pretium, imperdiet felis. Aenean bibendum metus vel nisl dapibus, non egestas mauris mollis. Donec eu diam quis augue vehicula varius eu id tortor. Mauris mollis nulla nulla. Nullam viverra bibendum eleifend.',
    favorite: true,
    authorId: 1,
  },
  {
    id: 2,
    title: 'Nam hendrerit',
    description: 'Nam hendrerit, dolor vitae accumsan faucibus, elit ipsum euismod tortor, a suscipit odio ligula a eros. Pellentesque dictum porttitor mi posuere sollicitudin. Maecenas congue eget enim eu pretium. Etiam efficitur metus neque. Praesent in finibus mauris, id tincidunt nibh. Cras finibus ut tortor id iaculis. Curabitur id posuere turpis, non suscipit libero. Vivamus et lacus dolor. Mauris orci ligula, pulvinar sed neque ac, malesuada commodo tellus. Quisque lobortis ipsum neque, quis consectetur eros cursus at. Proin vitae posuere sapien, sed laoreet lacus. Integer feugiat varius lacus, vitae tempor libero pharetra at. Morbi volutpat dolor in nulla aliquet, ac faucibus arcu faucibus. Nulla iaculis ex a tristique rutrum. Praesent lacinia dui a quam congue congue. Quisque maximus lorem et dui ultricies, condimentum tincidunt sem convallis.',
    favorite: false,
    authorId: 2,
  },
  {
    id: 3,
    title: 'Vestibulum faucibus tellus',
    description: 'Id tincidunt condimentum. Vestibulum vitae dui nec lorem ultricies hendrerit. Maecenas sollicitudin faucibus eros, eget faucibus urna commodo in. Vivamus blandit metus eu urna facilisis, quis eleifend elit lacinia. Quisque ultrices feugiat est vitae rutrum. Cras elementum sagittis neque, sit amet tincidunt velit laoreet sed. Duis facilisis est non magna pretium facilisis. Sed lacinia sem vitae nisi aliquet, quis viverra ligula pretium. Sed at suscipit magna. Suspendisse placerat congue lacus, sed venenatis neque semper quis. In hac habitasse platea dictumst. Nulla semper eros in nisl ornare tincidunt. Etiam vel fringilla dolor. Suspendisse aliquam ultrices lectus, eu lacinia dui interdum bibendum. Sed mollis turpis sollicitudin mattis luctus.',
    favorite: false,
    authorId: 2,
  },
  {
    id: 4,
    title: 'Aliquam magna diam',
    description: 'Elementum nec ante et, pulvinar tempor mauris. Nam pretium leo vitae ultrices ornare. Etiam finibus quis libero non cursus. Curabitur ac augue nec ipsum porta malesuada. Aliquam iaculis nisl vitae finibus ullamcorper. Aenean ac libero efficitur nunc rhoncus scelerisque. Curabitur non mauris ante. Vivamus luctus luctus tellus. Maecenas euismod quam euismod nibh sagittis varius. Vestibulum auctor diam quam, a pulvinar risus rhoncus id. Cras vel odio lorem. Ut luctus lobortis tincidunt. Vivamus nec rutrum urna.',
    favorite: false,
    authorId: 3,
  },
  {
    id: 5,
    title: 'Vivamus sit amet urna nisl',
    description: 'Vestibulum sodales risus ut leo luctus iaculis. Vestibulum mattis ullamcorper massa, non tincidunt magna porttitor vitae. Praesent placerat orci id augue sollicitudin, tristique finibus leo tempor. Suspendisse porttitor urna et volutpat bibendum. Sed blandit euismod dolor, consectetur eleifend velit tincidunt in. Suspendisse mattis lobortis purus eu suscipit. Quisque bibendum fringilla lectus, sed viverra sapien feugiat vel. Sed nec lacus et nisl mollis mattis. Duis nibh orci, blandit vel ullamcorper sit amet, elementum maximus nunc.',
    favorite: false,
    authorId: 3,
  },
  {
    id: 6,
    title: 'Curabitur dignissim malesuada ornare',
    description: 'Maecenas vehicula ligula ut ante auctor, mattis ornare dui consectetur. Duis vel aliquam nunc. Vivamus sollicitudin, felis sed tincidunt fringilla, nunc ipsum rhoncus massa, ut maximus mauris nisl quis enim. Nulla elit nulla, aliquet at fringilla eget, consectetur nec urna. Donec tempus eu enim in efficitur. Donec ut gravida nisl. Aliquam nisi ipsum, tincidunt et rhoncus at, luctus ac ligula. Integer cursus dapibus luctus. Suspendisse mollis tristique felis, non maximus dui tincidunt id. Fusce vitae purus nec mi vestibulum dapibus eu vel mauris. Sed ut arcu rutrum, rhoncus diam et, commodo lectus. Praesent vehicula eros lectus, vitae laoreet velit placerat sit amet.',
    favorite: false,
    authorId: 3,
  },
];

const schema = makeExecutableSchema({
  typeDefs: `
    type User {
      id: Int!
      name: String
    }

    type Post {
      id: Int!
      title: String
      description: String
      favorite: Boolean
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
