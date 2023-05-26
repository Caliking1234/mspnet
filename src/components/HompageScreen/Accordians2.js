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
        style={{ color: "white" }}
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
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Accordions2() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [List1, setList1] = useState([
    {
      title: "Managed IT Services",
      module: [
        {
          name: "Integrated Service Center (NOC)",
          link: "/integrated-service-center",
        },
        {
          name: "Network Lifecycle Management",
          link: "/network-lifecycle-managment",
        },
        {
          name: "Proactive Monitoring & Alert Managment",
          link: "/proactive-monitoring-alert-managment",
        },
        {
          name: "Network Managment",
          link: "/network-managment",
        },
      ],
    },
    {
      title: "IT Project Services",
      module: [
        {
          name: "Network Infrastructure",
          link: "/network-infrastructure-design",
        },
        {
          name: "Network Optimization",
          link: "/network-optimization",
        },
        {
          name: "WAN Optimization",
          link: "/wan-optimization",
        },
        {
          name: "System Migration",
          link: "/system-migration",
        },
        {
          name: "Network Refresh",
          link: "/network-refresh",
        },
        {
          name: "Tech Refresh",
          link: "/tech-refresh",
        },
        {
          name: "HardWare Maintenance",
          link: "/hardware-maintenance",
        },
        {
          name: "Network Migration",
          link: "/network-migration",
        },
        {
          name: "Hardware Refresh",
          link: "/hardware-refresh",
        },
        {
          name: "SD WAN Solution",
          link: "/sd-wan-sol",
        },
        {
          name: "Cloud Migration",
          link: "/cloud-migration",
        },
      ],
    },

    {
      title: "Managed Security Services",
      module: [
        {
          name: "NetWork Security Managment",
          link: "/network-security-managment",
        },
        {
          name: "Penetration Testing",
          link: "/penetration-testing",
        },
        {
          name: "Vulnerability Managment",
          link: "/vulnerability-managment",
        },
        {
          name: "Malware Protection Services",
          link: "/malware-protection-services",
        },
      ],
    },
  ]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      className="bg-[rgba(16,44,81,255)]"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "rgba(16,44,81,255)",
      }}
    >
      {List1.map((item, index) => (
        <Accordion
          className=" text-xs w-full"
          style={{ backgroundColor: "rgba(16,44,81,255)", color: "white" }}
          expanded={expanded === "panel" + (index + 1)}
          onChange={handleChange("panel" + (index + 1))}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className=" w-full ">
              <h1 className=" w-full text-xs text-center">{item.title}</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "white", color: "rgba(16,44,81,255)" }}
          >
            {item.module?.map((info, i) => {
              return (
                <li className=" w-full px-2 py-3 border-b-[1px] border-solid border-black">
                  <Link to={info.link}>{info.name}</Link>
                </li>
              );
            })}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
