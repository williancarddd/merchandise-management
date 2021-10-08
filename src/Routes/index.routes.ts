import express from 'express'
import { config_morgan } from './middlewares/logs.routes'

const routers = express.Router()

routers.use(config_morgan)
routers.use('/', (req, res) => {
  res.send('ok')
})

export {routers}