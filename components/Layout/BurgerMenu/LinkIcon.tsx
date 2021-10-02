
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import { useState } from 'react'
interface IconLinkProps {
  icon: string;
  href:string;
}
export const LinkIcon = (props: IconLinkProps) => {
  const hrefStart = 'dist/icons/sprite.svg#hashtune-';
  const stylesStart = 'link__icon'
  return( 
    <Link href = {props.href} >
      <svg className={styles['link__icon']}>
        <use xlinkHref={hrefStart + props.icon}></use>
      </svg>
    </Link>
  )
}
