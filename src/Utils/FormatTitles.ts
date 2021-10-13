import {CaptalizeTitle} from'./CaptalizeTitle'

export function FormatTitle(title:string): string{
  try{
    const string_removed_caracters = title.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/0-9]/gi, '')
    const string_captalized = CaptalizeTitle(string_removed_caracters)
    return string_captalized
  } catch (err){
    return title
  }
}
