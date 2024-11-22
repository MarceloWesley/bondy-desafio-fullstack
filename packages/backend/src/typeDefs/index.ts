import signInResponse from './auth/signIn-response'
import mutation from './mutation'
import query from './query'
import user from './user'
import { mergeTypeDefs } from '@graphql-tools/merge'

const typeDefs = mergeTypeDefs([mutation, query, user, signInResponse])

export default [typeDefs]
