# `searchDocument({ params })`

Param | Type | Description
:--- | :--- | :---
`search` | `object` | Main query to search
`entity` | `string` | Data Entity name
`fields?` | `array` | Fields that will be returned by document
`filters?` | `object` | Original query params. Accept: `_where`, `_keyword` and `_sort`
`offset?` | `number` | Offset starts search. Default `0`
`limit?` | `number` | End search. Default `49`

## Example

```js
const response = await searchDocument({
  search: {
    email: 'foo@email.com',
    ...
  },
  entity: 'CL',
  fields: ['_all'], // Returns all document fields
  filters: {
    _sort: 'email ASC',
    _where: 'firstName is null',
    _keyword: '*',
  },
  offset: 0,
  limit: 1, // Will return only one document
});
```