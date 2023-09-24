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

  const onChangeStops = (stops: StopsValue[]): void => {
    setFilter({ ...filter, stops });
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
