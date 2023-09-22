/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from 'App.module.css';
import { Filter } from 'components/Filter';
import { TicketList } from 'components/TicketList';
import { ReactElement, useState } from 'react';
import { CurrencyValue, FilterState, StopsValue } from 'types';
import data from './data/tickets.json';

const initStops: StopsValue[] = ['all', 0, 1, 2, 3];

export function App(): ReactElement {
  const [filter, setFilter] = useState<FilterState>({
    currency: 'RUR',
    stops: initStops,
  });

  const onChangeCurrency = (curr: CurrencyValue): void => {
    const newFilter = { ...filter, currency: curr };
    setFilter(newFilter);
  };

  const onChangeStops = (stop: StopsValue): void => {
    let newStops: StopsValue[] | [];

    if (filter.stops.includes(stop) && stop === 'all') {
      newStops = [];
    }

    if (filter.stops.includes(stop)) {
      if (stop === 'all') {
        newStops = [];
      } else {
        newStops = filter.stops.filter((item) => item !== stop);
      }
    } else if (
      stop === 'all' ||
      (filter.stops.length === 3 && !filter.stops.includes('all'))
    ) {
      newStops = initStops;
    } else {
      newStops = [...filter.stops, stop];
    }

    const filterStops = { ...filter, stops: newStops };
    setFilter(filterStops);
  };

  return (
    <>
      <header className={styles['logo-wrapper']}>
        <img className={styles.logo} src="/airplane-logo.png" alt="logo" />
      </header>
      <main className={styles['content-wrapper']}>
        <Filter
          onChangeCurrency={onChangeCurrency}
          onChangeStops={onChangeStops}
          filter={filter}
        />
        <TicketList
          currency={filter.currency}
          tickets={data.tickets.filter((ticket) =>
            filter.stops.includes(ticket.stops),
          )}
        />
      </main>
    </>
  );
}
