/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { StopsValue } from 'types';
import styles from './Stops.module.css';

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
  onChange: (stops: StopsValue[]) => void;
  filter: StopsValue[];
};

export const Stops: FC<Props> = ({ onChange, filter }) => {
  return (
    <div className={styles['transfer-wrapper']}>
      {stopsQty.map((stop) => (
        <label key={stop.name} className={styles['checkbox-wrapper']}>
          {stop.name}
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={filter.includes(stop.value)}
            onChange={(e) => {
              const isChecked = e.target.checked;

              if (isChecked && stop.value === 'all') {
                onChange(stopsQty.map((item) => item.value));

                return;
              }

              if (!isChecked && stop.value === 'all') {
                onChange([]);

                return;
              }

              if (stop.value !== 'all' && filter.includes(stop.value)) {
                onChange(
                  filter.filter(
                    (item) => item !== stop.value && item !== 'all',
                  ),
                );

                return;
              }

              if (
                stop.value !== 'all' &&
                !filter.includes(stop.value) &&
                filter.length === 3
              ) {
                onChange([...filter, stop.value, 'all']);
              } else {
                onChange([...filter, stop.value]);
              }
            }}
          />
          <span className={styles.checkmark} />
        </label>
      ))}
    </div>
  );
};
