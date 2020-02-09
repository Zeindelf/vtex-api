const trimSlashes = (str: string): string => str.replace(/^\/+|\/+$/g, '');

export default trimSlashes;
