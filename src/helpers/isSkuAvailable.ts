import getSkuSeller from './getSkuSeller';

const isSkuAvailable = (sku: IObj, sellerId?: number | string): Boolean => {
  const seller = getSkuSeller(sku, sellerId);

  return seller
    && seller.commertialOffer
    && seller.commertialOffer.AvailableQuantity > 0;
};

export default isSkuAvailable;
