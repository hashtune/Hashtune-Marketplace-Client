import Link from "next/link";
import React from "react";

interface TabProps {
    href: string,
    isSelected: boolean,
    title: string,
}
const Tab = (props: TabProps) => (
    <Link href={props.href}>
      <a
        // style={{ REMINDER TO CHANGE COLORS ON TAB SWITCH 
        //   padding: 5,
        //   margin: 5,
        //   backgroundColor: props.isSelected ? "grey" : "black",
        // }}
      >
        {props.title}
      </a>
    </Link>
)
export default Tab;