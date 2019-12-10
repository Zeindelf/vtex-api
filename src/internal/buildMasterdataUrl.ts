import stringify from './stringify';

interface IMasterdataParams {
  method: string;
  entity: string;
  type: string;
  id?: string;
  data?: {};
}

const buildMasterdataUrl = ({
  entity,
  type,
  id,
  method,
  data,
}: IMasterdataParams): string => {
  const mountedUrl = `/api/dataentities/${entity || 'CL'}/${type || 'search'}/${id || ''}`;
  const url = method === 'GET' ? `${mountedUrl}?${data && stringify(data)}` : mountedUrl;

  return url;
};

export default buildMasterdataUrl;
