export function formatNumber(num: number) {
  const intl = Intl.NumberFormat("en-US");
  return intl.format(num);
}
