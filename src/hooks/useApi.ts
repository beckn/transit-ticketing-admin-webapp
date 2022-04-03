import { useQuery } from "react-query";
import axios from "axios";

const baseUrl="http://ec2-3-110-177-55.ap-south-1.compute.amazonaws.com:8080/"

const axiosInstance=axios.create({
    baseURL: baseUrl,
    headers:{
"content-type":"application/json",
   accept:"application/json"
    }
})

const getBoatData = async (path:string) => {
  const { data } = await axiosInstance.get(
    `${baseUrl}${path}`
  );
  return data;
};

export const  useApi=(path:string) =>{
  return useQuery([`${path}`, path], () => getBoatData(path),{
    retry : 2
  });
}
