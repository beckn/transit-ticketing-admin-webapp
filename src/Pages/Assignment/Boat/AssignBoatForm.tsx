import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { withFormik } from "formik";
import React from "react";
import { useQueryClient } from "react-query";
import { components } from "react-select";
import * as Yup from "yup";
import { MySelect } from "../../../Components/CustomSelect";
import Loading from "../../../Components/Loader/Loading";
import Navigation from "../../../Components/Navigation/navigation";
import { apiUrl } from "../../../Config/apiUrl";
import { useApi } from "../../../hooks/useApi";
import ServerError from "../../ErrorPages/ServerError";

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

  return (
    transformedData || [
      { label: 12, value: 12 },
      { label: 14, value: 14 },
      { label: 15, value: 15 },
    ]
  );
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
    onOpen,
    onClose,
    isOpen,
  } = props;
  const queryClient = useQueryClient();

  const { status, data, error, isLoading } = useApi(apiUrl.BOATS_ASSIGNMENTS);
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
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={10} mb="5" mt="2">
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
            <Box ml="76" height="80px">
              <MySelect
                id="scheduleNumber"
                //options={getOptions(data.schedules, "schedules")}
                options={[
                  { label: 12, value: 12 },
                  { label: 14, value: 14 },
                  { label: 15, value: 15 },
                ]}
                placeholder="Schedule No. :"
                value={values.scheduleNumber}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.scheduleNumber}
                touched={touched.scheduleNumber}
              />
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={2} spacing={10} mb="5"></SimpleGrid>
          <Flex justifyContent={"center"} mt="40">
            <Button
              bgColor="#3E4059"
              color={"#fff"}
              width="150px"
              _hover={{ bgColor: "#646782" }}
              padding={"20px"}
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </Button>
            <Button
              bgColor="#3E4059"
              color={"#fff"}
              width="150px"
              marginLeft="30"
              _hover={{ bgColor: "#646782" }}
              onSubmit={handleSubmit}
              padding={"20px"}
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </Button>
          </Flex>
        </form>
      )}
    </Box>
  );
}
export const AssignBoatsForm = (props: any) => {
  const { isOpen, onOpen, onClose } = props.dataModal;

  const MyFormWithFormik = withFormik({
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
      onOpen();
      setTimeout(() => {
        //alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
    displayName: "MyForm",
  })(AssignBoat);

  return <MyFormWithFormik />;
};
//export const AssignBoatsForm = formikEnhancer(AssignBoat);
