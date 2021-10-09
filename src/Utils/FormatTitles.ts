
export function CaptalizeTitle(title:string): string{
  return title.split(' ').
  map(e => e.split('') ).
  map(e => e.length != 0 ? e : ['']).
  map(e => {
    e.splice(0, 1, e[0].toUpperCase())
    return e
  })
  .join(' ')
  .replace(/[,]/gi, '')
}

export function FormatTitle(title:string): string{
  try{
    const string_removed_caracters = title.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/0-9]/gi, '')
    const string_captalized = CaptalizeTitle(string_removed_caracters)
    return string_captalized
  } catch (err){
    return title
  }
}
