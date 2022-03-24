import React, { useState, useEffect } from "react";
import AuthContainer from "../../Components/AuthRoute/index";
import IPageProps from "../../Interfaces/page";
import { getLocalStorage } from "../../utils/helpers";
import Navigation from "../../Components/Navigation/navigation";

const HomeScreen: React.FC<IPageProps> = (props) => {
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const data = getLocalStorage("firebaseData");
    if(data){
      const parsedData = JSON.parse(data);
      setUser(parsedData);
    } 
  }, []);

  return (
    <AuthContainer>
      <Navigation>
        
      </Navigation>
    </AuthContainer>
  );
}

export default HomeScreen;