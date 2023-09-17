import styles from 'App.module.css';
import { ReactElement } from 'react';

export function App(): ReactElement {
  return (
    <>
      <header className={styles['logo-wrapper']}>
        <img className={styles.logo} src="/airplane-logo.png" alt="logo" />
      </header>
      <main className={styles['content-wrapper']}>
        <div className={styles['filter-wrapper']}>
          <div className={styles['currency-wrapper']}>
            <h2 className={styles['filter-headers']}>ВАЛЮТА</h2>
          </div>
        </div>
      </main>
    </>
  );
}
