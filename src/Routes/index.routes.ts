import express from 'express'
import { classifications } from './classifications.routes'
import { merchandise } from './merchandise.routes'
import { config_morgan } from './middlewares/logs.routes'
import { users } from './users.routes'

const routers = express.Router()

routers.use(config_morgan)
routers.use('/classifications', classifications)
routers.use('/merchandise', merchandise)
routers.use('/users', users)

export {routers}