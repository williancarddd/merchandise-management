import { Request, Response } from "express";
import { IDeleteClassificationsDTO } from "./DeleteClassificationsDTO";
import { DeleteClassificationsUseCase } from "./DeleteClassificationsUseCase";

export class DeleteClassificationsController extends DeleteClassificationsUseCase{
  public async handleDeleteClassification(req:Request, res:Response):Promise<Response>{
    const id:IDeleteClassificationsDTO = Number(req.params.id)
    if(!isNaN(id)){
      const response_delete_classification = await this.DeleteClassificationsUseCase(id)
      if(response_delete_classification == 1 ){
        return res.json({message: `classification ${id} deleted.`})
      }
      else if(response_delete_classification == 0){
        return res.status(404).json({message: 'classification not found.'})
      }
      else {
        return res.status(400).json({message: 'not possible delete the classification.'})
      }
    }
    else {
      return res.status(400).json({message: 'param invalid.'})
    }
  }
}