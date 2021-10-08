import 'dotenv/config'
import  './Database/dataBase'
import { routers } from './Routes/index.routes'
import express from 'express'
import cors from 'cors'

const port_app = process.env.PORT_APP || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(routers)

app.listen(port_app, () =>(
  console.log(`\n\nserver running port ${port_app} seccesful 🆗`)
))