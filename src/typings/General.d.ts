interface ICatalogUrlArgs {
  path: string
  query?: string
  accountName?: string
}

interface ICatalogRequestArgs {
  path: string
  query?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface ISearchAutocompleteArgs {
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

interface ISearchProductArgs {
  ft?: string
  fq?: IFullQuery
  orderBy?: string
  from?: number
  to?: number
  priceRange?: string
  collection?: string
  salesChannel?: string
  seller?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface IPageTypeArgs {
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

interface ISearchFacetsArgs {
  pathname: string
  map: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface ISearchFacet {
  Quantity: number
  Name: string
  Link: string
  LinkEncoded: string
  Map: string
  Value: string
}

interface ISearchFacetCategory {
  Id: number
  Quantity: number
  Name: string
  Link: string
  LinkEncoded: string
  Map: string
  Value: string
  Children: ISearchFacetCategory[]
}

interface ISummaryItem {
  DisplayedItems: number
  TotalItems: number
}

interface ISearchFacets {
  Departments: ISearchFacet[]
  Brands: ISearchFacet[]
  SpecificationFilters: Record<string, ISearchFacet[]>
  CategoriesTrees: ISearchFacetCategory[]
  PriceRanges: {
    Slug: string
    Quantity: number
    Name: string
    Link: string
    LinkEncoded: string
    Map: null
    Value: string
  }[]
  Summary: {
    Departments: ISummaryItem
    CategoriesTrees: ISummaryItem
    Brands: ISummaryItem
    PriceRanges: ISummaryItem
    SpecificationFilters: Record<string, ISummaryItem>
  }
}
