import { Request, Response } from "express";
import { SelectMerchandiseUseCase } from "./SelectMerchandiseUseCase";
import { ISelectMerchandiseUseCaseDTO } from "./SelectMerchandiseUseCaseDTO";
import { SelectMerchandiseValidator } from "./SelectMerchandiseValidator";


export class SelectMerchandiseController  extends SelectMerchandiseUseCase{
  public async SelectMerchandiseController(req:Request, res:Response){
    const param_select: ISelectMerchandiseUseCaseDTO = req.params

    const validator = new SelectMerchandiseValidator(param_select)
    try{
      validator.SelectMerchandiseTreatment()
      const result_select_one_merchandise = await this.SelectMerchandiseUseCase(param_select)
      if(result_select_one_merchandise){
        return res.json(result_select_one_merchandise)
      } else {
        return res.status(404).json({message: `merchandis id ${param_select.id} not found.`})
      }
    } catch({message, name}){
      return res.status(400).json({message: message as string | 'impossible select the merchandise',error: true, type:name})
    }
  }
}