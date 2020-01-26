import resizeImage from '../../src/helpers/resizeImage';

describe('resizeImage()', () => {
  const imageWithSize = 'http://storename.vteximg.com.br/arquivos/ids/155242-292-292/image.png';
  const imageWithoutSize = 'http://storename.vteximg.com.br/arquivos/ids/155242/image.png';

  it('should resize image without size defined', () => {
    expect.assertions(1);
    expect(resizeImage(imageWithoutSize, 100, 100)).toStrictEqual('http://storename.vteximg.com.br/arquivos/ids/155242-100-100/image.png');
  });

  it('should resize image even has size defined', () => {
    expect.assertions(1);
    expect(resizeImage(imageWithSize, 500)).toStrictEqual('http://storename.vteximg.com.br/arquivos/ids/155242-500-auto/image.png');
  });
});
