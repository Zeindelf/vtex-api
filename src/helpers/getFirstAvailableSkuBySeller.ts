import isSkuAvailable from './isSkuAvailable';
/**
 * @description
 * Get first available SKU from Vtex API `/api/catalog_system/` end point
 *
 * @param  {array}  product Product full data
 *
 * @return {object|boolean} An available SKU data or false
 */

const getFirstAvailableSkuBySeller = (
  items: IObj[],
  sellerId: number | string,
) => {
  const skuFinded = items.find((sku) => !!isSkuAvailable(sku, sellerId));

  return skuFinded || false;
};

export default getFirstAvailableSkuBySeller;
