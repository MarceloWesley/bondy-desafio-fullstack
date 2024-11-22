import { connection } from '../../../memoryDB/connection'
import { User } from '../../../models/User'
import bcrypt from 'bcrypt'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const signIn = async (_parent, args, _context, _info) => {
  await connection()
  const { email, password } = args

  const user = await User.findOne({ email })
  const { name, company } = user

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Credentials are invalid')
  }

  const payload = {
    email,
    name,
    company,
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })

  return { token }
}
