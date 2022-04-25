import React from "react";
import Select, { StylesConfig } from "react-select";

type MyOptionTypeForBoatNo = {
  label: string;
  value: string;
};

type IsMulti = false;

const customStyles: StylesConfig<MyOptionTypeForBoatNo, IsMulti> = {
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
    focusBorderColor: "#E79378",
    minWidth: "max-content",
    width: "12rem",
    "&:hover": {
      borderColor: " #E79378 !important",
    },
    "&:focus": {
      transition: "0.4 ease",
      borderColor: "#E79378 !important",
      boxShadow: "0px 0px 0.3rem #02b3e4 !important",
    },
  }),
  // placeholder: () => ({
  //     color: '#7d97ad',
  // }),
  valueContainer: (provided) => ({
    ...provided,
    width: "90%",
    paddingTop: "0",
    paddingBottom: "0",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: "10%",
    minHeight: "1px",
  }),
  singleValue: () => ({
    color: "#525c65",
  }),
};
interface CustomSelectProps {
  options: any;
}

const cellOptions: any = [
  { label: "watermelon", value: 1 },
  { label: "kiwi", value: 2 },
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

export const CustomSelect = (props: any) => {
  return (
    <SelectCell
      index={props.row.index}
      id={props.column.id}
      value={props.value}
      updateMyData={props.updateMyData}
    />
  );
};
