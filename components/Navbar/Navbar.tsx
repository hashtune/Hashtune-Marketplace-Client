import Link from 'next/link'
import styles from '.../css/Navbar.module.scss'
import Image from 'next/image'
export const Navbar = () => {
  return (
    <>
    <div className = {styles.mainSidebar}>
    <div className= {styles.sidebar}>
    <nav className= {styles.navbar}>
      <ul>
        <li><Image src="/images/logo.png" alt="me" width="18.75" height="17.5" /><Link href= '/'><a>Hashtune</a></Link></li>
        <li><Link href= '/explore' ><a>Home</a></Link></li>
        <li><Link href= '/home'><a>Connect Wallet</a></Link></li>
        <li><Link href= '/blog' ><a>Blog</a></Link></li>
        <li><Link href= '/about' ><a>About</a></Link></li>
        <li><Link href= '/connect-wallet'><a>Connect Wallet</a></Link></li>
      </ul>
    </nav>
    </div>
    </div>
    </>
  )
}