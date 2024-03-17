import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  invert?: boolean;
}

const Button = ({ children, invert }: Props) => {
  return <button className={invert ? styles.invert : ""}>{children}</button>;
};

export default Button;
