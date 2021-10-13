import express from 'express'
import { CreateMerchandiseControllerIns } from '../UseCase/Create/CreateMerchandiseUseCase'
import {MiddlewareValidadorEmptyUndefined} from './middlewares/validator.routes'
const merchandise = express.Router()

merchandise.post('/', MiddlewareValidadorEmptyUndefined, async (req, res) =>  CreateMerchandiseControllerIns.CreatMerchandiseController(req, res) )

export {merchandise}