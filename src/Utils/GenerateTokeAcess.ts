import jsonwebtoken from 'jsonwebtoken'
import 'dotenv/config'
export  function GenerateTokenAcess(data: string | object): string{
  const token =  jsonwebtoken.sign(data, process.env.JSON_SECRET_WEB_TOKEN || 'testcase', {
    expiresIn: '2h'
  })
  return token
}