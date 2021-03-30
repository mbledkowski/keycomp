const { Pool } = require("pg")
require("dotenv").config()

const pool = new Pool({ user: process.env.db_user, password: process.env.db_password, host: process.env.db_host, port: Number(process.env.db_port), database: process.env.db_database })

module.exports = pool