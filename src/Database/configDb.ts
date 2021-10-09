import { DateTime } from 'luxon'
import 'dotenv/config'
import sequelize from 'sequelize'

export const config_database:sequelize.Options = {
  dialect: 'mysql',
  host:process.env.DATABASE_HOST!,
  timezone: DateTime.now().toSQL().split(' ')[2],
  logging: process.env.ENVIROMENT === 'DEVELOPMENT' ?   e => console.log('DATABASE_LOG: '+ e + ' 😳') : false
}