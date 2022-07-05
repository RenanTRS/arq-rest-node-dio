import { db } from '../db'
import { User } from '@models/user.model'

//db
export class UserRepository {
  async findAllUsers(): Promise<User[]> {
    const query = `
        SELECT uuid, username
        FROM application_user
    `
    const { rows } = await db.query<User>(query)

    return rows || []
  }
}
