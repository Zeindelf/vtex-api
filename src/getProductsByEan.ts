import searchProduct from './searchProduct';

interface IGetProductsByEan extends IGetProductsByArgs {
  ids: any[]
}

/**
 * @module product
 */
const getProductsByEan = async ({
  ids, ...rest
}: IGetProductsByEan): Promise<IGetProductsResponse> => (
  searchProduct({
    fq: ids.map((id) => `alternateIds_Ean:${id}`),
    ...rest,
  })
);

export default getProductsByEan;
