import encode from '../utils/encode';
import hostname from './hostname';

/**
 * @module masterdata
 */
const createMasterdataUrl = ({
  entity, type, id, method, data, accountName, an,
}: IMasterdataArgs): string => {
  const mountedUrl = `${hostname(accountName)}/api/dataentities/${entity}/${type}/${id || ''}`;
  const mountedData = data ? `?${encode(data)}` : '';
  const mountedAn = an ? `?${encode({ an })}` : '';
  const url = method === 'GET' ? `${mountedUrl}${mountedData}` : `${mountedUrl}${mountedAn}`;

  return url;
};

export default createMasterdataUrl;
