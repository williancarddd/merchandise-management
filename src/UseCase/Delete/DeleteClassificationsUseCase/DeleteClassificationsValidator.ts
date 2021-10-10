import { IDeleteClassificationsDTO } from "./DeleteClassificationsDTO";

export class DeleteClassificationValidator {
  public static DeleteClassificationTreatment(id: IDeleteClassificationsDTO): boolean | never{
    if(isNaN(id)){
      throw new Error("invalid params.");
    }
    if(id < 0){
      throw new Error("not exists id negative.");
    }
    return true
  }
}