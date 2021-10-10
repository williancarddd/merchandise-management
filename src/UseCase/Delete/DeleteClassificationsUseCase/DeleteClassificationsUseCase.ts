import { Classifications } from "../../../Database/Models/Classifications/ClassificationsModel";
import { IDeleteClassificationsDTO } from "./DeleteClassificationsDTO";


export abstract class DeleteClassificationsUseCase{
  protected async DeleteClassificationsUseCase(id: IDeleteClassificationsDTO):Promise<number>{
    const response_delete = await Classifications.destroy({where: {id}})
    return response_delete
  }
}