import searchProduct from './searchProduct';

interface IGetProductsByRefId extends IGetProductsByArgs {
  ids: any[]
}

/**
 * @module product
 */
const getProductsByRefId = async ({
  ids, ...rest
}: IGetProductsByRefId): Promise<IGetProductsResponse> => (
  searchProduct({
    fq: ids.map((id) => `alternateIds_RefId:${id}`),
    ...rest,
  })
);

export default getProductsByRefId;
