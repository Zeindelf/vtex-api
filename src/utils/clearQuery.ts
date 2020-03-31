import trim from './trim';
import trimAmpersands from './trimAmpersands';
import removeQuestionMarks from './removeQuestionMarks';

/**
 * @module utils
 */
const clearQuery = (query: string): string => (
  removeQuestionMarks(trimAmpersands(trim(query)))
);

export default clearQuery;
