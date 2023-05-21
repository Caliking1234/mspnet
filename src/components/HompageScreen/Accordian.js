import React from "react";
// import { Link } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Collapse } from "@mui/material";

const Accordian = (index, title, module) => {
  const [open, setOpen] = React.useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };
  return (
    <div className=" pt-10px">
      <div
        className="bg-black  py-[25px] px-[25px] flex justify-between items-center cursor-pointer"
        onClick={toggle(index)}
      >
        <h3 className=" text-[22px] font-semibold">{title}</h3>
        {open ? (
          <ArrowDropUpIcon fontSize="small" />
        ) : (
          <ArrowDropDownIcon fontSize="small" />
        )}
      </div>
      <Collapse isOpened={open}>
        {module?.map((item, i) => {
          return (
            <div key={i} className=" py-2 px-5 mx-auto">
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </Collapse>
    </div>
  );
};

export default Accordian;
