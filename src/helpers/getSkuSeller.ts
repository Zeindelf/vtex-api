const getSkuSeller = (
  sku: IObj, sellerId?: number | string,
) => {
  const { sellers } = sku;
  const seller = sellerId || true;
  const sellerKey = sellerId ? 'sellerId' : 'sellerDefault';

  return sellers.find((item: ISeller) => item[sellerKey] === seller) as ISeller;
};

export default getSkuSeller;
