const BASE_URL = "https://77-dev.uicgroup.tech/api/v1"

const accessToken = localStorage.getItem("access")

function Servise (method,url,data,params ) {
  const headers =  {
    "Content-Type": "application/json",
  }
  if(accessToken){
   headers.Authorization = `Bearer ${accessToken}`
  }
return new Promise ((resolve, reject)=>{
  fetch(BASE_URL + url, {
    method : method,
    headers,
    body: JSON.stringify(data),
    params:params,

  }).then((res)=> res.json()).then((res)=> resolve(res)).catch((err)=> {console.log("err", err); reject(err)})
})
}

export default {
  get(url, params){
    return Servise("GET", url, params)
  },
  post(url,data, params){
    return Servise("POST", url , data, params)
  },
  put(url,data, params){
    return Servise("PUT", url , data, params)
  }, 
   patch(url,data, params){
    return Servise("PATCH", url , data, params)
  },

}