/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from 'App.module.css';
import clsx from 'clsx';
import { FlyingPlane } from 'components/FlyingPlane';
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
            <label className={clsx([styles.currency, styles['currency-rur']])}>
              RUR
              <input
                className={styles.radio}
                type="radio"
                name="currency"
                value="rur"
                defaultChecked
              />
            </label>
            <label className={clsx([styles.currency, styles['currency-usd']])}>
              USD
              <input
                className={styles.radio}
                type="radio"
                name="currency"
                value="usd"
              />
            </label>
            <label className={clsx([styles.currency, styles['currency-eur']])}>
              EUR
              <input
                className={styles.radio}
                type="radio"
                name="currency"
                value="eur"
              />
            </label>
          </div>
          <h2 className={styles['filter-headers']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
          <div className={styles['transfer-wrapper']}>
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
            <label className={styles['checkbox-wrapper']}>
              Без пересадок
              <input
                className={styles.checkbox}
                type="checkbox"
                value="direct"
              />
              <span className={styles.checkmark} />
            </label>
            <label className={styles['checkbox-wrapper']}>
              1 пересадка
              <input className={styles.checkbox} type="checkbox" value="one" />
              <span className={styles.checkmark} />
            </label>
            <label className={styles['checkbox-wrapper']}>
              2 пересадки
              <input className={styles.checkbox} type="checkbox" value="two" />
              <span className={styles.checkmark} />
            </label>
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
            <div className={styles.carrier}>
              <img
                className={styles['carrier-logo']}
                src="turkish_airlines.svg"
                alt="Turkish Airlines logo"
              />
              <button className={styles.price} type="button">
                Купить
                <br />
                за 21 867 р
              </button>
            </div>
            <div className={styles['flight-detail-wrapper']}>
              <div className={styles['time-wrapper']}>
                <div className={styles.time}>10:00</div>
                <div className={styles.transfer}>
                  <div>1 пересадка</div>
                  <FlyingPlane />
                </div>
                <div className={styles.time}>20:00</div>
              </div>
              <div className={styles['airport-wrapper']}>
                <div className={styles.airport}>VVO, Владивосток</div>
                <div className={styles.airport}>Тель-Авив, TLV</div>
              </div>
              <div className={styles['date-wrapper']}>
                <div className={styles.date}>9 Окт 2018, Пт</div>
                <div className={styles.date}>9 Окт 2018, Пт</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
