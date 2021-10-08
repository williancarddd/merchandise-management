import sequelize from 'sequelize'
import { DateTime } from 'luxon'
import 'dotenv/config'


export const config_database:sequelize.Options = {
  dialect: 'mysql',
  host:process.env.DATABASE_HOST!,
  timezone: DateTime.now().toSQL().split(' ')[2],
  logging: e => console.log('DATABASE_LOG: '+ e + ' 😳')
}

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

