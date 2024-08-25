import React from "react";
import Tooltip from "@mui/material/Tooltip";
import data from "./data"
const Items = (props) => {
  return (
    <>
      <Tooltip title={props.title} placement="left" arrow>
        <h1>
          <i class={props.classUrl} style={{ color: props.color }}></i>
        </h1>
      </Tooltip>
    </>
  );
};
export default Items;
