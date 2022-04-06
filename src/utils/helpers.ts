import { boolean } from "yup";

const storageKeyName = "accessToken";

const setLocalStorage = (data: string, name: string) => {
  if (!data) return;
  if(name) localStorage.setItem(name, data);
  else localStorage.setItem(storageKeyName, data);
};

const getLocalStorage = (name: string) => {
  if(name) return localStorage.getItem(name);
  else return localStorage.getItem(storageKeyName);
};

const deleteLocalStorage = (name: string) => {
  if(name) return localStorage.removeItem(name);
  return localStorage.removeItem(storageKeyName);
};

const getWidgetData= (data:Array<Object>,countKey:string,countValue:any)=> {
  const filteredData= data.filter((boat:any)=>boat[countKey]===countValue)
  console.log(filteredData)
  return {total:data.length||0,available:filteredData.length||0,remaining:data.length-filteredData.length||0}
}

export {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
  getWidgetData
};