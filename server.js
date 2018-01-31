import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from './schema'
import root from './resolver'

const app = express()

app.get('/', (req, res) => {
  res.send('GraphQL is cool!')
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000, () => {
  console.log(`GraphQL server is running on http://localhost:4000/graphql`);
})
