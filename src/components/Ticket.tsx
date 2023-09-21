import { FC } from 'react';
import { TTicket } from 'types';
import { Button } from './Button';
import { FlightDetails } from './FlightDetails';
import styles from './Ticket.module.css';

type Props = {
  ticket: TTicket;
};

export const Ticket: FC<Props> = ({ ticket }) => {
  let srcLogo;
  let altLogo;

  switch (ticket.carrier) {
    case 'TK':
      srcLogo = 'turkish_airlines.svg';
      altLogo = 'Turkish Airlines logo';
      break;

    case 'S7':
      srcLogo = 's7_logo.svg';
      altLogo = 'S7 logo';
      break;

    case 'BA':
      srcLogo = 'british-airways.svg';
      altLogo = 'British Airways logo';
      break;

    case 'SU':
      srcLogo = 'aeroflot.svg';
      altLogo = 'Aeroflot logo';
      break;

    default:
      srcLogo = 'plane_icon.svg';
      altLogo = 'Unknown carrier';
  }

  return (
    <div className={styles['ticket-wrapper']}>
      <div className={styles.carrier}>
        <img className={styles['carrier-logo']} src={srcLogo} alt={altLogo} />
        <Button>
          Купить
          <br />
          за {ticket.price.toLocaleString('ru-RU')}&#8381;
        </Button>
      </div>
      <FlightDetails ticket={ticket} />
    </div>
  );
};
