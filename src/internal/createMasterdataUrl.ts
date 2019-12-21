import stringify from './stringify';
import hostname from './hostname';

const createMasterdataUrl = ({
  entity, type, id, method, data, accountName,
}: IMasterdataParams): string => {
  const mountedUrl = `${hostname(accountName)}/api/dataentities/${entity}/${type}/${id || ''}`;
  const mountedData = data ? `?${stringify(data)}` : '';
  const hasAn = data && Object.prototype.hasOwnProperty.call(data, 'an');
  const url = (method === 'GET' || hasAn) ? `${mountedUrl}${mountedData}` : mountedUrl;

  return url;
};

export default createMasterdataUrl;
