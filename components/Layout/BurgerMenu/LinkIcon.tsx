
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from "./Menu.module.scss"

interface IconLinkProps {
  icon: string;
  href:string;
}
export const LinkIcon = (props: IconLinkProps) => {
  const hrefStart = 'dist/icons/sprite.svg#hashtune-';
  return( 
    <Link href = {props.href} >
      <div className = {styles["nav__socials--linkIcon"]}>
        <svg width= {32.5} height= {32.5}>
          <use xlinkHref={hrefStart + props.icon}></use>
        </svg>
      </div>
    </Link>
  )
}
