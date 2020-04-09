import searchProduct from './searchProduct';

interface IGetProductByRefId extends IGetProductArgs {
  id: any[]
}

/**
 * @module product
 */
const getProductByRefId = async ({
  id, headers, accountName, auth,
}: IGetProductByRefId): Promise<IGetProductsResponse> => (
  searchProduct({
    fq: `alternateIds_RefId:${id}`,
    headers,
    accountName,
    auth,
  })
);

export default getProductByRefId;
