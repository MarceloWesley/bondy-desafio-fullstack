import { connection } from '../../../memoryDB/connection'
import { User } from '../../../models/User'
import bcrypt from 'bcrypt'

export const signIn = async (_parent, args, _context, _info) => {
  await connection()
  const { email, password } = args

  const user = await User.findOne({ email })
  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Credentials are invalid')
  }

  return user
}
