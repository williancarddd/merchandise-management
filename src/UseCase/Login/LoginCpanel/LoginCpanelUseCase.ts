import { User } from "../../../Database/Models/Users/UserModel";
import { CreateError } from "../../../Utils/CreateError";
import { GenerateTokenAcess } from "../../../Utils/GenerateTokeAcess";
import { ComparePassword } from "../../../Utils/ManagerPassword";
import { ILoginCpanelDTO } from "./LoginCpanelDTO";


export class LoginCPanelUseCase {
  protected async LoginCpanel(object_login: ILoginCpanelDTO):Promise<never|string>{

    const data_email = await User.findOne({where: {email: object_login.email}})
    
    if(data_email){

      if(ComparePassword(object_login.password, data_email.getDataValue('password'))){
        return GenerateTokenAcess({id: data_email.getDataValue('id'), email: data_email.getDataValue('email')})
      } else {
        throw CreateError('invalid password', 'password_invalid')
      }
      
    } else {
      throw CreateError('email not exist', 'not_email')
    }
  }
}