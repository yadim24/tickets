import { FC } from 'react';
import { CurrencyValue, TTicket } from 'types';
import { Ticket } from './Ticket';
import styles from './TicketList.module.css';

export type Props = {
  currency: CurrencyValue;
  tickets: TTicket[];
};

export const TicketList: FC<Props> = ({ currency, tickets }) => {
  return (
    <div className={styles['list-container']}>
      {tickets.length ? (
        tickets.map((ticket) => (
          <Ticket key={ticket.id} currency={currency} ticket={ticket} />
        ))
      ) : (
        <div className={styles.skeleton}>Билеты не найдены</div>
      )}
    </div>
  );
};
