import {Request, Response} from 'express'
import { IErrorController } from '../../../Interfaces/IErrorController'
import { IClassificationDTO } from './CreateClassificationDTO'
import { CreateClassificationUseCase } from './CreateClassificationUseCase'

export class CreateClassificationController extends CreateClassificationUseCase {
  public async handleCreateClassification(req: Request, res: Response):Promise<Response>{
      const data: IClassificationDTO = {
        name: req.body.name,
        image: isNaN(req.body.image) ? req.body.image : null
      }
      /// procurar uma forma eficaz para validar
      const create_response = await this.CreateClassification(data)
      if(create_response){
        return  res.json({message: 'Classification created.'})
      } else {
        const error: IErrorController = { error:true, message: 'not possible create the classification.', type: 'not created' }
        return res.status(400).json(error)
      }
  }
}
