/**
 * Change the width & height from a given VTEX image source
 *
 * @param {string} src    The source of the image
 * @param {number} width  The new image with
 * @param {number} height The new image height
 *
 * @return {string} The resized image source
 *
 * @example
 *   resizeImage('http://storename.vteximg.com.br/arquivos/ids/155242-292-292/image.png', 500);
 *   //=> http://storename.vteximg.com.br/arquivos/ids/155242-500-auto/image.png
 *
 *   resizeImage('http://storename.vteximg.com.br/arquivos/ids/155242/image.png', 100);
 *   //=> http://storename.vteximg.com.br/arquivos/ids/155242-100-auto/image.png
 */
const resizeImage = (src: string, width: number, height: string | number = 'auto') => {
  const newSrc = src.replace(/(?:ids\/[0-9]+)-([0-9]+)-([0-9]+)\//, (match, matchedWidth, matchedHeight) => (
    match.replace(`-${matchedWidth}-${matchedHeight}`, `-${width}-${height}`)
  ));

  return newSrc.replace(/(ids\/[0-9]+)\//, `$1-${width}-${height}/`);
};

export default resizeImage;
