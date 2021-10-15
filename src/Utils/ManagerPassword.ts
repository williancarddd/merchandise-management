import bcryptjs from 'bcryptjs'

export async function EncryptPassword(pass: string): Promise<string>{
  const salt = await bcryptjs.genSalt(5)
  const crypted_password = bcryptjs.hashSync(pass, salt)
  return crypted_password
}

export function ComparePassword(not_encrypted_password:string, encrypted_password:string){
  return bcryptjs.compareSync(not_encrypted_password, encrypted_password)
}