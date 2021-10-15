import express from 'express'
import { CreateUserControllerIns } from '../UseCase/Create/CreateUserUseCase'
import { MiddlewareValidadorEmptyUndefined } from './middlewares/validator.routes'
const users = express.Router()

users.post('/', MiddlewareValidadorEmptyUndefined, async (req, res) => CreateUserControllerIns.CreateUserController(req, res) )
export {users}