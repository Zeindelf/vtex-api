interface IFilters {
  _where?: string
  _keyword?: string
  _sort?: string
}

interface IMasterdataArgs {
  method: string
  entity: string
  type: string
  id?: string
  data?: IObj
  accountName?: string
  an?: string
}

interface IMasterdataRequestArgs {
  entity: string
  type: string
  method: string
  data: IObj
  id?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
  an?: string
}

interface ISearchDocumentArgs {
  search: IObj
  entity: string
  fields?: string[]
  filters?: IFilters
  offset?: number
  limit?: number
  auth?: IAuthentication
  accountName?: string
  an?: string
}

interface IInsertDeocumentArgs {
  data: IObj
  entity: string
  auth?: IAuthentication
  accountName?: string
  an?: string
}

interface IPartialUpdateArgs {
  id: string
  data: IObj
  entity: string
  auth?: IAuthentication
  accountName?: string
  an?: string
}

interface IGetDocumentArgs {
  id: string
  fields: string[],
  entity: string
  auth?: IAuthentication
  accountName?: string
  an?: string
}

interface IGetUserArgs {
  email: string
  fields: string[]
  auth?: IAuthentication
  accountName?: string
  an?: string
}

interface IUpdateUserArgs {
  email: string
  data: IObj
  auth?: IAuthentication
  accountName?: string
  an?: string
}

interface INewsletterOptInArgs {
  email: string
  optIn?: boolean
  data?: IObj
  auth?: IAuthentication
  accountName?: string
  an?: string
}

interface IAttachmentArgs {
  id: string | number
  entity: string
  formData: FormData
  field: string
  auth?: IAuthentication
  accountName?: string
  an?: string
}

interface IUploadFileArgs {
  id: string | number
  entity: string
  file: File
  field: string
  auth?: IAuthentication
  accountName?: string
}
