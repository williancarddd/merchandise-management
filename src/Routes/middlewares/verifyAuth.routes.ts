import { NextFunction, Request, Response } from "express";
import 'dotenv/config'
import jsonwebtoken from 'jsonwebtoken'

export function MiddlewareVerifyAuth(req: Request, res: Response, next:NextFunction) {
  const {authorization} = req.headers
  const TOKENJSON = authorization?.trim().split(' ')[1]
  if(TOKENJSON){
    jsonwebtoken.verify(TOKENJSON, process.env.JSON_SECRET_WEB_TOKEN, (err, dataToken ) => {
      if(err){
        return res.status(400).json({message: 'token not authorized.', error: true, type:err.name})
      } else {
        return next()
      }
    })
  } else {
    return res.status(401).json({message: 'impossible authenticate in the server', error:true, type: 'token_nonexistent'})
  }
}