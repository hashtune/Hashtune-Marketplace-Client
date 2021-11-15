import React, { useEffect, useState } from "react";

interface TabProps {
  onClick: () => void;
  text: string;
  key: string;
}
const Tab = (props: TabProps) => {
  return (
    <a
      className="tab-nav__indicators--element"
      key={props.text}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.text}
    </a>
  );
};
export default Tab;
