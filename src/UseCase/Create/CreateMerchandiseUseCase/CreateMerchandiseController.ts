import { Request, Response } from "express";
import { ICreateMerchandiseDTO } from "./CreateMerchandiseDTO";
import { CreateMerchandiseUseCase } from "./CreateMerchandiseUseCase";
import { CreateMerchandiseValidator } from "./CreateMerchandiseValidator";


export class CreateMerchandiseController extends CreateMerchandiseUseCase{
  public  async  CreatMerchandiseController(req:Request, res:Response): Promise<Response>{
    const object_merchandise:ICreateMerchandiseDTO = req.body
    const validator = new CreateMerchandiseValidator(object_merchandise, {name_length:10})

    try{
      validator.CreateMerchandiseTreatment()
      await this.CreateMerchandise(object_merchandise)
      return res.status(200).json({message: 'merchandise created with success.'})
    } catch({message, name}) {
      if(name === 'SequelizeForeignKeyConstraintError') return res.status(404).json({message:'classification nonexistent.', error: true})
      return res.status(400).json({message: message as string|| 'error at create the merchandise.', error: true, type:name})
    }

  }
}