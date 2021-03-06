import { Classifications } from "../../../Database/Models/Classifications/ClassificationsModel";
import { FormatTitle } from "../../../Utils/FormatTitles";
import { IClassificationDTO } from "./CreateClassificationDTO";

export abstract class CreateClassificationUseCase   {
  
  protected async CreateClassification({name, image}: IClassificationDTO):Promise<void>{
    await Classifications.create({
      name_classification: FormatTitle(name),
      photo_classification: image
    })
  }
}