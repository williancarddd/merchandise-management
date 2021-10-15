import { Merchandise } from "../../../Database/Models/Merchandise/MerchandiseModel";
import { FormatTitle } from "../../../Utils/FormatTitles";
import { IUpdateMerchandiseDTO } from "./UpdateMerchandiseDTO";


export class UpdateMerchandiseUseCase{
  protected async UpdateMerchandise(merchandise: IUpdateMerchandiseDTO, id:number): Promise<Array<number | Array<Merchandise>>>{
    const result_update_merchandise = await Merchandise.update(
      {...merchandise , 
      name_merchandise: FormatTitle(merchandise.name_merchandise)}, 
      {where: {id: id}})
    return result_update_merchandise
  }
}