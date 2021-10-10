import {Request, Response} from 'express'
import { IErrorController } from '../../../Interfaces/IErrorController'
import { IClassificationDTO } from './CreateClassificationDTO'
import { CreateClassificationUseCase } from './CreateClassificationUseCase'
import { CreateClassificationValidator } from './CreateClassificationValidator'

export class CreateClassificationController extends CreateClassificationUseCase {
  public async handleCreateClassification(req: Request, res: Response):Promise<Response>{
      const data: IClassificationDTO = {
        name: req.body.name,
        image: req.body.image
      }
      const validator = new CreateClassificationValidator(data, {name_length: 10})
      try{
        validator.CreateClassificationTreatment()
        await this.CreateClassification(data)
        return  res.json({message: 'Classification created.'})
      } catch({message}){
        const error: IErrorController = { error:true, message: message as string, type: 'not created' }
        return res.status(400).json(error)
      }
     
  }
}
