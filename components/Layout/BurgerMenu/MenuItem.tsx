import styles from "./BurgerMenu.module.scss";
interface MenuItemProps {
  text: string;
  href?: string;
}
export const MenuItem = (props: MenuItemProps) => {
  return (
    <div className={styles["menu__item--wrapper"]}>
      <li className={styles["menu__item"]}>
        <a href={props.href}>{props.text}</a>
      </li>
    </div>
  );
};
