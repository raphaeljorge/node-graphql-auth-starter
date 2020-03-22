// Imports
import express from 'express'

// App Imports
import setupLoadModules from './setup/load-modules'
import setupGraphQL from './setup/graphql'
import setupStartServer from './setup/start-server'

// Create express server
const server = express()

// Setup load modules
setupLoadModules(server)

// Setup GraphQL
setupGraphQL(server)

// Start server
setupStartServer(server)
