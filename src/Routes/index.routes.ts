import express from 'express'
import { auth } from './auth.routes'
import { classifications } from './classifications.routes'
import { merchandise } from './merchandise.routes'
import { config_morgan } from './middlewares/logs.routes'
import { MiddlewareVerifyAuth } from './middlewares/verifyAuth.routes'
import { users } from './users.routes'

const routers = express.Router()

routers.use(config_morgan)
routers.use('/classifications', MiddlewareVerifyAuth,classifications)
routers.use('/merchandise',MiddlewareVerifyAuth,  merchandise)
routers.use('/users', MiddlewareVerifyAuth ,users)
routers.use('/auth', auth )
export {routers}