/**
 * @module general
 */
const createAuthentication = (auth?: IAuthentication): string[] => {
  if (!auth) return [];

  const { appKey, appToken } = auth;

  return [
    `x-vtex-api-appKey: ${appKey}`,
    `x-vtex-api-appToken: ${appToken}`,
  ];
};

export default createAuthentication;
