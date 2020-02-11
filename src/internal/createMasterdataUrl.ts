import encode from '../utils/encode';
import hostname from './hostname';

/**
 * @module masterdata
 */
const createMasterdataUrl = ({
  entity, type, id, method, data, accountName,
}: IMasterdataArgs): string => {
  const mountedUrl = `${hostname(accountName)}/api/dataentities/${entity}/${type}/${id || ''}`;
  const mountedData = data ? `?${encode(data)}` : '';
  const hasAn = data && Object.prototype.hasOwnProperty.call(data, 'an');
  const url = (method === 'GET' || hasAn) ? `${mountedUrl}${mountedData}` : mountedUrl;

  return url;
};

export default createMasterdataUrl;
