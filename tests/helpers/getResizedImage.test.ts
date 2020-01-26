import { getResizedImage } from '../../src/helpers';

describe('getResizedImage()', () => {
  const imageWithSize = 'http://storename.vteximg.com.br/arquivos/ids/155242-292-292/image.png';
  const imageWithoutSize = 'http://storename.vteximg.com.br/arquivos/ids/155242/image.png';

  it('should resize image without size defined', () => {
    expect.assertions(1);
    expect(getResizedImage(imageWithoutSize, 100, 100)).toStrictEqual('http://storename.vteximg.com.br/arquivos/ids/155242-100-100/image.png');
  });

  it('should resize image even has size defined', () => {
    expect.assertions(1);
    expect(getResizedImage(imageWithSize, 500)).toStrictEqual('http://storename.vteximg.com.br/arquivos/ids/155242-500-auto/image.png');
  });
});
