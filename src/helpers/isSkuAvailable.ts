import getSkuSeller from './getSkuSeller';

const isSkuAvailable = (sku: IObj): Boolean => {
  const seller = getSkuSeller(sku);

  return seller
    && seller.commertialOffer
    && seller.commertialOffer.AvailableQuantity > 0;
};

export default isSkuAvailable;
