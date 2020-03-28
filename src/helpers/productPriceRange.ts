import fixProductSearchPrice from './fixProductSearchPrice';
import getSkuSeller from './getSkuSeller';
import isSkuAvailable from './isSkuAvailable';

const getMinMaxValue = (
  offers: ICommertialOffer[],
  attribute: 'Price' | 'ListPrice',
) => offers.reduce((range, currentOffer) => {
  if (!currentOffer.AvailableQuantity) {
    return range;
  }

  const highPrice = currentOffer[attribute] > range.highPrice
    ? currentOffer[attribute]
    : range.highPrice;
  const lowPrice = currentOffer[attribute] < range.lowPrice
    ? currentOffer[attribute]
    : range.lowPrice;
  return { highPrice, lowPrice };
}, { highPrice: 0, lowPrice: Infinity });

const getCommertialOffers = (
  skus: IProductItem[],
  sellerId?: number | string,
): ICommertialOffer[] | any[] => skus.map((sku: IProductItem) => {
  if (!isSkuAvailable(sku, sellerId)) return false;

  const { commertialOffer } = getSkuSeller(sku, sellerId);
  return commertialOffer;
}).filter(Boolean);

/**
 * @description
 * Get min and max list/selling product price
 *
 * @param {array} skus Product skus
 * @param {number|string} [sellerId=undefined] Seller ID to search
 */
const productPriceRange = (
  skus: IProductItem[],
  sellerId?: number | string,
) => {
  const commertialOffers = getCommertialOffers(skus, sellerId);
  const best = getMinMaxValue(commertialOffers, 'Price');
  const list = getMinMaxValue(commertialOffers, 'ListPrice');

  return {
    bestPrice: {
      highPrice: fixProductSearchPrice(best.highPrice),
      lowPrice: fixProductSearchPrice(best.lowPrice),
    },
    listPrice: {
      highPrice: fixProductSearchPrice(list.highPrice),
      lowPrice: fixProductSearchPrice(list.lowPrice),
    },
  };
};

export default productPriceRange;
