interface INotifyMe {
  name: string
  email: string
  itemId: string | number
}

interface IRequestItems {
  id: string | number
  quantity: string | number
  seller: string | number
}

interface ISimulateShipping {
  postalCode: string | number
  items: IRequestItems[]
  sc: string | number
}
