import { User } from "../../../Database/Models/Users/UserModel";
import { EncryptPassword } from "../../../Utils/ManagerPassword";
import { ICreateUserDTO } from "./CreateUserDTO";


export class CreateUserUseCase{
  protected async CreateUserCase(user_object: ICreateUserDTO){
    const search_email = await User.findOne({where: {email: user_object.email}})
    if(!search_email){
      return await User.create({
        email: user_object.email,
        password: await EncryptPassword(user_object.password)
      })
    }
  }
}