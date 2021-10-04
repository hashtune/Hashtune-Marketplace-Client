

import styles from './Menu.module.scss'
interface MenuItemProps {
    text: string,
    href?: string,
}
export const MenuItem = (props: MenuItemProps) => {
  return( 
    <div className = {styles["menu__item--wrapper"]}>
    <li className={styles["menu__item menu__item--main"]}><a className={styles["menu__link menu__link--main"]} href={props.href}>{props.text}</a></li>
    </div>
  )
}
