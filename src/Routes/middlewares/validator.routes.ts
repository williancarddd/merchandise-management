import { NextFunction, Request, Response } from "express";

export function MiddlewareValidadorEmptyUndefined(req: Request, res: Response, next: NextFunction){
  const data = req.body
  const empty_fild = new Array()
  for(let key in data){
    const stringData = String(data[key]).trim()
    if( stringData === undefined || stringData === ''){
      empty_fild.push(key) 
    }
  }

  if (empty_fild.length != 0){
    return res.status(400).json({message: ` filds  empty. ` , fildsEmpty: empty_fild})
  }

  next()
}