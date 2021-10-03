
import Link from 'next/link'
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
      <svg width= {32.5} height= {32.5}>
        <use xlinkHref={hrefStart + props.icon}></use>
      </svg>
    </Link>
  )
}
