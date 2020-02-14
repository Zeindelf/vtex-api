import setInstallment from '../../src/helpers/setInstallment';

describe('setInstallment()', () => {
  it('should get default installments', () => {
    expect.assertions(1);

    const price = { price: 22500 };
    const installment = {
      installments: 4,
      installmentValue: 5625,
    };

    expect(setInstallment(price)).toStrictEqual(installment);
  });

  it('should get maximun installments', () => {
    expect.assertions(1);

    const price = { price: 112500 };
    const installment = {
      installments: 10,
      installmentValue: 11250,
    };

    expect(setInstallment(price)).toStrictEqual(installment);
  });

  it('should get minimun installments', () => {
    expect.assertions(1);

    const price = { price: 4950 };
    const installment = {
      installments: 1,
      installmentValue: 4950,
    };

    expect(setInstallment(price)).toStrictEqual(installment);
  });

  it('should get installments with 10% interest', () => {
    expect.assertions(1);

    const price = { price: 100000, interest: 1 };
    const installment = {
      installments: 10,
      installmentValue: 11046,
    };

    expect(setInstallment(price)).toStrictEqual(installment);
  });
});
