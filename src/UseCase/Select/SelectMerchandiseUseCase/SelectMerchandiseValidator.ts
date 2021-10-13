import { CreateError } from "../../../Utils/CreateError";
import { ISelectMerchandiseUseCaseDTO } from "./SelectMerchandiseUseCaseDTO";


export class SelectMerchandiseValidator{
  public constructor(
    private param_select:ISelectMerchandiseUseCaseDTO
    ){}
  
    public SelectMerchandiseTreatment(){
      if(this.param_select.id){
        if(isNaN(this.param_select.id)){
          throw CreateError(`invalid id merchandise ${this.param_select.id}`, 'param_select_id')
        }
      }

      if(this.param_select < 0 ){
        throw CreateError('not exists id negative')
      }
      return true
    }

}