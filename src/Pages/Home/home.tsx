import React, { useState, useEffect } from "react";
import { Center } from "@chakra-ui/react";

import AuthContainer from "../../Components/AuthRoute/index";
import IPageProps from "../../Interfaces/page";
import { getLocalStorage } from "../../utils/helpers";
import Navigation from "../../Components/Navigation/navigation";
import DataTable from "../../Components/Table/table";
import { data, columns } from "./Data/data";

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
        <Center>
          <DataTable columns={columns} data={data} />
        </Center>
      </Navigation>
    </AuthContainer>
  );
}

export default HomeScreen;