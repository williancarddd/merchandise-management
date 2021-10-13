import { CreateError } from "../../../Utils/CreateError";
import { IDeleteMerchandiseUseCaseDTO } from "./DeleteMerchandiseUseCaseDTO";

export class DeleteMerchandiseValidator{
  public constructor (
    private id:IDeleteMerchandiseUseCaseDTO){}
  public DeleteMerchandiseTreatment(): never | true{
    if(this.id.id){
      if(isNaN(this.id.id)){
        throw CreateError(`id invalid`, 'id_delete')
      } else {
        if(this.id.id < 0){
          throw CreateError(`not exists id negative`, 'id_negative')
        }
      }
    }
    return true
  }
}