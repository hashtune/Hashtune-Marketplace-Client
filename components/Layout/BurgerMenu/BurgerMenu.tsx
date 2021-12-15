import styles from "./BurgerMenu.module.scss";
import React, {
  ReactComponentElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { MenuItem } from "./MenuItem";
import router from "next/router";
import Link from "next/link";

export const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const burger = useRef<HTMLButtonElement>(null);
  const burgerCross = () => {
    if (burger && burger.current) {
      burger.current.classList.toggle(styles["burger--active"]);
    }
  };

  const overlay: React.RefObject<HTMLDivElement> = useRef(null);
  const burgerMenu: React.RefObject<HTMLDivElement> = useRef(null);

  const toggleMenu = () => {
    burgerCross();
    document.body.classList.toggle(styles["overflow"]);
    overlay.current?.classList.toggle("site-overlay--visible");
    burgerMenu.current?.classList.toggle(styles["nav--visible"]);
  };

  const handleClick = () => {
    if (isActive) {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleEscClick);
    }
    setIsActive(!isActive);
    toggleMenu();
  };
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
  const handleEscClick = (event: any) => {
    if (event.key === "Escape") {
      handleClick();
    }
  };

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (isActive == false) return;

    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", handleEscClick);
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
          <Link href="/">
          <a className={styles["nav__beArtist"]}>
            <h2>Become an Artist 🎸</h2>
          </a>
          </Link>
        </div>
        <div className={styles["nav__footer"]}>
          <LinkIcons
            iconRefs={[
              { icon: "twitter", href: '""' },
              { icon: "instagram", href: '""' },
              { icon: "youtube", href: '""' },
            ]}
            directorydifference={0}
            page={PAGES.HOME}
          />
          <p className={styles["nav__copyright"]}>
            Hashtune 2021 &copy;. All Rights Reserved.
          </p>
        </div>
      </nav>
      <div
        ref={overlay}
        className={"site-overlay"}
        aria-hidden="true"
        id="js-overlay"
      ></div>
    </div>
  );
};
