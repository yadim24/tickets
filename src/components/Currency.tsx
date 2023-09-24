/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx';
import { FC } from 'react';
import { CurrencyValue, FilterState } from 'types';
import styles from './Currency.module.css';

const currencyValue: CurrencyValue[] = ['RUR', 'USD', 'EUR'];

type Props = {
  onChange: (currencyName: CurrencyValue) => void;
  filter: FilterState;
};

export const Currency: FC<Props> = ({ onChange, filter }) => {
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
            checked={currencyName === filter.currency}
          />
        </label>
      ))}
    </div>
  );
};
