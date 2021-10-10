import { Classifications } from "../../../Database/Models/Classifications/ClassificationsModel";
import { ISelectClassificationIdDTO } from "./SelectClassificationDTO";

export abstract class SelectClassificationUseCase {
  protected async SelectClassificationById(id:ISelectClassificationIdDTO):Promise<Classifications | null>{
    const data_one_classification = await Classifications.findByPk(id)
    if(data_one_classification != null){
      return data_one_classification  
    } 
    return null
  } 
}