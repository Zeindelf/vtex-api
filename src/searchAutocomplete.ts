import request from './request';
import trim from './utils/trim';

interface ISearchAutocomplete extends IResponse {
  json: {
    itemsReturned: ISearchAutocompleteResponse[] | []
  }
}

const searchAutocomplete = ({
  searchTerm, maxRows = 10,
}: ISearchAutocompleteArgs): Promise<ISearchAutocomplete> => ( // eslint-disable-line max-len
  request(`
    /buscaautocomplete?maxRows=${maxRows}&productNameContains=${encodeURIComponent(trim(searchTerm))}
  `)
);

export default searchAutocomplete;
