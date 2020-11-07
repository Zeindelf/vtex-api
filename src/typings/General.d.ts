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

interface IGetProductsByArgs extends IGetProductArgs {
  orderBy?: string
  from?: number
  to?: number
  priceRange?: string
  salesChannel?: string
  seller?: string
}

interface IGetProductResponse extends IResponse {
  json: IProduct | false
}

interface IGetProductsResponse extends IResponse {
  json: IProduct[] | []
}

interface IPageTypeArgs {
  path: string
  query?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface IPageType {
  id: string
  pageType: string
  name: string
  url: string
  title: string | null
  metaTagDescription: string | null
}

interface IGetCategoriesArgs {
  treeLevel: number
  query?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface IGetCategoryByIdArgs {
  id: number
  query?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface ICategoryTree {
  id: number
  name: string
  hasChildren: boolean
  url: string
  children: ICategoryTree[]
  Title: string
  MetaTagDescription: string
}

interface ICategoryById {
  parentId: number | null
  GlobalCategoryId: number
  GlobalCategoryName: string
  position: number
  slug: string
  id: number
  name: string
  hasChildren: boolean
  url: string
  children: null
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

interface IGetBrandsArgs {
  query?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface IGetBrandByIdArgs {
  id: number | string
  query?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface IBrand {
  id: string
  name: string
  isActive: boolean
  title: string | null
  metaTagDescription: string | null
  imageUrl: string | null
}

interface IGetSpecificationArgs {
  fieldId: number | string
  query?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface IGetSpecificationField {
  CategoryId: number | null
  DefaultValue: number | null
  Description: string
  FieldGroupId: number
  FieldGroupName: string
  FieldId: number
  FieldTypeId: number
  FieldTypeName: string
  FieldValueId: null
  IsActive: boolean
  IsFilter: boolean
  IsOnProductDetails: boolean
  IsRequired: boolean
  IsSideMenuLinkActive: boolean
  IsStockKeepingUnit: boolean
  IsTopMenuLinkActive: false
  IsWizard: boolean
  Name: string
  Position: number
}

interface ISpecificationFieldValue {
  FieldValueId: number
  IsActive: boolean
  Position: number
  Value: string
}
