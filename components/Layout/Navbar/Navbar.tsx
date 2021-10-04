import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import Tab from './Tab'
import Search from './Search'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'

export const Navbar = () => {

  return (
    <nav className= {styles["navbar"]} data-cy="navbar">
      <div className={styles["navbar__logo"]} data-cy="navbar-logo">
        <Link href= '/'><a><Image src= '/images/logo.svg' width = {133} height= {32}/></a></Link>
      </div>
      <div className={styles["navbar__menu"]} data-cy="navbar-menu">
        <div className={styles["navbar__menu-item"]} data-cy="navbar-menu-item">
          <Tab href="/" title="Songs" icon="record" /> 
        </div>
        <div className={styles["navbar__menu-item"]} data-cy="navbar-menu-item">
          <Tab href="/artists" title="Artists" icon="music-note" /> 
        </div>
      </div>
      <Search/>
      <Link href= '/connect-wallet'><a className={styles["navbar__wallet"]} data-cy="navbar-wallet"> Connect Wallet </a></Link>
      <BurgerMenu/>
      {/* <div className={styles["navbar__sidebar-icon"]} data-cy="navbar-sidebar-icon">
            <svg fill="#fff" height="10" width="30">
                <use xlinkHref="dist/icons/sprite.svg#hashtune-menu"></use>
            </svg>
        </div> */}
    </nav>
  )
}