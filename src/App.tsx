/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from 'App.module.css';
import { CurrencyValue } from 'components/Currency';
import { Filter } from 'components/Filter';
import { StopsValue } from 'components/Stops';
import { TicketList } from 'components/TicketList';
import { ReactElement, useState } from 'react';
import data from './data/tickets.json';

export type FilterState = {
  currency: CurrencyValue;
  stops: StopsValue;
};

export function App(): ReactElement {
  const [filter, setFilter] = useState<FilterState>({
    currency: 'RUR',
    stops: 'all',
  });

  const filterChange = (
    curr: CurrencyValue | null,
    stop: StopsValue | null,
  ): void => {
    if (curr) {
      const newFilter = { ...filter, currency: curr };
      setFilter(newFilter);
    }

    if (stop) {
      const newFilter = { ...filter, stops: stop };
      setFilter(newFilter);
    }
  };

  return (
    <>
      <header className={styles['logo-wrapper']}>
        <img className={styles.logo} src="/airplane-logo.png" alt="logo" />
      </header>
      <main className={styles['content-wrapper']}>
        <Filter onChange={filterChange} />
        <TicketList
          tickets={data.tickets.filter((ticket) => {
            if (filter.stops !== 'all') {
              return ticket.stops === filter.stops;
            }

            return ticket;
          })}
        />
      </main>
    </>
  );
}
