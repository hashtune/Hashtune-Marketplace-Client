import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
// import MenuItem from '../MenuItem/MenuItem'
import { useRouter } from 'next/dist/client/router'
import Tab from './Tab'
import Search from './Search'
import classNames from 'classnames'
export const Navbar = () => {

  const { query } = useRouter();
  const isSongsTabSelected = !!query.songsTab;
  const isArtistsTabSelected = !!query.artistsTab;

  return (
    <nav className= {styles["navbar"]}>
      <div className={styles["navbar__logo"]}>
        <Link href= '/'>
          <Image src= "/images/logo.svg" width = {133} height= {32}/>
        </Link>
      </div>
      <div className={styles["navbar__menu"]}>
        <div className={styles["navbar__menu-item"]}>
          <Tab href="/?songsTab=true" title="Songs" isSelected={isSongsTabSelected} icon="record" /> 
        </div>
        <div className={styles["navbar__menu-item"]}>
          <Tab href="/?artistsTab=true" title="Artists" isSelected={isArtistsTabSelected} icon="music-note" /> 
        </div>
      </div>
      <Search/>
      <Link href= '/connect-wallet'><a className="btn"> Connect Wallet </a></Link>
      <div className={styles["navbar__sidebar-icon"]}>
        <svg fill="#fff" height="10" width="30">
          <use xlinkHref="dist/icons/sprite.svg#hashtune-menu"></use>
        </svg>
      </div>
    </nav>
  )
}