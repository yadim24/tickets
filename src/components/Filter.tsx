/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { CurrencyValue, FilterState, StopsValue } from 'types';
import { Currency } from './Currency';
import styles from './Filter.module.css';
import { Stops } from './Stops';

type Props = {
  onChangeCurrency: (currencyName: CurrencyValue) => void;
  onChangeStops: (stop: StopsValue) => void;
  filter: FilterState;
};

export const Filter: FC<Props> = ({
  onChangeCurrency,
  onChangeStops,
  filter,
}) => {
  return (
    <div className={styles['filter-wrapper']}>
      <h2 className={styles['filter-headers']}>ВАЛЮТА</h2>
      <Currency filter={filter} onChange={onChangeCurrency} />
      <h2 className={styles['filter-headers']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <Stops filter={filter} onChange={onChangeStops} />
    </div>
  );
};
