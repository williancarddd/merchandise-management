import { ISelectClassificationIdDTO } from "./SelectClassificationDTO";

export class SelectClassificationValidator{
  public static  SelectClassificationTreatment(id: ISelectClassificationIdDTO): boolean | never{
    if(isNaN(id)){
      throw new Error("invalid params");
    } else {
      if(id < 0){
        throw new Error("not exists param negative.");
      }
    }
    return true
  }
}