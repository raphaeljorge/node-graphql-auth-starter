// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/query'
import { nodeField } from '../../modules/user/interface';
import { UserListType } from '../../modules/user/types';
import { getAll } from '../../modules/user/resolvers';

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({
    node: nodeField,
    ...user,
  })
})

export default query