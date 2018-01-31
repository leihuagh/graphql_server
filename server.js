import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('GraphQL is cool!')
})

app.listen(4000, () => {
  console.log(`GraphQL server is running on http://localhost:4000`);
})
