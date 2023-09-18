import styles from 'App.module.css';
import clsx from 'clsx';
import { ReactElement } from 'react';

export function App(): ReactElement {
  return (
    <>
      <header className={styles['logo-wrapper']}>
        <img className={styles.logo} src="/airplane-logo.png" alt="logo" />
      </header>
      <main className={styles['content-wrapper']}>
        <div className={styles['filter-wrapper']}>
          <h2 className={styles['filter-headers']}>ВАЛЮТА</h2>
          <div className={styles['currency-switcher']}>
            <button
              className={clsx([styles.currency, styles['currency-rur']])}
              type="button"
            >
              RUR
            </button>
            <button
              className={clsx([styles.currency, styles['currency-usd']])}
              type="button"
            >
              USD
            </button>
            <button
              className={clsx([styles.currency, styles['currency-eur']])}
              type="button"
            >
              EUR
            </button>
          </div>
          <h2 className={styles['filter-headers']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
          <div className={styles['transfer-wrapper']}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles['checkbox-wrapper']}>
              Все
              <input
                className={styles.checkbox}
                type="checkbox"
                value="all"
                defaultChecked
              />
              <span className={styles.checkmark} />
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles['checkbox-wrapper']}>
              Без пересадок
              <input
                className={styles.checkbox}
                type="checkbox"
                value="direct"
              />
              <span className={styles.checkmark} />
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles['checkbox-wrapper']}>
              1 пересадка
              <input className={styles.checkbox} type="checkbox" value="one" />
              <span className={styles.checkmark} />
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles['checkbox-wrapper']}>
              2 пересадки
              <input className={styles.checkbox} type="checkbox" value="two" />
              <span className={styles.checkmark} />
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles['checkbox-wrapper']}>
              3 пересадки
              <input
                className={styles.checkbox}
                type="checkbox"
                value="three"
              />
              <span className={styles.checkmark} />
            </label>
          </div>
        </div>
        <div className={styles['list-container']}>
          <div className={styles['ticket-wrapper']}>
            <p>Билет</p>
          </div>
        </div>
      </main>
    </>
  );
}
