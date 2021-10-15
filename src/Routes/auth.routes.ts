import express from 'express'
import { LoginCPanelcontrollerIns } from '../UseCase/Login/LoginCpanel'
import { MiddlewareValidadorEmptyUndefined } from './middlewares/validator.routes'
const auth = express.Router()

auth.post('/', MiddlewareValidadorEmptyUndefined, async (req,res) => LoginCPanelcontrollerIns.LoginCpanelController(req, res))
export {auth}