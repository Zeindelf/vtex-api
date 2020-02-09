import request from './request';
import trim from './utils/trim';

const searchAutocomplete = ({
  searchTerm, maxRows = 10,
}: ISearchAutocompleteParams): Promise<{
  status: number, json: ISearchAutocompleteResponse, headers: Headers
}> => (
  request(`
    /buscaautocomplete?maxRows=${maxRows}&productNameContains=${encodeURIComponent(trim(searchTerm))}
  `)
);

export default searchAutocomplete;
