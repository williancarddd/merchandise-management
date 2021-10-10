import { Classifications } from "../../../Database/Models/Classifications/ClassificationsModel";

export abstract class SelectAllClassificationsUseCase {
  protected async SelectAllClassifications(): Promise<Array<Classifications>>{
    return await Classifications.findAll()
  }
}