module.exports = {
  secret: process.env.AUTH_SECRET || "teamRocket",
  expires: process.env.AUTH_EXPIRES || "24h",
  rounds: process.env.AUTH_ROUNDS || 10,
  saltRounds: process.env.PASS_SALT_ROUNDS || 10,
}