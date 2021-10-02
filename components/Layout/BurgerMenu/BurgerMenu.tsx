
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import React, { useState } from 'react'
import {slide as Menu} from 'react-burger-menu'
import {LinkIcon} from './LinkIcon'

export const BurgerMenu = () => {
    const [menuState, setMenuState] = useState(false);
    const handleStateChange = () => setMenuState(true);
    const closeMenu = () => setMenuState(false);

  return( 
      <Menu noOverlay width = {280}
        isOpen = {menuState} onStateChange= {handleStateChange}>
          <Link href = "/faq"><a onClick= {() => closeMenu()}>FAQ</a></Link>
          <Link href = "/about"><a onClick= {() => closeMenu()}>About</a></Link>
          <Link href = "/help"><a onClick= {() => closeMenu()}>Help</a></Link>
          <Link href = "/tos"><a onClick= {() => closeMenu()}>Terms of Service</a></Link>
          <Link href = "/privacy"><a onClick= {() => closeMenu()}>Privacy Policy</a></Link>
          <Link href = "/communityGuidelines"><a onClick= {() => closeMenu()}>Community Guidelines</a></Link>
          <LinkIcon icon={'instagram'} href={''}/>
          <LinkIcon icon={'twitter'} href={''}/>
          <LinkIcon icon={'youtube'} href={''}/>
      </Menu>
  )
}
