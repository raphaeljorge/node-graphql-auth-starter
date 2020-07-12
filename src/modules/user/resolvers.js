// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-express'

// App Imports
import serverConfig from '../../config/server'
import models from '../../setup/models'

// Create
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get by ID
export async function getById(parentValue, { email, password }) {
  
  return await models.User.findOne({ where: { id: 1 } })
}

// Get Auth User
export async function getCurrentUser(parent, args, context) {
  if(!context.auth.isAuthenticated){
    throw new AuthenticationError('You must be logged in');
  }
  return await models.User.findOne({ where: { id: 1 } })
}

// Get all
export async function getAll(parent, args, context, info) {

  return await models.User.findAll()
}

// Delete
export async function remove(parentValue, { id }) {
  if(!context.auth.isAuthenticated){
    throw new AuthenticationError('You must be logged in');
  }
  return await models.User.destroy({ where: { id } })
}
