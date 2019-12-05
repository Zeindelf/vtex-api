import uniq from './uniq';

const parseFileds = (fields: any): string => {
  if (!Array.isArray(fields) || !fields.length) {
    return 'id';
  }

  fields.push('id');
  return uniq(fields).join(',');
};

export default parseFileds;
