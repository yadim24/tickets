/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import styles from './Stops.module.css';

export type StopsValue = 'all' | 0 | 1 | 2 | 3;

type StopsQty = {
  value: StopsValue;
  name: 'Все' | 'Без пересадок' | '1 пересадка' | '2 пересадки' | '3 пересадки';
};

const stopsQty: StopsQty[] = [
  {
    value: 'all',
    name: 'Все',
  },
  {
    value: 0,
    name: 'Без пересадок',
  },
  {
    value: 1,
    name: '1 пересадка',
  },
  {
    value: 2,
    name: '2 пересадки',
  },
  {
    value: 3,
    name: '3 пересадки',
  },
];

type Props = {
  onChange: (stop: StopsValue) => void;
};

export const Stops: FC<Props> = ({ onChange }) => {
  return (
    <div className={styles['transfer-wrapper']}>
      {stopsQty.map((stop) => (
        <label key={stop.value} className={styles['checkbox-wrapper']}>
          {stop.name}
          <input
            className={styles.checkbox}
            type="checkbox"
            value={stop.value}
            defaultChecked={stop.value === 'all'}
            onChange={() => onChange(stop.value)}
          />
          <span className={styles.checkmark} />
        </label>
      ))}
    </div>
  );
};
