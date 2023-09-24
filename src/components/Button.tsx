import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ children }) => {
  return (
    <button className={styles.price} type="button">
      {children}
    </button>
  );
};
