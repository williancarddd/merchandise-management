import { Request, Response } from "express";
import { Merchandise } from "../../../Database/Models/Merchandise/MerchandiseModel";
import { SelectAllMerchandiseUseCase } from "./SelectAllMerchandiseUseCase";


export class SelectAllMerchandiseController extends SelectAllMerchandiseUseCase{
  public async SelectAllMerchandiseController(req: Request, res:Response): Promise<Response>{

    try{
      const result_all_merchandise:Array<Merchandise> = await this.SelectAllMerchandiseUseCase()
      if(result_all_merchandise.length > 0){
        return res.json(result_all_merchandise)
      }
      return res.status(404).json({message: 'not have merchandises.'})
    } catch({message, name}){
      return res.status(400).json({message: message as string || 'error get the merchandises', error: true, type: name})
    }
  }
}