interface ICatalogUrlParams {
  path: string
  query?: string
  accountName?: string
}

interface ICatalogRequest {
  path: string
  query?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface ISearchAutocompleteParams {
  maxRows: number | string
  searchTerm: string
}

interface ISearchAutocompleteItem {
  productId: string
  itemId: string
  name: string
  nameComplete: string
  imageUrl: string
}

interface ISearchAutocompleteResponse {
  items: ISearchAutocompleteItem[]
  thumb: string
  thumbUrl: string | null
  name: string
  href: string
  criteria: string
}

interface ISearchProductParams {
  searchTerm: string
  orderBy?: string
  from?: number
  to?: number
  priceRange?: string
  query?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface IPageTypeParams {
  path: string
  query?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface IPageTypeResponse {
  id: string
  pageType: string
  name: string
  url: string
  title: string | null
  metaTagDescription: string | null
}

interface ICategoryTreeResponse {
  id: number
  name: string
  hasChildren: boolean
  url: string
  children: ICategoryTreeResponse[]
  Title: string
  MetaTagDescription: string
}
