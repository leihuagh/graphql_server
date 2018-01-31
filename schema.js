import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    message: String
  }
`)

export default schema

