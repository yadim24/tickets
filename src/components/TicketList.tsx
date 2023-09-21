import { FC } from 'react';
import { TTicket } from 'types';
import { Ticket } from './Ticket';
import styles from './TicketList.module.css';

export type Props = {
  tickets: TTicket[];
};

export const TicketList: FC<Props> = ({ tickets }) => {
  return (
    <div className={styles['list-container']}>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};
