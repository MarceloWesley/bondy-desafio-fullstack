import { GraphQLResolveInfo } from 'graphql'
import { signIn } from './signIn'

export default {
  signIn: (parent: any, args: any, context: any, info: GraphQLResolveInfo) =>
    signIn(parent, args, context, info),
}
