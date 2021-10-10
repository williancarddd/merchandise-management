import sequelize from 'sequelize'
import 'dotenv/config'
import { config_database } from './configDb'


export const connection_mysql = new sequelize.Sequelize(
  process.env.DATABASE_NAME!,
  process.env.DATABASE_USERNAME!,
  process.env.DATABASE_PASSWORD!,
  config_database
  )

connection_mysql.authenticate()
  .then(e => {
    console.log("connecting database succesful. 🆗")
  })
  .catch(e => {
    console.log("connecting database failure.   🅰️", e)
    connection_mysql.close()
  })

