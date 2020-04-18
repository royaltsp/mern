import React from "react";
import "./FlexItem.css";
function FlexItem(props) {
  return <div className="flex-item">{props.children}</div>;
}

export default FlexItem;
