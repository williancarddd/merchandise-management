import { ISelectClassificationIdDTO } from "./SelectClassificationDTO";

export class SelectClassificationValidator{
  public static  SelectClassificationTreatment(id: ISelectClassificationIdDTO): boolean | never{
    if(isNaN(id)){
      throw new Error("invalid id");
    } else {
      if(id < 0){
        throw new Error("not exists id negative.");
      }
    }
    return true
  }
}