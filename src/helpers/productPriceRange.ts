import getSkuSeller from './getSkuSeller';

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
): ICommertialOffer[] => skus.map((sku: IProductItem) => {
  const { commertialOffer } = getSkuSeller(sku, sellerId);
  return commertialOffer;
});

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

  return {
    sellingPrice: getMinMaxValue(commertialOffers, 'Price'),
    listPrice: getMinMaxValue(commertialOffers, 'ListPrice'),
  };
};

export default productPriceRange;
