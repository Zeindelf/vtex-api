import updateUser from './updateUser';

/**
 * Newsletter opt-in / opt-out
 *
 * @param {string} email            The email of the user to opt-in/out
 * @param {boolean} [optIn=true]    Whether to opt-in/out
 * @param {object} [data=undefined] Custom data to send
 *
 * @module masterdata
 *
 * @example
 *  const response = await newsletterOptIn({
 *    email: 'john@doe.com',
 *    data: {
 *      firstName: 'John Doe',
 *      ...
 *    },
 *  });
 *
 * @return {promise}
 */
const newsletterOptIn = ({
  email, optIn = true, data, auth, accountName, an,
}: INewsletterOptInArgs): Promise<IResponse> => (
  updateUser({
    email,
    data: {
      isNewsletterOptIn: optIn,
      ...data,
    },
    auth,
    accountName,
    an,
  })
);

export default newsletterOptIn;
