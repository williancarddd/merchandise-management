import express from 'express'
import { CreateMerchandiseControllerIns } from '../UseCase/Create/CreateMerchandiseUseCase'

import { DeleteMerchandiseControllerIns } from '../UseCase/Delete/DeleteMerchandiseUseCase'
import { SelectMerchandiseControllerIns } from '../UseCase/Select/SelectMerchandiseUseCase'
import { SelectAllMerchandiseControllerIns } from '../UseCase/SelectAll/SelectAllMerchandiseUseCase'
import { UpdateMerchandiseControllerIns } from '../UseCase/Update/UpdateMerchandiseUseCase'
import {MiddlewareValidadorEmptyUndefined} from './middlewares/validator.routes'
const merchandise = express.Router()

merchandise.get('/', async (req, res) => SelectAllMerchandiseControllerIns.SelectAllMerchandiseController(req, res))
merchandise.get('/:id',async (req, res) =>  SelectMerchandiseControllerIns.SelectMerchandiseController(req, res))
merchandise.post('/', MiddlewareValidadorEmptyUndefined, async (req, res) =>  CreateMerchandiseControllerIns.CreatMerchandiseController(req, res) )
merchandise.delete('/:id', async (req, res) => DeleteMerchandiseControllerIns.DeleteMerchandiseController(req, res))
merchandise.patch('/:id', MiddlewareValidadorEmptyUndefined, async (req, res) => UpdateMerchandiseControllerIns.UpdateMerchandiseController(req, res))
export {merchandise}