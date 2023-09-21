/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { Currency, CurrencyValue } from './Currency';
import styles from './Filter.module.css';
import { Stops } from './Stops';

type Props = {
  onChange: (
    currencyName: CurrencyValue | null,
    stop: StopsValue | null,
  ) => void;
};

export const Filter: FC<Props> = ({ onChange }) => {
  return (
    <div className={styles['filter-wrapper']}>
      <h2 className={styles['filter-headers']}>ВАЛЮТА</h2>
      <Currency onChange={onChange} />
      <h2 className={styles['filter-headers']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <Stops onChange={onChange} />
    </div>
  );
};
