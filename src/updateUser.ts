import head from './utils/head';
import resultOk from './internal/resultOk';

import partialUpdate from './services/partialUpdate';
import getUser from './getUser';
import insertDocument from './insertDocument';

/**
 * Update a user if the email exists, or insert a new one if it doesn't
 *
 * @param {string} email The email of the user
 * @param {object} data  The data that will be updated
 *
 * @module masterdata
 *
 * @example
 *  const response = await updateUser({
 *    email: 'john@doe.com',
 *    data: {
 *      firstName: 'John',
 *      lastName: 'Doe',
 *      ...
 *    },
 *  });
 *
 * @return {promise}
 */
const updateUser = async ({
  email, data, auth, accountName, an,
}: IUpdateUserArgs): Promise<IResponse> => {
  const { json } = await getUser({ email, fields: ['id'] });

  return resultOk(json)
    ? partialUpdate({
      id: head(json).id, data, entity: 'CL', auth, accountName, an,
    })
    : insertDocument({
      data: { email, ...data }, entity: 'CL', auth, accountName, an,
    });
};

export default updateUser;
