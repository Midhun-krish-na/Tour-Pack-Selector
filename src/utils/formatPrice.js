import siteConfig from "../config/siteConfig";

const currencyFormatter = new Intl.NumberFormat(
  siteConfig.currency.locale,
  {
    style: "currency",
    currency: siteConfig.currency.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }
);

export function formatPrice(amount) {
  const value = Number(amount);

  if (!Number.isFinite(value)) return "—";

  return currencyFormatter.format(value);
}
