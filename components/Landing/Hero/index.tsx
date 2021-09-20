import classes from './style.module.scss'
import Image from 'next/image'
import Banner from '../../../public/banner.jpg'
import Header from '../Header'
import Newsletter from '../Newsletter'


const Hero = () => {
   return (
      <div className={classes.hero}>
         <div className={classes.hero__banner}>
            <Image src={Banner} className={classes["hero__banner-image"]} alt="Hashtune" layout="fill" draggable="false"/>
            <Header/>
         </div>
         
         <div className={classes.hero__content}>
            <h3 className="heading-secondary mb-small">Hashtune is being Cooked 🎸</h3>
            <p className="lead text-secondary mb-large">Want to be one of the first people who try The first NFT platform exclusively for musicians?! 😃</p>
            <span className="eyebrow text-muted mt-big mb-small">Join our mailing list for upcoming updates</span>
            <Newsletter/>
         </div>
      </div>
   )

}

export default Hero