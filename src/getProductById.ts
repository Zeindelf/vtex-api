import searchProduct from './searchProduct';
import head from './utils/head';

interface IGetProductById extends IGetProductsByArgs {
  id: string | number
}

/**
 * @module product
 */
const getProductById = async ({
  id, ...rest
}: IGetProductById): Promise<IGetProductResponse> => {
  const { json, ...restRes } = await searchProduct({
    fq: `productId:${id}`,
    ...rest,
  });

  return { json: head(json), ...restRes };
};

export default getProductById;
