import { Classifications } from "../../../Database/Models/Classifications/ClassificationsModel";
import { FormatTitle } from "../../../Utils/FormatTitles";
import { IUpdateClassificationsDTO } from "./UpdateClassificationsDTO";


export abstract class UpdateClassificationsUseCase {
  protected async UpdateClassification({name, image, id}: IUpdateClassificationsDTO):  Promise<[number, Classifications[]]>{
    const result_update =  await Classifications.update({
      name_classification: FormatTitle(name),
      photo_classification: image
    },
    {where: {
      id:id
    }})
    return result_update
  }
}