const getSkuSeller = (
  sku: IProductItem, sellerId?: number | string,
) => {
  const { sellers } = sku;
  const seller = sellerId || true;
  const sellerKey = sellerId ? 'sellerId' : 'sellerDefault';

  return sellers.find((item: IObj) => item[sellerKey] === seller) as ISeller;
};

export default getSkuSeller;
