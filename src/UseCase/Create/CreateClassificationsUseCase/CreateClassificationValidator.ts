import { IClassificationDTO } from "./CreateClassificationDTO";
import {isWebUri} from 'valid-url'
interface IConfigClassificationValidator{
  name_length: number 
}

export class CreateClassificationValidator {
  private name: string
  private image_url: string | null
  private config: IConfigClassificationValidator

  public constructor(data: IClassificationDTO, config:IConfigClassificationValidator){
    this.name = data.name
    this.image_url = data.image
    this.config = config
  }
  public CreateClassificationTreatment(): never | true {
    if(this.name.length <= this.config.name_length ){
      throw new Error(`length name is invalid, min length ${this.config.name_length} to ${this.name.length}.`)
    }
    if(this.image_url){
      if(!isWebUri(this.image_url)){
        throw new Error('url image invalid format.')
      }
    }
    return true
  }
}