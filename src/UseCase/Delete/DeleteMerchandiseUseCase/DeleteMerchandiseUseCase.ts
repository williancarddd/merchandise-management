import { Merchandise } from "../../../Database/Models/Merchandise/MerchandiseModel";
import { IDeleteMerchandiseUseCaseDTO } from "./DeleteMerchandiseUseCaseDTO";


export class DeleteMerchandiseUseCase{
  protected async DeleteMerchandise({id}: IDeleteMerchandiseUseCaseDTO): Promise<number>{
   return  await Merchandise.destroy({where: {id}})
  }
  
}