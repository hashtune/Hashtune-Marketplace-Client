import styles from "./BurgerMenu.module.scss";
interface MenuItemProps {
  text: string;
  href?: string;
  onClick?: () => void;
}
export const MenuItem = (props: MenuItemProps) => {
  return (
    <div
      className={styles["menu__item--wrapper"]}
      onClick={() => (props.onClick ? props.onClick() : null)}
    >
      <li className={styles["menu__item"]}>
        <a href={props.href}>{props.text}</a>
      </li>
    </div>
  );
};
