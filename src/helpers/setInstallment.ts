/* eslint-disable no-restricted-properties */
interface ISetInstallment {
  price: number
  minPrice?: number
  maxInstallments?: number
  interest?: number
}

/**
 * @description
 * Take the value of the installment with min price and max installments given
 *
 * @param {number} price                Price to get installments
 * @param {number} [minPrice=5000]      Min price for each installment (VTEX default)
 * @param {number} [maxInstallments=10] Max installments (VTEX Default)
 * @param {number} [interest=0]         Interest rate
 *
 * @returns {object}
 * @example
 *  setInstallment(349900, 43000, 10)
 *  //=> {installments: 8, installmentValue: 43737, interest: 0}
 */
const setInstallment = ({
  price, minPrice = 5000, maxInstallments = 10, interest = 0,
}: ISetInstallment) => {
  let installments = Math.floor(price / minPrice) || 1;

  if (installments > maxInstallments) {
    installments = maxInstallments;
  }

  let installmentValue = price / installments;

  if (interest > 0) {
    installmentValue = (price * Math.pow((1 + (interest / 100)), installments)) / installments;
  }

  installmentValue = Math.floor(installmentValue);

  return {
    installments,
    installmentValue,
  };
};

export default setInstallment;
