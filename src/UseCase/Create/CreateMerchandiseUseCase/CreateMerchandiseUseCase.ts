import { Merchandise } from "../../../Database/Models/Merchandise/MerchandiseModel";
import { FormatTitle } from "../../../Utils/FormatTitles";
import { ICreateMerchandiseDTO } from "./CreateMerchandiseDTO";


export class CreateMerchandiseUseCase {
  public  async  CreateMerchandise(merchandise_object:ICreateMerchandiseDTO): Promise<void>{
    await Merchandise.create({
      ...merchandise_object,
      name_merchandise: FormatTitle(merchandise_object.name_merchandise)
    })
  }
}