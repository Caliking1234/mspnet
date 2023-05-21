import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "1rem" }}
        style={{ color: "aquamarine" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "2px solid rgba(0, 0, 0, .125)",
}));

export default function Accordionss({ list1 }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {list1?.map((item, index) => {
        <Accordion
          key={index}
          style={{
            background: "#282c34",
            color: "aquamarine",
            width: 700,
            marginBottom: 10,
          }}
          expanded={expanded === "panel" + (index + 1)}
          onChange={handleChange("panel" + (index + 1))}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: 25,
                  padding: 5,
                }}
              >
                {item.title}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails
            style={{ background: "aquamarine", color: "#282c34" }}
          >
            {item.module?.map((mod, i) => {
              return (
                <div key={i} className=" py-2 px-5 mx-auto">
                  <Link to={mod.link}>{mod.name}</Link>
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>;
      })}
    </div>
  );
}
