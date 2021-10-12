import { Request, Response } from "express";
import { json } from "sequelize";
import { IUpdateClassificationsDTO } from "./UpdateClassificationsDTO";
import { UpdateClassificationsUseCase } from "./UpdateClassificationsUseCase";
import { UpdateClassificationValidator } from "./UpdateClassificationsValidator";


export class UpdateClassificationsController extends UpdateClassificationsUseCase {
  public async UpdateClassificationController(req:Request, res:Response): Promise<Response>{
    const update_object:IUpdateClassificationsDTO = req.body
    const validator = new UpdateClassificationValidator(update_object, {name_length: 10})
    try{
      validator.UpdateClassificationTreatment()
      const [result_updated] = await this.UpdateClassification(update_object)
      if(result_updated){
        return res.json({message: 'classification updated.', result_updated})
      }
      return res.status(404).json({message: `classification id ${update_object.id} not exist.`})
    } catch ({message}){
      return res.status(400).json({message: message as string | 'not updated', error:true})
    }
  }
}