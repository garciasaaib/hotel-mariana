import 'dotenv/config'
export default {
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_NAME: process.env.DB_NAME || 'bank',
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASS: process.env.DB_PASS || 'admin',
  DB_PORT: process.env.DB_PORT || '5432',

}