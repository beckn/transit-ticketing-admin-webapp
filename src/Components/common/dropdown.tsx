import {
    Box,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Select, { StylesConfig } from "react-select";

type MyOptionType = {
    label: string;
    value: string;
};


type IsMulti = false;


const customStyles: StylesConfig<MyOptionType, IsMulti> = {
    control: (base) => ({
        ...base,
        "margin-top": "7px",
        "font-size": "13px",
        "font-family": "'Open Sans', sans-serif",
        "padding-bottom": "4px",
        "padding-top": "4px",
        "padding-left": "10px",
        "max-height": "42px",
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

const formattedArray = (array: Array<MyOptionType>) => {
    return array.map((item: MyOptionType) => {
        return {
            label: `${item.label}`,
            value: `${item.value}`,
        };
    });
};

interface DropdownProp {
    placeholder: string;
    dropdownOption: any
    optionDropVal: any
    setOptionDropVal: any
}


export default function Dropdown(props: DropdownProp) {
    const {
        placeholder,
        dropdownOption,
        optionDropVal,
        setOptionDropVal
    } = props;

    return (
        <Box>
            <Select
                components={{ IndicatorSeparator: () => null }}
                className="Select"
                isSearchable={true}
                placeholder={placeholder}
                styles={customStyles}
                onChange={e => { setOptionDropVal(e?.value) }}
                options={
                    dropdownOption.length === 0
                        ? formattedArray([])
                        : formattedArray(dropdownOption)
                }
                // value={optionDropVal}
            />
        </Box>
    );
}
