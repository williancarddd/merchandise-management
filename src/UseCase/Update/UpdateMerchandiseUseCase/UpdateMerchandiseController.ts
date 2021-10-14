import { Request, Response } from "express";
import { IUpdateMerchandiseDTO } from "./UpdateMerchandiseDTO";
import { UpdateMerchandiseUseCase } from "./UpdateMerchandiseUseCase";
import { UpdateMerchandiseValidator } from "./UpdateMerchandiseValidator";


export class UpdateMerchandiseController extends UpdateMerchandiseUseCase{
  public async UpdateMerchandiseController(req: Request, res:Response): Promise<Response>{
    const object_merchandise: IUpdateMerchandiseDTO = req.body
    const id_merchandise: number = Number(req.params.id)

    const validator = new UpdateMerchandiseValidator(object_merchandise, {name_length: 10}, id_merchandise)
    try{
      validator.UpdateMerchandiseTreatment()
      const [result_update_merchandise] = await this.UpdateMerchandise(object_merchandise, id_merchandise)
      if(result_update_merchandise){
        return res.json({message: 'merchandise updated.'})
      }
      return res.json(404).json({message: 'merchandise not found.'})
    } catch({message, name}){
      return res.status(400).json({message: message as string || 'impossible the update merchandise', error:true, type: name})
    }
  }
}