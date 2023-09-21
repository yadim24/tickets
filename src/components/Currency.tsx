/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx';
import { FC } from 'react';
import styles from './Currency.module.css';

export type CurrencyValue = 'RUR' | 'USD' | 'EUR';

const currencyValue: CurrencyValue[] = ['RUR', 'USD', 'EUR'];

type Props = {
  onChange: (currencyName: CurrencyValue) => void;
};

export const Currency: FC<Props> = ({ onChange }) => {
  return (
    <div className={styles['currency-switcher']}>
      {currencyValue.map((currencyName) => (
        <label
          key={currencyName}
          className={clsx([
            styles.currency,
            styles[`currency-${currencyName.toLowerCase()}`],
          ])}
        >
          {currencyName}
          <input
            className={styles.radio}
            type="radio"
            name="currency"
            value={currencyName}
            onChange={() => onChange(currencyName)}
          />
        </label>
      ))}
    </div>
  );
};
