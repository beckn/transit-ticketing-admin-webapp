import React, { ReactElement, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Image,
  FormErrorMessage,
  useToast
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useHistory } from "react-router-dom";
import logging from "../../Config/logging";
import { auth } from "../../Config/firebase";
// import AuthContainer from "../../Components/AuthRoute/index";
import IPageProps from "../../Interfaces/page";
import { getLocalStorage, setLocalStorage } from "../../utils/helpers";
import { colors } from "../../Assets/Theme/colors";
import IMAGE_PREFIX from "../../Config/image";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const LoginScreen: React.FC<IPageProps> = (props): ReactElement => {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit: ( values, actions ) => {
      if(values.email === "" || values.password === "") return;
      signInWithEmailAndPassword(values.email, values.password);
      actions.resetForm();
    }
  });
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

  const signInWithEmailAndPassword = (email: string, password: string) => {

    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
        logging.info(result);
        setLocalStorage(JSON.stringify(result), "firebaseData");
        history.push("/");
    })
    .catch(error => {
        logging.error(error);
        toast({
          title: 'Account Issue.',
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
    });
  }

  return (
    // <AuthContainer>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>

        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack 
            spacing={8} 
            background={colors.Grey_Black}
            borderRadius={"2xl"}
            py={"49"} 
            w={"full"} 
            maxW={"md"}
            as="form"
            // onSubmit={() => formik.handleSubmit()}
          >
            <Heading px={"6"} color={colors.White} fontSize={"4xl"}>State Water Transport Department</Heading>
            
            <FormControl px={"6"} id="email" isInvalid={formik.errors.email && formik.touched.email ? true : false}>
              <Input 
                type="email" 
                name="email"
                id="email"
                placeholder="Enter Username"
                color={colors.White}
                onChange={formik.handleChange}
                value={formik.values.email}
                fontSize={"2xl"}
                size={"78px"}
                p={"5"}
                borderRadius= "24px"
                _placeholder={{ opacity: 1, color: `${colors.White}.600` }}
                onBlur={formik.handleBlur}
                focusBorderColor={`${colors.White}.400`}
              />
              <FormErrorMessage> {formik.errors.email} </FormErrorMessage>
            </FormControl>

            <FormControl px={"6"} id="password" isInvalid={formik.errors.password && formik.touched.password ? true : false}>
              <Input 
                autoComplete="new-password"
                type="password"
                name="password"
                id="password"
                color={colors.White}
                placeholder="Enter Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                fontSize={"2xl"}
                size={"78px"}
                p={"5"}
                borderRadius= "24px"
                _placeholder={{ opacity: 1, color: `${colors.White}.600` }}
                focusBorderColor={`${colors.White}.400`}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage> {formik.errors.password} </FormErrorMessage>
            </FormControl>

            <Stack spacing={6} px={"10"}>
              <Stack
                color={colors.White}
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}>
                <Checkbox>Remember me</Checkbox>
              </Stack>

              <Button 
                type="button"
                mx={"10"}
                height={"78px"}
                borderRadius={"24px"}
                variant={"solid"}
                disabled={formik.isSubmitting}
                color={colors.White}
                bgGradient={`linear(to-r, #D27F65, #F8A388)`}
                _hover={{
                  bgGradient: `linear(to-r, #D27F65, #F8A388)`
                }}
                onClick={() => formik.handleSubmit()}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>


        <Flex p={8} flex={1} align="center" justify="center" position={"relative"}>
          <Flex direction="column" zIndex={"-1"} width={"full"} position={"relative"} height={"100%"} maxH={"728px"}>
            <Flex direction="column" align={"center"} mt={"8%"} justify="center" width={"full"}>
              <Image
                alt={"Logo Image"}
                borderRadius="full"
                boxSize="227px"
                objectFit={"contain"}
                src={IMAGE_PREFIX.Logo}
              />
              <Heading fontSize={"2xl"} textAlign="left">Government of Kerala</Heading>
            </Flex>

            <Flex 
              width={"60vw"}
              minW={"1077px"}
              position={"absolute"} 
              right={"0%"}
              bottom={"15%"}
            >
              <Image
                alt={"Logo Image"}
                borderRadius="full"
                // boxSize="227px"
                // style={{ position: "absolute", right: 0 }}
                objectFit={"contain"}
                src={IMAGE_PREFIX.BoatIcon}
              />
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    // </AuthContainer>
  );
}

export default LoginScreen;