import express from 'express'
import { CreateClassificationControllerIns } from '../UseCase/Create/CreateClassificationsUseCase'
const merchandiseRoute = express.Router()

// all routes relationed with the classification to stay here

merchandiseRoute.post('/', async (req, res) => CreateClassificationControllerIns.handleCreateClassification(req, res) )

export {merchandiseRoute}