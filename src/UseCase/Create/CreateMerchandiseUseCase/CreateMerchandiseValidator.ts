import { isWebUri } from "valid-url";
import { Merchandise } from "../../../Database/Models/Merchandise/MerchandiseModel";
import { CreateError } from "../../../Utils/CreateError";
import { ICreateMerchandiseDTO } from "./CreateMerchandiseDTO";

interface IConfigValidateMerchandise{
  name_length: number

}
export class CreateMerchandiseValidator{
  public constructor(
    private merchandise:ICreateMerchandiseDTO,
    private config:IConfigValidateMerchandise
  ){}

  public  CreateMerchandiseTreatment():never | true{

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