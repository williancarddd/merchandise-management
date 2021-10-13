import { Merchandise } from "../../../Database/Models/Merchandise/MerchandiseModel";
import { ISelectMerchandiseUseCaseDTO } from "./SelectMerchandiseUseCaseDTO";


export class SelectMerchandiseUseCase {
  protected async SelectMerchandiseUseCase({id}: ISelectMerchandiseUseCaseDTO): Promise<Merchandise | null> {
    const result_select_merchandise = await Merchandise.findByPk(id)
    return result_select_merchandise
  }
}