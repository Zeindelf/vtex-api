import request from './request';

enum SearchCrossSellingTypes {
  whoboughtalsobought = 'whoboughtalsobought',
  similars = 'similars',
  whosawalsosaw = 'whosawalsosaw',
  whosawalsobought = 'whosawalsobought',
  accessories = 'accessories',
  suggestions = 'suggestions',
}

interface ISearchCrossSellingArgs {
  id: string,
  type: SearchCrossSellingTypes,
}

const searchCrossSelling = ({
  id, type,
}: ISearchCrossSellingArgs): Promise<IResponse> => (
  request(`/api/catalog_system/pub/products/crossselling/${type}/${id}`)
);

export default searchCrossSelling;
