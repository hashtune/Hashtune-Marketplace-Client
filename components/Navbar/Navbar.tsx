import Link from 'next/link'
export const Navbar = () => {
  return (
    <nav className= "NavbarItems">
      <ul>
        <li><Link href= '/'><a>Hashtune</a></Link></li>
        <form><input type="text" id="search" name="search"/></form>
        <li><Link href= '/explore' ><a>Explore</a></Link></li>
        <li><Link href= '/blog' ><a>Blog</a></Link></li>
        <li><Link href= '/about' ><a>About</a></Link></li>
        <li><Link href= '/connect-wallet'><a>Connect Wallet</a></Link></li>
      </ul>
    </nav>
  )
}