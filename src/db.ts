import { Pool } from 'pg'
require('dotenv/config')

const connectionString = process.env.CONNECTION_DB

export const db = new Pool({ connectionString })
