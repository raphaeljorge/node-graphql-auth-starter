// Imports
import { ApolloServer } from 'apollo-server-express'

// App Imports
import serverConfig from '../config/server.json'
import authentication from './authentication'
import schema from './schema'

// Setup GraphQL
export default function (server) {
  console.info('SETUP - GraphQL...')

  server.use(authentication)
  
  const graphqlServer = new ApolloServer({ 
    schema, 
    context: ({ req }) => {
      return { 
         auth: {
           user: req.user,
           isAuthenticated: req.user && req.user.id > 0
         },
       }
     },
    debug: true
  })
  graphqlServer.applyMiddleware({ 
    app: server, 
    path: '/'
  })
}
