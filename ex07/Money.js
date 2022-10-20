function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

export default Money;

Money.prototype.getValue = function getValue() {
  return this.value;
}

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
}

Money.prototype.exchangeTo = function exchangeTo(currency) {
  if (this.currency === currency) {
    return new Money(this.value, this.currency);
  }
  if (currency === 'usd') {
    return new Money(1.2 * this.value, currency)
  }
  if (currency === 'eur') {
    return new Money(0.7 * this.value, currency)
  }
}

Money.prototype.add = function add(money) {
  const value = this.getCurrency() === money.getCurrency() ? this.getValue() + money.getValue() : this.getValue() + money.exchangeTo(this.getCurrency()).getValue();
  return new Money(value, this.getCurrency());
}

Money.prototype.format = function format(currency) {
  return this.value.toLocaleString(undefined, { style: 'currency', currency: this.currency })
}