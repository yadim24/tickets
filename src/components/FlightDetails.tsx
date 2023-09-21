import { FC } from 'react';
import { TTicket } from 'types';
import { formatDate } from 'utils/formatDate';
import { formatStops } from 'utils/formatStops';
import styles from './FlightDetails.module.css';
import { FlyingPlane } from './FlyingPlane';

type Props = {
  ticket: TTicket;
};

export const FlightDetails: FC<Props> = ({ ticket }) => {
  return (
    <div className={styles['flight-detail-wrapper']}>
      <div className={styles['time-wrapper']}>
        <div className={styles.time}>{ticket.departure_time}</div>
        <div className={styles.transfer}>
          <div>{formatStops(ticket.stops)}</div>
          <FlyingPlane />
        </div>
        <div className={styles.time}>{ticket.arrival_time}</div>
      </div>
      <div className={styles['airport-wrapper']}>
        <div className={styles.airport}>
          {ticket.origin}, {ticket.origin_name}
        </div>
        <div className={styles.airport}>
          {ticket.destination_name}, {ticket.destination}
        </div>
      </div>
      <div className={styles['date-wrapper']}>
        <div className={styles.date}>{formatDate(ticket.departure_date)}</div>
        <div className={styles.date}>{formatDate(ticket.arrival_date)}</div>
      </div>
    </div>
  );
};
