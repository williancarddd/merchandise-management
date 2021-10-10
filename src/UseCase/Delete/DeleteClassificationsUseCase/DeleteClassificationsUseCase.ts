import { Classifications } from "../../../Database/Models/Classifications/ClassificationsModel";
import { IDeleteClassificationsDTO } from "./DeleteClassificationsDTO";


export abstract class DeleteClassificationsUseCase{
  protected async DeleteClassificationsUseCase(id: IDeleteClassificationsDTO):Promise<number | null>{
   try{
      const response_delete = await Classifications.destroy({where: {id}})
      return response_delete
    } catch(err) {
      return null
    }
  }
}