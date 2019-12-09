import assign from './internal/assign';

import updateUser from './updateUser';

/**
 * Newsletter opt-in / opt-out
 *
 * @param {string} email                     The email of the user to opt-in/out
 * @param {boolean} [isNewsletterOptIn=true] Whether to opt-in/out
 * @param {object} [data={}]                 Custom data to send
 *
 * @return {promise}
 */
const newsletterOptIn = (email: string, isNewsletterOptIn = true, data = {}): Promise<any> => {
  const obj = assign({ isNewsletterOptIn }, data);
  return updateUser(email, obj);
};

export default newsletterOptIn;
