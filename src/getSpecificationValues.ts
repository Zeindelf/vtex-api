import catalogRequest from './services/catalogRequest';

interface IGetSpecificationValuesResponse extends IResponse {
  json: ISpecificationFieldValue[]
}

/**
 * @module catalog-system
 */
const getSpecificationValues = ({
  fieldId, query, headers, accountName, auth,
}: IGetSpecificationArgs): Promise<IGetSpecificationValuesResponse> => (
  catalogRequest({
    path: `/specification/fieldValue/${fieldId}`,
    query,
    headers,
    accountName,
    auth,
  })
);

export default getSpecificationValues;
