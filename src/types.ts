import data from './data/tickets.json';

export type TTicket = (typeof data.tickets)[number];

export type StopsValue = 'all' | number;

export type CurrencyValue = 'RUR' | 'USD' | 'EUR';

export type FilterState = {
  currency: CurrencyValue;
  stops: StopsValue[];
};
