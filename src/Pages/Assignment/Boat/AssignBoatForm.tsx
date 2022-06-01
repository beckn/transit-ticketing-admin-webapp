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
import { useQueryClient } from "react-query";
import { useApi } from "../../../hooks/useApi";
import { apiUrl } from "../../../Config/apiUrl";
import ServerError from "../../ErrorPages/ServerError";
import Loading from "../../../Components/Loader/Loading";
import Navigation from "../../../Components/Navigation/navigation";

const getOptions = (data: Array<Object>, type: string) => {
  let transformedData;
  if (type === "schedules") {
    transformedData = data.map((schedule: any) => {
      return { label: schedule.schedule_id, value: schedule.schedule_id };
    });
  }
  if (type === "station") {
    transformedData = data.map((station: any) => {
      return { label: station.stop_name, value: station.stop_id };
    });
  }
  if (type === "boat") {
    transformedData = data.map((boat: any) => {
      return { label: boat.boatNo, value: boat.boatNo };
    });
  }

  if (type === "boatMaster") {
    transformedData = data
      .filter((master: any) => master.role === "Boatmaster")
      .map((master: any) => {
        return { label: master.staff_name, value: master.staff_id };
      });
  }

  console.log("data", transformedData);
  return transformedData || [];
};
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
  const queryClient = useQueryClient();
  const { status, data, error, isLoading } = useApi(apiUrl.BOATS_ASSIGNMENTS);
  console.log("assignment data", data);
  if (status === "error") {
    return (
      <Box>
        <Navigation>
          <ServerError />
        </Navigation>
      </Box>
    );
  }
  return (
    <Box mr="10">
      {isLoading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={2} spacing={10} mb="5">
            <Box marginLeft="76" height="80px">
              <MySelect
                id="boatNumber"
                options={getOptions(data.boats, "boat")}
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
                options={getOptions(data.stations, "station")}
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
                options={getOptions(data.boatMasters, "boatMaster")}
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
                options={getOptions(data.schedules, "schedules")}
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
      )}
    </Box>
  );
}

export const AssignBoatsForm = formikEnhancer(AssignBoat);
