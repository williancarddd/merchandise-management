import { Request, Response } from "express";
import { IDeleteClassificationsDTO } from "./DeleteClassificationsDTO";
import { DeleteClassificationsUseCase } from "./DeleteClassificationsUseCase";
import { DeleteClassificationValidator } from "./DeleteClassificationsValidator";

export class DeleteClassificationsController extends DeleteClassificationsUseCase{
  public async handleDeleteClassification(req:Request, res:Response):Promise<Response>{
    const id:IDeleteClassificationsDTO = req.params.id as unknown as number

    try{
      DeleteClassificationValidator.DeleteClassificationTreatment(id)
      const response_delete_classification = await this.DeleteClassificationsUseCase(id)
      if(response_delete_classification){
        return res.json({message: `classification ${id} deleted.`})
      }else{
        return res.status(404).json({message: 'classification not found.'})
      }
    } catch ({message}) {
      return res.status(400).json({message: message as  string})
    }
  }
}