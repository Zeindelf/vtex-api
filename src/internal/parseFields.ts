import uniq from '../utils/uniq';

/**
 * @module masterdata
 */
const parseFileds = (fields: any): string => {
  if (!Array.isArray(fields) || !fields.length) return 'id';

  fields.push('id');
  return uniq(fields).join(',');
};

export default parseFileds;
