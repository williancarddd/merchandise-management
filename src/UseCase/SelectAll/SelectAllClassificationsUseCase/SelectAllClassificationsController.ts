import { Request, Response } from "express";
import { SelectAllClassificationsUseCase } from "./SelectAllClassificationsUseCase";


export class SelectAllClassificationsCrontroller extends SelectAllClassificationsUseCase {
  public async handleSelectAllClassifications(req:Request, res:Response): Promise<Response>{
    try{
      const data_select_all = await this.SelectAllClassifications()
      if(data_select_all && data_select_all.length > 0){
        return res.json(data_select_all)
      }
      return res.status(404).json({message: 'not have classifications.'})
    } catch({message}) {
      return res.status(500).json({message: 'ocurred error in the server.'})
    }
  }
}