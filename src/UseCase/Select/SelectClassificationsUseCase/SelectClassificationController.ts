import { SelectClassificationUseCase } from "./SelectClassificationUseCase";
import { Request, Response } from "express";
import { ISelectClassificationIdDTO } from "./SelectClassificationDTO";
import { IErrorController } from "../../../Interfaces/IErrorController";
import {SelectClassificationValidator} from './SelectClassificationValidator'

export class SelectClassificationController extends SelectClassificationUseCase{
  public async  handleSelectClassificationById(req:Request , res:Response):Promise<Response>{
    const id:ISelectClassificationIdDTO = Number(req.params.id)
    
    try{
      SelectClassificationValidator.SelectClassificationTreatment(id)
      const data_one_classification = await this.SelectClassificationById(id)
      if(data_one_classification){
          return res.json(data_one_classification)
      }
      return res.status(404).json({ message: `not have a classification with id ${id}` })
    } catch({message}) {
      const error: IErrorController= { message: message as string | 'an error occurred while searching.', type: 'error search resource in db.', error:true }
      return res.status(400).json(error)
    }
  }
}