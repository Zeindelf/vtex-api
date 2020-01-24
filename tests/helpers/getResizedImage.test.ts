import { getResizedImage } from '../../src/helpers';

const imageWithSize = 'http://storename.vteximg.com.br/arquivos/ids/155242-292-292/image.png';
const imageWithoutSize = 'http://storename.vteximg.com.br/arquivos/ids/155242/image.png';

describe('getResizedImage()', () => {
  it('should convert integer/decimals price to correct format', () => {
    expect.assertions(2);

    expect(getResizedImage(imageWithSize, 500)).toStrictEqual('http://storename.vteximg.com.br/arquivos/ids/155242-500-auto/image.png');
    expect(getResizedImage(imageWithoutSize, 100, 100)).toStrictEqual('http://storename.vteximg.com.br/arquivos/ids/155242-100-100/image.png');
  });
});
