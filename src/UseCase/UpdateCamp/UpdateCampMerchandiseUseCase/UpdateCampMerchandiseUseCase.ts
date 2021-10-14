import { Merchandise } from "../../../Database/Models/Merchandise/MerchandiseModel";
import { IUpdateCampMerchandiseDTO } from "./UpdateCampMerchandiseDTO";


export class UpdateCampMerchandiseUseCase{
  protected async UpdateCampMerchandise(property_merchandise: IUpdateCampMerchandiseDTO, id: number):Promise< Array<number | Array<Merchandise>>>{
    return await Merchandise.update(property_merchandise, {where: {id}})
  }
}