import 'dotenv/config'
export default {
  API_PORT: process.env.API_PORT || 3001,
  NODE_ENV: process.env.NODE_ENV || 'development'
}