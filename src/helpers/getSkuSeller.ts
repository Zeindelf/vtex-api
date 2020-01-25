import { objectSearch } from '../utils';

const getSkuSeller = (sku: IObj, sellerId: number | boolean = false): ISeller | IObj | boolean => {
  const seller = sellerId || true;
  const sellerKey = sellerId ? 'sellerId' : 'sellerDefault';

  return objectSearch(sku, { [sellerKey]: seller });
};

export default getSkuSeller;
