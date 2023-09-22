import { FC } from 'react';
import { CurrencyValue, TTicket } from 'types';
import { Button } from './Button';
import { FlightDetails } from './FlightDetails';
import styles from './Ticket.module.css';

type Props = {
  ticket: TTicket;
  currency: CurrencyValue;
};

const currencies = {
  usd: 96.0419,
  eur: 102.2485,
};

export const Ticket: FC<Props> = ({ currency, ticket }) => {
  let srcLogo;
  let altLogo;
  let convertedPrice;
  let currencyIcon;

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

  switch (currency) {
    case 'USD':
      convertedPrice = Math.round(ticket.price / currencies.usd).toLocaleString(
        'ru-RU',
      );
      currencyIcon = '$';
      break;

    case 'EUR':
      convertedPrice = Math.round(ticket.price / currencies.eur).toLocaleString(
        'ru-RU',
      );
      currencyIcon = '€';
      break;

    default:
      convertedPrice = ticket.price.toLocaleString('ru-RU');
      currencyIcon = '₽';
  }

  return (
    <div className={styles['ticket-wrapper']}>
      <div className={styles.carrier}>
        <img className={styles['carrier-logo']} src={srcLogo} alt={altLogo} />
        <Button>
          Купить
          <br />
          за {convertedPrice}
          {currencyIcon}
        </Button>
      </div>
      <FlightDetails ticket={ticket} />
    </div>
  );
};
