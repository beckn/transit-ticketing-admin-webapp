
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

export {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage
};