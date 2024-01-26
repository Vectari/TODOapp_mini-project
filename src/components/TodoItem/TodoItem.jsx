import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";

export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {done ? null : <Button onClick={onDoneButtonClick}>&#10004;</Button>}
      <Button onClick={onDeleteButtonClick}>&#10006;</Button>
    </li>
  );
}
