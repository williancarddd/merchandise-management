import express from 'express'
import { merchandiseRoute } from './merchandise.routes'
import { config_morgan } from './middlewares/logs.routes'

const routers = express.Router()

routers.use(config_morgan)
routers.use('/merchandise', merchandiseRoute)

export {routers}