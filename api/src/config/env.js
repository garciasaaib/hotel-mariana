import 'dotenv/config'
export default {
  API_PORT: process.env.API_PORT || 3001,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_NAME: process.env.DB_NAME || 'hotel',
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASS: process.env.DB_PASS || 'admin',
  DB_PORT: process.env.DB_PORT || '5432',
}