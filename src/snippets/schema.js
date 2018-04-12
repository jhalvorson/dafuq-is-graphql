`type Post {
  id: ID!
  title: String!
  content: String
  author: Author!
}

type Author {
  id: ID!
  name: String!
  posts: [Post!]!
}`
