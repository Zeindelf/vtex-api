import getSkuSeller from './getSkuSeller';

const getSkuInstallments = (sku: IObj, sellerId = false) => {
  const { commertialOffer }: ISeller | any = getSkuSeller(sku, sellerId);
  const { Installments } = commertialOffer;

  // Get by min price value
  return Installments.reduce(
    (prev: IObj, current: IObj) => (prev.Value < current.Value ? prev : current),
    {},
  );
};

export default getSkuInstallments;
