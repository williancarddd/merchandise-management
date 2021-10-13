
export function CreateError(message:string, name_error?:string): Error{
  const error = new Error(message)
  error.name = name_error || 'error'
  return error
}