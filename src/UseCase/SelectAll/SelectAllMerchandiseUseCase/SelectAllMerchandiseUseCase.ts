import { Classifications } from "../../../Database/Models/Classifications/ClassificationsModel";
import { Merchandise } from "../../../Database/Models/Merchandise/MerchandiseModel";


export class SelectAllMerchandiseUseCase{
  protected async SelectAllMerchandiseUseCase(): Promise<Array<Merchandise>>{
    return await Merchandise.findAll({include: { model: Classifications}})
  }
}