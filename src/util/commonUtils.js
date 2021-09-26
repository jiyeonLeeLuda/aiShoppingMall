export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function currencyFomater({ number = 0, currency = '원' }) {
  return `
        ${String(number).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')} ${currency}
        `;
}

export function percentageCalculator({ total = 1, partOf = 1 }) {
  return `${Math.ceil((partOf / total) * 100)}%`;
}

export function getSum(numbers) {
  const sum = numbers.reduce((x, y) => x + y, 0);
  return sum;
}
export function getPrices(mCart) {
  return mCart.map((item) => item.realPrice * item.itemAmount);
}
