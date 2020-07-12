// Imports
import { GraphQLList, GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql'

// App Imports
import  { UserType, UserListType, UserLoginType } from './types'
import { getAll, getById, login, getCurrentUser } from './resolvers'

// All
export const userList = {
  type: UserListType,
  description: 'Get all users',
  resolve: (context) => getAll(context),
}

// By ID
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

export const currentUser = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getCurrentUser
}

// Auth
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}