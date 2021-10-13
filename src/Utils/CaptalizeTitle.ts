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