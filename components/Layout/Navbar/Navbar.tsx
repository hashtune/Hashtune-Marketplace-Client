import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import MenuItem from '../MenuItem/MenuItem'
import { useRouter } from 'next/dist/client/router'
import Tab from './Tab'
export const Navbar = () => {

  const { query } = useRouter();
  const isSongsTabSelected = !!query.songsTab;
  const isArtistsTabSelected = !!query.artistsTab;

  return (
    <div className = {styles.mainSidebar}>
    <nav className= {styles.navbar}>
      <Link href= '/'>
        <Image src= "/images/logo.png"/>
        <a>Hashtune</a>
      </Link>
      <Tab href="/?songsTab=true" title="Tab One" isSelected={isSongsTabSelected} /> 
      <Tab href="/?artistsTab=true" title="Tab Two" isSelected={isArtistsTabSelected} /> 
      {/* SEARCH COMPONENT */}
      <Link href= '/connect-wallet'><a>Connect Wallet</a></Link>
      <Image src= "/"/> 
      {/* ^^ THIS IS GOING TO BE SIDEBAR COMPONENT */}
    </nav>
    </div>
  )
}