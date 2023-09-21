import data from './data/tickets.json';

export type TTicket = (typeof data.tickets)[number];
