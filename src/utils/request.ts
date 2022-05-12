import axios from 'axios';
// import { history } from "../index";
import {getLocalStorage,deleteLocalStorage} from "../utils/helpers";
import { auth } from "../Config/firebase";
import logging from "../Config/logging";

const baseUrl="http://ec2-3-110-177-55.ap-south-1.compute.amazonaws.com:8080/";

export const logout = () => {
  auth
    .signOut()
    .then(() => {
      deleteLocalStorage("firebaseData");
      window.location.reload()
    })
    .catch((error) => logging.error(error));
};


export const getApiKey= ()=> {
  const localData = getLocalStorage("firebaseData");
  const parsedData = localData && JSON.parse(localData);
  return  parsedData.stsTokenManager.apiKey || ""
}

const axiosInstance=axios.create({
    baseURL: baseUrl,
    headers:{
"content-type":"application/json",
   accept:"*/*",
   "X-API-KEY":"a8d6ge7d-5tsa-8d9c-m3b2-30e21c0e9564",
    }
})

export const request = ({...options}) => {
  const onSuccess= (response:any) => response;
  const onError = (error:any) => {
    if(error.response.status === 401) {
      console.log("i am error",error)
      logout()
    }
    if(error.response.status === 500) {
      // logout()
      
      return error.response
    }
    return error.response
  };
return axiosInstance(options).then(onSuccess).catch(onError);
}


