const hostname = (accountName?: string) => (
  accountName ? `https://${accountName}.vtexcommercestable.com.br` : ''
);

export default hostname;
