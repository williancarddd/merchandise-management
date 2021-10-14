import { Request, Response } from "express";
import { IUpdateCampMerchandiseDTO } from "./UpdateCampMerchandiseDTO";
import { UpdateCampMerchandiseUseCase } from "./UpdateCampMerchandiseUseCase";


export class UpdateCampMerchandiseController extends UpdateCampMerchandiseUseCase{
  public async UpdateCampMerchandiseController(req: Request, res: Response): Promise<Response>{
    const property_merchandise:IUpdateCampMerchandiseDTO = req.body
    const id:number = Number(req.params.id)  
    try{
      const [result_update_camp] = await this.UpdateCampMerchandise(property_merchandise, id)
      if(result_update_camp){
        return  res.json({message: `${Object.keys(property_merchandise)} updated.`})
      }
      return  res.status(404).json({message: 'merchandise not found'})
    } catch({message, name}){
      return res.status(400).json({message: message as string | `impossible update ${3}`, error:true, type: name})
    }
  }
}