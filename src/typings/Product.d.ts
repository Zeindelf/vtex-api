interface INotifyMeArgs {
  name: string
  email: string
  itemId: string | number
}

interface IRequestItems {
  id: string | number
  quantity: string | number
  seller: string | number
}

interface ISimulateShippingArgs {
  postalCode: string | number
  items: IRequestItems[]
  sc: string | number
}

interface IProduct {
  productId: string
  productName: string
  brand: string
  brandId: number
  linkText: string
  productReference: string
  categoryId: string
  productTitle: string
  metaTagDescription: string
  clusterHighlights: Record<string, string>
  productClusters: Record<string, string>
  searchableClusters: Record<string, string>
  categories: string[]
  categoriesIds: string[]
  link: string
  description: string
  items: IProductItem[]
  titleTag: string
  Specifications?: string[]
  allSpecifications?: string[]
  allSpecificationsGroups?: string[]
}

interface IProductItem {
  itemId: string
  name: string
  nameComplete: string
  complementName: string
  ean: string
  referenceId: { Key: string; Value: string }[]
  measurementUnit: string
  unitMultiplier: number
  modalType: any | null
  images: IProductImage[]
  Videos: string[]
  variations: string[]
  sellers: ISeller[]
  isKit: boolean
}

interface IProductImage {
  imageId: string
  imageLabel: string | null
  imageTag: string
  imageUrl: string
  imageText: string
}

interface IProductInstallment {
  Value: number
  InterestRate: number
  TotalValuePlusInterestRate: number
  NumberOfInstallments: number
  PaymentSystemName: string
  PaymentSystemGroupName: string
  Name: string
}

interface ICommertialOffer {
  DeliverySlaSamplesPerRegion: Record<string, { DeliverySlaPerTypes: any[]; Region: any | null }>
  Installments: IProductInstallment[]
  DiscountHighLight: any[]
  GiftSkuIds: string[]
  Teasers: any[]
  BuyTogether: any[]
  ItemMetadataAttachment: any[]
  Price: number
  ListPrice: number
  PriceWithoutDiscount: number
  RewardValue: number
  PriceValidUntil: string
  AvailableQuantity: number
  Tax: number
  DeliverySlaSamples: {
    DeliverySlaPerTypes: any[]
    Region: any | null
  }[]
  GetInfoErrorMessage: any | null
  CacheVersionUsedToCallCheckout: string
}

interface ISeller {
  sellerId: string
  sellerName: string
  addToCartLink: string
  sellerDefault: boolean
  commertialOffer: ICommertialOffer
}

interface IGetProductArgs {
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}
