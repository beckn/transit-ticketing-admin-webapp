import React from "react";
import {
  Box,
  SimpleGrid,
  Button,
  Flex,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import { withFormik } from "formik";
import Select, { components, StylesConfig } from "react-select";
import * as Yup from "yup";
import { MySelect } from "../../../Components/CustomSelect";
type MyOptionTypeForBoatNo = {
  label: string;
  value: string;
};

type IsMulti = false;

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }: any) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};
const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    boatNumber: Yup.object().required("Boat no. is required!"),
    boatMasterName: Yup.object().required("Boat Master Name is required!"),
    stationName: Yup.object().required("Station Name is required!"),
    scheduleNumber: Yup.object().required("Schedule is required!"),
  }),
  mapPropsToValues: (props) => ({
    boatNumber: "",
    boatMasterName: "",
    scheduleNumber: "",
    stationName: "",
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log("values", values);

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "MyForm",
});

const options = [
  { value: "chocolate", label: "KERALA" },
  { value: "strawberry", label: "EDATHUA" },
  { value: "vanilla", label: "CHENNAI" },
];

function AssignBoat(props: any) {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;
  const handleSubmit1 = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <Box mr="10">
      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={2} spacing={10} mb="5">
          <Box marginLeft="76" height="80px">
            <MySelect
              id="boatNumber"
              options={options}
              placeholder="Select Boat No. :"
              value={values.boatNumber}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              error={errors.boatNumber}
              touched={touched.boatNumber}
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={10} mb="5" mt="2">
          <Box marginLeft="76" height="80px">
            <MySelect
              id="stationName"
              options={options}
              placeholder="Station Name :"
              value={values.stationName}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              error={errors.stationName}
              touched={touched.stationName}
            />
          </Box>
          <Box ml="76" height="80px">
            <MySelect
              id="boatMasterName"
              options={options}
              placeholder="Boat Master Name :"
              value={values.boatMasterName}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              error={errors.boatMasterName}
              touched={touched.boatMasterName}
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={10} mb="5">
          <Box ml="76" height="80px">
            <MySelect
              id="scheduleNumber"
              options={options}
              placeholder="Schedule No. :"
              value={values.scheduleNumber}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              error={errors.scheduleNumber}
              touched={touched.scheduleNumber}
            />
          </Box>
        </SimpleGrid>
        <Flex justifyContent={"flex-end"}>
          <Button
            bgColor="#3E4059"
            color={"#fff"}
            _hover={{ bgColor: "#646782" }}
            onSubmit={handleSubmit}
            padding={"20px"}
            type="submit"
            disabled={isSubmitting}
          >
            Save
          </Button>
          <Button
            bgColor="#3E4059"
            color={"#fff"}
            marginLeft="10"
            _hover={{ bgColor: "#646782" }}
            padding={"20px"}
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

export const AssignBoatsForm = formikEnhancer(AssignBoat);
