// Склонение: 1 урок, 3 урока, 5 уроков, 11 уроков, 21 урок.
export function lessonsLabel(count) {
  const n = Math.abs(count) % 100;
  const last = n % 10;
  let word = 'уроков';
  if (n < 11 || n > 14) {
    if (last === 1) word = 'урок';
    else if (last >= 2 && last <= 4) word = 'урока';
  }
  return `${count} ${word}`;
}

// Стоимость курса: цена одного урока × количество уроков.
export function totalPrice(pricePerLesson, count) {
  if (pricePerLesson < 0 || count < 0) {
    throw new Error('Цена и количество уроков не могут быть отрицательными');
  }
  return pricePerLesson * count;
}
