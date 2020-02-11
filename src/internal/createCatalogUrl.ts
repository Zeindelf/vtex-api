import hostname from './hostname';
import trim from '../utils/trim';
import trimSlahes from '../utils/trimSlashes';

/**
 * @module catalog-system
 */
const createCatalogUrl = ({
  path, query, accountName,
}: ICatalogUrlParams): string => {
  const url = `
    ${hostname(accountName)}/api/catalog_system/pub/${trimSlahes(path)}${query && `?${trim(query)}`}
  `;

  return trim(url);
};

export default createCatalogUrl;
