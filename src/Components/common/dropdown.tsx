import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";

type MyOptionType = {
  label: string;
  value: string;
};

type IsMulti = false;

export const customStyles: StylesConfig<MyOptionType, IsMulti> = {
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
    borderColor: "#E79378",
    boxShadow: "none",
    focusBorderColor: "#E79378",
    minWidth: "max-content",
    width: "12rem",
    "&:hover": {
      borderColor: " #E79378 !important"
    },
    "&:focus": {
      transition: "0.4 ease",
      borderColor: "#E79378 !important",
      boxShadow: "0px 0px 0.3rem #E79378 !important"
    }
  }),
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

const formattedArray = (array: Array<MyOptionType>) => {
  return array.map((item: MyOptionType) => {
    return {
      label: `${item.label}`,
      value: `${item.value}`
    };
  });
};

interface DropdownProp {
  placeholder: string;
  dropdownOption: any;
  optionDropVal: any;
  setOptionDropVal: any;
}

export default function Dropdown(props: DropdownProp) {
  const { placeholder, dropdownOption, optionDropVal, setOptionDropVal } =
    props;
  // debugger;
  console.log(
    "optionDropVal============> ",
    dropdownOption.find((i: string) => i === optionDropVal)
  );
  return (
    <Box>
      <Select
        components={{ IndicatorSeparator: () => null }}
        className="Select"
        isSearchable={true}
        placeholder={placeholder}
        styles={customStyles}
        onChange={(e: any) => {
          setOptionDropVal(e?.value);
        }}
        options={formattedArray(dropdownOption) || []}
        // value={optionDropVal ? {label: optionDropVal, value: optionDropVal} : "" }
        value={
          optionDropVal
            ? dropdownOption.find(
              (i: string) => i.toString() === optionDropVal.toString()
            )
            : ""
        }
      />
    </Box>
  );
}
