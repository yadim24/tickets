export const formatStops = (stops: number): string => {
  switch (stops) {
    case 1:
      return `${stops} пересадка`;
      break;
    case 2:
    case 3:
      return `${stops} пересадки`;
      break;
    default:
      return 'Прямой рейс';
  }
};
