import hostname from './hostname';
import trimSlahes from '../utils/trimSlashes';
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

  return `${hostname(accountName)}/api/catalog_system/pub/${trimSlahes(path)}${cleanQuery}`;
};

export default createCatalogUrl;
