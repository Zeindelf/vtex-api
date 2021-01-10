import createAuthentication from '../internal/createAuthentication';
import createHeaders from '../internal/createHeaders';
import hostname from '../internal/hostname';
import request from '../request';
import encode from '../utils/encode';

/**
 * @module masterdata
 */
const attachmentRequest = ({
  id, entity, formData, field, auth, accountName, an,
}: IAttachmentArgs): Promise<IResponse> => {
  const url = `${hostname(accountName)}/api/dataentities/${entity}/documents/${id}/${field}/attachments`;
  const mountedAn = an ? `?${encode({ an })}` : '';
  const authentication = createAuthentication(auth);
  const defaults = ['Accept: application/vnd.vtex.ds.v10+json'];
  const headers = new Headers(createHeaders(
    defaults.concat(authentication || []).filter(Boolean),
  ));

  const config = {
    headers,
    body: formData,
    method: 'POST',
  };

  return request(`${url}${mountedAn}`, config);
};

export default attachmentRequest;
