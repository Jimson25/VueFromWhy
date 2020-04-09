import request from '../router/axios';

export const getName = (page,size)=>{
  return request({
    url:'main/getName',
    params:{
      page,
      size
    }
  })
}
