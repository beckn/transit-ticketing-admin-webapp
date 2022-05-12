import { useQuery } from "react-query";
import {request } from "../utils/request";


const getBoatData = async (path:string) => {
  
  const {data} = await request({url:path})
   return data;
};

export const  useApi=(path:string) =>{
  return useQuery([`${path}`, path], async() =>  await getBoatData(path),{
    retry : 2
  });
}
