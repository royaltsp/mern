import React from "react";
import { FlexItem } from "./";
import "./FlexContainer.css";
function FlexContainer() {
  const flexItems = new Array();
  for (let i = 0; i < 10; i++) {
    flexItems.push(<FlexItem>{i}</FlexItem>);
  }
  return (
    <div className="flex-container">
      {flexItems}
      {/* <FlexItem>1</FlexItem>
      <FlexItem>2</FlexItem>
      <FlexItem>3</FlexItem>
      <FlexItem>4</FlexItem>
      <FlexItem>5</FlexItem>
      <FlexItem>6</FlexItem>
      <FlexItem>7</FlexItem>
      <FlexItem>8</FlexItem>
      <FlexItem>9</FlexItem> */}
    </div>
  );
}

export default FlexContainer;
