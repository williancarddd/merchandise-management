import { Request, Response } from "express";
import { ILoginCpanelDTO } from "./LoginCpanelDTO";
import { LoginCPanelUseCase } from "./LoginCpanelUseCase";


export class LoginCPanelController extends LoginCPanelUseCase{
  public async LoginCpanelController(req: Request, res:Response){
    const credencials:ILoginCpanelDTO = req.body
    try{
      const token_access = await this.LoginCpanel(credencials)
      res.json({token_access: `Bearer ${token_access}`})
    } catch({message, name}){
      res.status(401).json({message: message as string | 'impossible execute the login', error: true, type: name})
    }
  }
}