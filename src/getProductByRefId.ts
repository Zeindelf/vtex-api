import searchProduct from './searchProduct';

interface IGetProductByRefId extends IGetProductsByArgs {
  id: any
}

/**
 * @module product
 */
const getProductByRefId = async ({
  id, ...rest
}: IGetProductByRefId): Promise<IGetProductsResponse> => (
  searchProduct({
    fq: `alternateIds_RefId:${id}`,
    ...rest,
  })
);

export default getProductByRefId;
