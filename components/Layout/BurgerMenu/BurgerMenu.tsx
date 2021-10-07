import styles from "./BurgerMenu.module.scss";
import React, {
  ReactComponentElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { LinkIcon } from "./LinkIcon";
import { MenuItem } from "./MenuItem";

export const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  let els: any;

  useEffect(() => {
    els = {
      // navIcon: document.getElementById('js-nav-button'),
      nav: document.getElementById("js-nav"),
      overlay: document.getElementById("js-overlay"),
    };
  }, [isActive]);

  const overlay = useRef<HTMLDivElement>(null);

  const burger = useRef<HTMLButtonElement>(null);
  const burgerCross = () => {
    if (burger && burger.current) {
      burger.current.classList.toggle(styles["burger--active"]);
    }
  };

  const toggleMenu = () => {
    burgerCross();
    document.body.classList.toggle(styles["overflow"]);
    els.overlay?.classList.toggle(styles["site-overlay--visible"]);
    els.nav?.classList.toggle(styles["nav--visible"]);
  };

  const handleClick = () => {
    if (isActive) {
      window.removeEventListener("click", handleOutsideClick);
    }
    setIsActive(!isActive);
    toggleMenu();
  };

  const burgerMenu: React.RefObject<HTMLDivElement> = useRef(null);
  const handleOutsideClick = (event: any) => {
    if (
      burgerMenu.current &&
      !burgerMenu.current.contains(event.target) &&
      burger.current &&
      !burger.current.contains(event.target)
    ) {
      handleClick();
    }
  };

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (isActive == false) return;

    window.addEventListener("click", handleOutsideClick);
  }, [isActive]);

  return (
    <div className={styles["main"]}>
      <button
        ref={burger}
        onClick={handleClick}
        className={styles["burger"]}
        id="js-nav-button"
      >
        <div className={styles["burger__line--up"]}></div>
        <div className={styles["burger__line--down"]}></div>
      </button>
      <nav ref={burgerMenu} className={styles["nav"]} id="js-nav">
        <div className={styles["nav__header"]}>
          <ul className={styles["menu"]}>
            <MenuItem text={"FAQ"} />
            <MenuItem text={"About"} />
            <MenuItem text={"Help"} />
            <MenuItem text={"Contact"} />
            <MenuItem text={"Terms of Service"} />
            <MenuItem text={"Privacy Policy"} />
            <MenuItem text={"Community Guidelines"} />
          </ul>
          <button className={styles["nav__beArtist"]}>
            <h2>Become an Artist</h2>
          </button>
        </div>
        <div className={styles["nav__footer"]}>
          <div className={styles["nav__socials"]}>
            <LinkIcon icon={"instagram"} href={""} />
            <LinkIcon icon={"twitter"} href={""} />
            <LinkIcon icon={"youtube"} href={""} />
          </div>
          <p className={styles["nav__copyright"]}>
            Hashtune 2021 &copy;. All Rights Reserved.
          </p>
        </div>
      </nav>
      <div
        ref={overlay}
        className={styles["site-overlay"]}
        aria-hidden="true"
        id="js-overlay"
      ></div>
    </div>
  );
};
