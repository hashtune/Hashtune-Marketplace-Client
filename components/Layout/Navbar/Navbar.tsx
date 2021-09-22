import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import MenuItem from '../MenuItem/MenuItem'
export const Navbar = () => {
  return (
    <>
    <div className = {styles.mainSidebar}>
    <div className= {styles.sidebar}>
    <nav className= {styles.navbar}>
      <ul>
        <li className= "logo"><MenuItem name= "Hashtune" href = '/' iconsrc= "/images/logo.png"/></li>
        <li><MenuItem name= "Home" href= '/home' iconsrc= '/images/ion_home-outline.png'/></li>
        <li><MenuItem name= "Explore" href= '/explore' iconsrc= '/images/ion_compass-outline.png'/></li>
        <li><MenuItem name= "Blog" href= '/blog' iconsrc= '/images/ion_document-text-outline.png'/></li>
        <li><MenuItem name= "About" href= '/about' iconsrc= '/images/ion_glasses.png'/></li>
        <li><MenuItem name= "Connect Wallet" href= '/connect-wallet' iconsrc=''/></li>
      </ul>
    </nav>
    </div>
    </div>
    </>
  )
}