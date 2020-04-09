import searchProduct from './searchProduct';

interface IGetProductsByEan extends IGetProductArgs {
  ids: any[]
}

/**
 * @module product
 */
const getProductsByEan = async ({
  ids, headers, accountName, auth,
}: IGetProductsByEan): Promise<IGetProductsResponse> => (
  searchProduct({
    fq: ids.map((id) => `alternateIds_Ean:${id}`),
    headers,
    accountName,
    auth,
  })
);

export default getProductsByEan;
