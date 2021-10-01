import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
// import MenuItem from '../MenuItem/MenuItem'
import { useRouter } from 'next/dist/client/router'
import Tab from './Tab'
import Search from './Search'
export const Navbar = () => {

  const { query } = useRouter();
  const isSongsTabSelected = !!query.songsTab;
  const isArtistsTabSelected = !!query.artistsTab;

  return (
    <div className = {styles.mainNavbar} data-cy="cont-main-navbar">
    <nav className= {styles.navbar} data-cy="main-navbar">
      <Link href= '/'><a>
        <Image src= "/images/logo@2x.png" width = {185.2} height= {43.6}/>
      </a></Link>
      <Tab href="/?songsTab=true" title="Songs" isSelected={isSongsTabSelected} /> 
      <Tab href="/?artistsTab=true" title="Artists" isSelected={isArtistsTabSelected} /> 
      <Search/>
      <Link href= '/connect-wallet'><a>Connect Wallet</a></Link>
      {/* <Image src= "/"/> INSERT BURGERMENU ICON HERE*/ }
    </nav>
    </div>
  )
}