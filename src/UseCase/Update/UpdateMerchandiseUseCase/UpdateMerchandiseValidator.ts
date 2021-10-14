import { isWebUri } from "valid-url";
import { CreateError } from "../../../Utils/CreateError";
import { IUpdateMerchandiseDTO } from "./UpdateMerchandiseDTO";

interface IConfigValidateMerchandise{
  name_length: number

}
export class UpdateMerchandiseValidator{
  public constructor(
    private merchandise:IUpdateMerchandiseDTO,
    private config:IConfigValidateMerchandise,
    private id:number
  ){}

  public  UpdateMerchandiseTreatment():never | true{
    if(isNaN(this.id)){
      throw CreateError(`id invalid merchandise.`)
    }
    if(this.merchandise.name_merchandise.length < this.config.name_length){
      throw CreateError(`merchandise name min is ${this.config.name_length} at ${this.merchandise.name_merchandise.length}`, 'name_merchandise')
    }

   if(this.merchandise.photo_merchandise){
    if(!isWebUri(this.merchandise.photo_merchandise)){
      throw CreateError(`photo url image is invalid ${this.merchandise.photo_merchandise}`, 'photo_merchandise')
      }
    }
    
   if(isNaN(this.merchandise.price_merchandise)){
     throw CreateError('merchandise price invalid. ', 'price_merchandise')
   }
   if(isNaN(this.merchandise.quantity_stock_merchandise)){
     throw CreateError('merchanside stock quantity invalid.')
   }
   return true
  }


  
}