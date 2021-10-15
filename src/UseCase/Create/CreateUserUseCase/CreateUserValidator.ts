import { CreateError } from "../../../Utils/CreateError";
import { ICreateUserDTO } from "./CreateUserDTO";
import * as emailValidator from 'email-validator'


export class CreateUseValidator{
  public constructor(
    private user_object: ICreateUserDTO
  ){}
  public CreateUserTreatment(){
    if(!emailValidator.validate(this.user_object.email)){
      throw CreateError('email invalid', 'email_invalid')
    }
    return true
  }
}