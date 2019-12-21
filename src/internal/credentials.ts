const credentials = (appKey: string, appToken: string): string[] => [
  `x-vtex-api-appKey: ${appKey}`,
  `x-vtex-api-appToken: ${appToken}`,
];

export default credentials;
