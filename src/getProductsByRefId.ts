import searchProduct from './searchProduct';

interface IGetProductsByRefId extends IGetProductArgs {
  ids: any[]
}

/**
 * @module product
 */
const getProductsByRefId = async ({
  ids, headers, accountName, auth,
}: IGetProductsByRefId): Promise<IGetProductsResponse> => (
  searchProduct({
    fq: ids.map((id) => `alternateIds_RefId:${id}`),
    headers,
    accountName,
    auth,
  })
);

export default getProductsByRefId;
