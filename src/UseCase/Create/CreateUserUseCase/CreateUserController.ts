import { Request, Response } from "express";
import { ICreateUserDTO } from "./CreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUseValidator } from "./CreateUserValidator";


export class CreateUserController extends CreateUserUseCase{
  public async CreateUserController(req: Request, res:Response): Promise<Response>{
    const user_object:ICreateUserDTO = req.body
    const validator = new CreateUseValidator(user_object)
    try{
      validator.CreateUserTreatment()
      const result_create = await this.CreateUserCase(user_object)
      if(result_create){
        return res.json({message: 'user created success.'})
      }
      return res.status(409).json({message: 'email existed'})
    } catch ({message, name}){
      return res.status(400).json({message: message as string | 'impossible create user', error:true, type: name})
      
    }
  }
}