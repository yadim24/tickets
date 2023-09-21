export const formatDate = (date: string): string => {
  if (!date) {
    throw new Error('Неверный формат данных');
  }

  const parts = date.split('.');
  const day = Number(parts[0]);
  const month = Number(parts[1]);
  const year = Number(`20${parts[2]}`);

  const monthNames = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];

  const dateObj = new Date(year, month - 1, day);

  const dayOfWeek = dateObj.getDay();
  const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const dayName = dayNames[dayOfWeek];

  const formattedDate = `${day} ${monthNames[month - 1]} ${year}, ${dayName}`;

  return formattedDate;
};
