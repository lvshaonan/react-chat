/**
 * Created by Administrator on 2018/1/30.
 */
export function getRedirectTo({type, avatar}) {
  let url = (type == 'boss') ? 'boss' : 'genius'
  if(!avatar){
    url += 'info'
  }
  return url
}