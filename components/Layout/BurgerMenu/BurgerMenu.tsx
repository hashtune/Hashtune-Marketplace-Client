
import styles from './Menu.module.scss'
import React, { useEffect, useState } from 'react'
import {LinkIcon} from './LinkIcon'
import { MenuItem } from './MenuItem'

export const BurgerMenu = () => {
    const [isActive, setIsActive] = useState(false);
    let els: any;
        
    useEffect (() => {
        els = {
        	navIcon: document.getElementById('js-nav-button'),
        	nav: document.getElementById('js-nav'),
        	overlay: document.getElementById('js-overlay'),
        	burgerLine: document.querySelector('.burger__line')
        };
    });

    const toggleMenu = () => {
            els.burgerLine?.classList.toggle(styles['burger__line--active']);
        	document.body.classList.toggle(styles['overflow']);
        	els.overlay?.classList.toggle(styles['site-overlay--visible']);
        	els.nav?.classList.toggle(styles['nav--visible']);
            console.log("ïts getting here");
        };

    const handleClick = () => {
        setIsActive(!isActive);
        toggleMenu();
    };   

    
    //className={styles["navbar__menu-item"]} 
    return (
        <div >
        <button className={styles["burger"]} aria-label="Toggle navigation" id="js-nav-button" onClick={handleClick} >
            <svg className={styles["burger__line"]} fill="#fff" height="10" width="30">
                <use xlinkHref="dist/icons/sprite.svg#hashtune-menu"></use>
            </svg>
        </button>
        

        <nav className={styles["nav"]} id="js-nav">
        	<ul className={styles["nav__menu nav__menu--main menu menu--main"]}>
                <MenuItem text={'FAQ'}/>
                <MenuItem text={'About'}/>
                <MenuItem text={'Help'}/>
                <MenuItem text={'Contact'}/>
                <MenuItem text={'Terms of Service'}/>
                <MenuItem text={'Privacy Policy'}/>
                <MenuItem text={'Community Guidelines'}/>
        	</ul>
            <button><h2>Become an Artist</h2></button>
            <LinkIcon icon={'instagram'} href={''}/>
            <LinkIcon icon={'twitter'} href={''}/>
            <LinkIcon icon={'youtube'} href={''}/>
            <a>Hashtune 2021 Ⓒ. All Rights Reserved.</a>
        	
        </nav>
    <div className={styles["site-overlay"]} aria-hidden="true" id="js-overlay"></div>
    </div>
    )
    
}
