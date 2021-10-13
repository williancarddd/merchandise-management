import express from 'express'
import { CreateMerchandiseControllerIns } from '../UseCase/Create/CreateMerchandiseUseCase'
import { DeleteMerchandiseControllerIns } from '../UseCase/Delete/DeleteMerchandiseUseCase'
import { SelectMerchandiseControllerIns } from '../UseCase/Select/SelectMerchandiseUseCase'
import {MiddlewareValidadorEmptyUndefined} from './middlewares/validator.routes'
const merchandise = express.Router()

merchandise.get('/:id',async (req, res) =>  SelectMerchandiseControllerIns.SelectMerchandiseController(req, res))
merchandise.post('/', MiddlewareValidadorEmptyUndefined, async (req, res) =>  CreateMerchandiseControllerIns.CreatMerchandiseController(req, res) )
merchandise.delete('/:id', async (req, res) => DeleteMerchandiseControllerIns.DeleteMerchandiseController(req, res))
export {merchandise}