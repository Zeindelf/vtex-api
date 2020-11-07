import catalogRequest from './services/catalogRequest';

interface IGetSpecificationFieldResponse extends IResponse {
  json: IGetSpecificationField
}

/**
 * @module catalog-system
 */
const getSpecificationField = ({
  fieldId, query, headers, accountName, auth,
}: IGetSpecificationArgs): Promise<IGetSpecificationFieldResponse> => (
  catalogRequest({
    path: `/specification/fieldGet/${fieldId}`,
    query,
    headers,
    accountName,
    auth,
  })
);

export default getSpecificationField;
