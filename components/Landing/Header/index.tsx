import classes from './style.module.scss'
import Image from 'next/image'
import Logo from "../../../public/logo.svg"

const Header = () => {
   return (
   // <div className={classes.header}>
   //    <div className="container">
   //       <nav className="header__navbar">
         <div className="header__navbar-logo">
            <Image src={Logo} alt="Hashtune Logo" draggable="false" className={classes["header__navbar-logo--img"]} />
         </div>
         /* </nav>
      </div>
   </div> */
 )
}

export default Header
