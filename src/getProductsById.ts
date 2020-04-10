import searchProduct from './searchProduct';

interface IGetProductsById extends IGetProductsByArgs {
  ids: any[]
}

/**
 * @module product
 */
const getProductsById = async ({
  ids, ...rest
}: IGetProductsById): Promise<IGetProductsResponse> => (
  searchProduct({
    fq: ids.map((id) => `productId:${id}`),
    ...rest,
  })
);

export default getProductsById;
