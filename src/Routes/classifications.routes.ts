import express from 'express'
import { CreateClassificationControllerIns } from '../UseCase/Create/CreateClassificationsUseCase'
import { DeleteClassificationsControllerIns } from '../UseCase/Delete/DeleteClassificationsUseCase'
import { SelectClassificationControllerIns } from '../UseCase/Select/SelectClassificationsUseCase'
import { SelectAllClassificationsControllerIns } from '../UseCase/SelectAll/SelectAllClassificationsUseCase'
import { UpdateClassificationControllerIns } from '../UseCase/Update/UpdateClassificationsUseCase'
import { MiddlewareValidadorEmptyUndefined } from './middlewares/validator.routes'
const classifications = express.Router()

// all routes relationed with the classification to stay here

classifications.post('/', MiddlewareValidadorEmptyUndefined ,async (req, res) => CreateClassificationControllerIns.handleCreateClassification(req, res) )
classifications.delete('/:id', async (req, res) => DeleteClassificationsControllerIns.handleDeleteClassification(req, res))
classifications.put('/', MiddlewareValidadorEmptyUndefined, async (req, res) =>  UpdateClassificationControllerIns.UpdateClassificationController(req, res) )
classifications.get('/', async (req, res) => SelectAllClassificationsControllerIns.handleSelectAllClassifications(req, res))
classifications.get('/:id', async (req, res) => SelectClassificationControllerIns.handleSelectClassificationById(req, res))
export {classifications}