import express from 'express'
import { classifications } from './classifications.routes'
import { config_morgan } from './middlewares/logs.routes'

const routers = express.Router()

routers.use(config_morgan)
routers.use('/classifications', classifications)

export {routers}