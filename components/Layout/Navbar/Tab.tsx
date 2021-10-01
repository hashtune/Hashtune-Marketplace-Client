import Link from "next/link";
import React from "react";

interface TabProps {
    href: string,
    title: string,
    icon: string
}
const Tab = (props: TabProps) => (
    <Link href={props.href || "/"}>
        <a>
            <svg fill="#fff">
                <use xlinkHref={`dist/icons/sprite.svg#hashtune-${props.icon}`}></use>
            </svg>
            {props.title}
        </a>
    </Link>
)
export default Tab;
