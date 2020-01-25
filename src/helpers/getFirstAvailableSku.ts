/**
 * Get first available SKU from Vtex API `/api/catalog_system/` end point
 *
 * @param  {array}  product Product full data
 *
 * @return {object|boolean} An available SKU data or false
 */
const getFirstAvailableSku = (items: IProductItem[]): IProductItem | boolean => {
  if (!items) return false;

  return items.find(({ sellers = [] }) => sellers.find(
    ({ commertialOffer = {} }: IObj) => commertialOffer.AvailableQuantity > 0,
  )) || false;
};

export default getFirstAvailableSku;
