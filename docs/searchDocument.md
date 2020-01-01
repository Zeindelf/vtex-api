# searchDocument({ params })

Param | Type | Description
:--- | :--- | :---
`search` | `object` | Main query to search
`entity` | `string` | Data Entity name
`fields` | `array` | Fields that will be returned by document
`filters` | `object` | Original query params

```js
/** Example */
const response = await searchDocument({
  search: {
    email: 'foo@email.com',
    ...
  },
  entity: 'CL',
  fields: ['_all'],
  filters: {
    _sort: 'email ASC',
    _where: 'firstName is null',
    _keyword: '*',
  },
});
```