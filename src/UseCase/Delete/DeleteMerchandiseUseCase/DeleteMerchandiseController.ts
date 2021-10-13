import { Request, Response } from "express";
import { DeleteMerchandiseUseCase } from "./DeleteMerchandiseUseCase";
import { IDeleteMerchandiseUseCaseDTO } from "./DeleteMerchandiseUseCaseDTO";
import { DeleteMerchandiseValidator } from "./DeleteMerchandiseValidator";


export class DeleteMerchandiseController extends DeleteMerchandiseUseCase{
  public async DeleteMerchandiseController(req:Request, res:Response): Promise<Response>{
    const id:IDeleteMerchandiseUseCaseDTO = req.params
    const validator = new DeleteMerchandiseValidator(id)
    try{
      validator.DeleteMerchandiseTreatment()
      const result_delete = await this.DeleteMerchandise(id)
      if(result_delete){
        return res.json({message: `merchandise ${id.id} deleted`})
      } else {
        return res.status(404).json({message: 'merchandise id not exist.'})
      }
    } catch({message, name}){
      return res.status(400).json({message: message as string | 'impossible delet the merchandise', error:true, type: name})
    }
  }
}