import mutation from './mutation'
import query from './query'
import user from './user'
import { mergeTypeDefs } from '@graphql-tools/merge'

const typeDefs = mergeTypeDefs([mutation, query, user])

export default [typeDefs]
