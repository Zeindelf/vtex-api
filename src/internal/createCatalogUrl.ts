import hostname from './hostname';
import trimSlashes from '../utils/trimSlashes';
import clearQuery from '../utils/clearQuery';

/**
 * @module catalog-system
 */
const createCatalogUrl = ({
  path, query, accountName,
}: ICatalogUrlArgs): string => {
  const cleanQuery = query
    ? `?${clearQuery(query)}`
    : '';

  return `${hostname(accountName)}/api/catalog_system/pub/${trimSlashes(path)}${cleanQuery}`;
};

export default createCatalogUrl;
