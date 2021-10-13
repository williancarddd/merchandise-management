import { isWebUri } from "valid-url";
import { IUpdateClassificationsDTO } from "./UpdateClassificationsDTO";

interface IConfigClassificationValidator{
  name_length: number
}
export class UpdateClassificationValidator{
  
  
  public constructor(
    private data: IUpdateClassificationsDTO,
    private config:IConfigClassificationValidator
    ){}
  public UpdateClassificationTreatment(): never | true{
    if(this.data.name.length < this.config.name_length){
      throw new Error(`impossible update length min is ${this.config.name_length} to ${this.data.name.length}`);
    }
    if(this.data.image){
      if(!isWebUri(this.data.image)){
        throw new Error(`invalid image url ${this.data.image}`)
      }
    }
    if(isNaN(this.data.id)){
      throw new Error(`invalid id ${this.data.id}.`)
    }
    if(!isNaN(this.data.id) && this.data.id < 0){
      throw new Error(`not exist id negative.`)
    }
    return true
  }
}