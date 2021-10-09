import { Classifications } from "../../../Database/Models/Classifications/ClassificationsModel";

export abstract class SelectAllClassificationsUseCase {
  protected async SelectAllClassifications(): Promise<Array<Classifications> | false>{
   try{
    return await Classifications.findAll()
   }catch(err){
     return false
   }
  }
}