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
      const validator = new CreateClassificationValidator(data, {name_length: 30})
      try{
        validator.CreateClassificationTreatment()
        const create_response = await this.CreateClassification(data)
        if(create_response){
          return  res.json({message: 'Classification created.'})
        } else {
          return res.status(400).json({message: 'impossible create the classification.'})
        }
      } catch({message}){
        const error: IErrorController = { error:true, message: message as string, type: 'not created' }
        return res.status(400).json(error)
      }
     
  }
}
