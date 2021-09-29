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
    <div className = {styles.mainSidebar}>
    <nav className= {styles.navbar}>
      <Link href= '/'>
        <Image src= "/images/logo@2x.png" width = {185.2} height= {43.6}/>
      </Link>
      <Tab href="/?songsTab=true" title="Tab One" isSelected={isSongsTabSelected} /> 
      <Tab href="/?artistsTab=true" title="Tab Two" isSelected={isArtistsTabSelected} /> 
      <Search/>
      <Link href= '/connect-wallet'><a> Connect Wallet </a></Link>
      {/* <Image src= "/"/> INSERT BURGERMENU ICON HERE*/ }
    </nav>
    </div>
  )
}