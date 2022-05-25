import React from "react";
import Select, { StylesConfig } from "react-select";
import {
  Box,
  SimpleGrid,
  Button,
  Flex,
  FormLabel,
  Stack
} from "@chakra-ui/react";

type MyOptionTypeForBoatNo = {
  label: string;
  value: string;
};

type IsMulti = false;

const customStyles: StylesConfig<MyOptionTypeForBoatNo, IsMulti> = {
  container: (base) => ({
    ...base,
    width: "100%"
  }),
  control: (base) => ({
    ...base,
    margintop: "7px",
    fontSize: "13px",
    fontFamily: "'Open Sans', sans-serif",
    padding: "4px 0px 4px 10px",
    maxHeight: "42px",
    display: "flex",
    background: "#f5f8faad",
    borderRadius: "4px",
    boxShadow: "none",
    borderColor: "#E79378",
    focusBorderColor: "#E79378",
    minWidth: "max-content",
    //width: "12rem",
    "&:hover": {
      borderColor: " #E79378 !important"
    },
    "&:focus": {
      transition: "0.4 ease",
      borderColor: "#E79378 !important",
      boxShadow: "0px 0px 0.3rem #02b3e4 !important"
    }
  }),
  // placeholder: () => ({
  //     color: '#7d97ad',
  // }),
  valueContainer: (provided) => ({
    ...provided,
    width: "90%",
    paddingTop: "0",
    paddingBottom: "0"
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: "10%",
    minHeight: "1px"
  }),
  singleValue: () => ({
    color: "#525c65"
  }),
  option: (base, state) => ({
    ...base,
    margin: "2px",
    backgroundColor: state.isFocused
      ? "#E79378"
      : state.isSelected
        ? "#E79378"
        : "white",
    "&:hover": {
      borderColor: " #E79378 !important"
    },
    "&:focus": {
      transition: "0.4 ease",
      backgroundColor: "#E79378",
      borderColor: "#E79378 !important",
      boxShadow: "0px 0px 0.3rem #E79378 !important"
    },
    "&:active": {
      transition: "0.4 ease",
      borderColor: "#E79378 !important",
      backgroundColor: "#E79378",
      boxShadow: "0px 0px 0.3rem #E79378 !important"
    }
  })
};
interface CustomSelectProps {
  options: any;
}

const cellOptions: any = [
  { label: "watermelon", value: 1 },
  { label: "kiwi", value: 2 }
];
interface SelectCellProps {
  value: any;
  index: any;
  id: any;
  updateMyData: any;
}
const SelectCell = React.memo(
  ({ value, index, id, updateMyData }: SelectCellProps) => {
    const onChange = (e: any) => {
      updateMyData(index, id, e.value);
    };

    return (
      <Select
        options={value}
        components={{ IndicatorSeparator: () => null }}
        isSearchable={false}
        value={value.value}
        onChange={onChange}
        styles={customStyles}
      />
    );
  }
);

const CustomSelect = (props: any) => {
  return (
    <SelectCell
      index={props.row.index}
      id={props.column.id}
      value={props.value}
      updateMyData={props.updateMyData}
    />
  );
};

export default CustomSelect;

export const MySelect: any = (props: any) => {
  const handleChange = (value: any) => {
    // this is going to call setFieldValue and manually update values.topcis
    props.onChange(props.id, value);
  };

  const handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    props.onBlur(props.id, true);
  };
  // console.log("errors", props);
  return (
    <div style={{ margin: "2rem 0" }}>
      <FormLabel mt="3">{props.placeholder}</FormLabel>
      <Select
        // components={{ ValueContainer: CustomValueContainer }}
        id={props.id}
        options={props.options}
        //placeholder={props.placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={props.value}
        styles={customStyles}
      />
      {props.error && props.touched && (
        <FormLabel color="red" mt="3" mb="3">
          {props.error}
        </FormLabel>
      )}
    </div>
  );
};
