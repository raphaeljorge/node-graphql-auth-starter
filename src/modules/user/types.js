// Imports
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromPromisedArray,
  globalIdField,
} from 'graphql-relay';

import { getAll } from './resolvers';
import { nodeInterface } from './interface';

// User type
export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User type',

  fields: () => ({
    id: globalIdField('User'),
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  }),
  interfaces: [nodeInterface],
});

export const UserListType = new GraphQLObjectType({
  name: 'UserList',
  description: 'List of Users',
  fields: () => ({
    id: globalIdField('UserList'),
    users: {
      type: userConnection,
      description: 'List of users',
      args: connectionArgs,
      resolve: (_, args, context) => connectionFromPromisedArray(getAll(context), args),
    },
  }),
  interfaces: [nodeInterface],
})

var {connectionType: userConnection} = 
  connectionDefinitions({
    name: 'User',
    nodeType: UserType
  });

// User Login type
export const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})