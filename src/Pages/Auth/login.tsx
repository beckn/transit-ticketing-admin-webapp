import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Redirect, useHistory } from "react-router-dom";
import logging from "../../Config/logging";
import { auth } from "../../Config/firebase";
import AuthContainer from "../../Components/AuthRoute/index";
import IPageProps from "../../Interfaces/page";
import { getLocalStorage, setLocalStorage } from "../../utils/helpers";

const LoginScreen: React.FC<IPageProps> = (props) => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  
  const history = useHistory();

  useEffect(() => {
    const data = getLocalStorage("firebaseData");
    if(data) {
      const parsedData = JSON.parse(data);
      const accessToken = parsedData.stsTokenManager.accessToken || "";
      if(accessToken){
        history.push("/");
      }
    }
  },[]);

  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");

    setAuthenticating(true);

    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
        logging.info(result);
        setLocalStorage(JSON.stringify(result), "firebaseData");
        history.push("/");
    })
    .catch(error => {
        logging.error(error);
        setAuthenticating(false);
        setError(error.message);
    });
  }

  return (
    // <AuthContainer>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1} align="center" justify="center">
          <Flex direction="column">
            <Heading fontSize={"3xl"} textAlign="left">Government of Kerala</Heading>
            <Heading 
              fontSize={"5xl"} 
              fontWeight="300"
              mt="4" 
              textAlign="left"
            >
              State Water Transport <br /> Department
            </Heading>
          </Flex>
        </Flex>

        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} border={"1px solid #000000"} pt={"49"} w={"full"} maxW={"md"}>
            {/* <Heading fontSize={"2xl"}>Sign in to your account</Heading> */}
            <Flex flex={1} justify="center">
              <Image
                alt={"Login Image"}
                borderRadius="full"
                boxSize="227px"
                objectFit={"cover"}
                src={
                  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                }
              />
            </Flex>
            <FormControl px={"10"} id="email">
              <FormLabel>User ID</FormLabel>
              <Input 
                type="email" 
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={event => setEmail(event.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl px={"10"} id="password">
              <FormLabel>Password</FormLabel>
              <Input 
                autoComplete="new-password"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={event => setPassword(event.target.value)}
                value={password}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                px={"10"}
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}>
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button 
                colorScheme={"blue"} 
                variant={"solid"}
                disabled={authenticating}
                onClick={() => signInWithEmailAndPassword()}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    // </AuthContainer>
  );
}

export default LoginScreen;