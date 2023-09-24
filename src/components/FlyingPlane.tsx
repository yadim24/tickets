import { FC } from 'react';
import styles from './FlyingPlane.module.css';

export const FlyingPlane: FC = () => {
  return (
    <div className={styles['plane-wrapper']}>
      <div className={styles.line} />
      <img className={styles.icon} src="plane_icon.svg" alt="Airplane icon" />
    </div>
  );
};
