interface IResponse {
  status: number,
  json: any
  headers: Headers
  statusText?: string
}

interface IFilters {
  _where?: string
  _keyword?: string
  _sort?: string
}

interface IAuthentication {
  appKey: string
  appToken: string
}

interface IMasterdataParams {
  method: string
  entity: string
  type: string
  id?: string
  data?: IObj
  accountName?: string
}

interface IMasterdataRequest {
  entity: string
  type: string
  method: string
  data: IObj
  id?: string
  headers?: string[]
  accountName?: string
  auth?: IAuthentication
}

interface ISearchDocument {
  search: IObj
  entity: string
  fields?: string[]
  filters?: IFilters
  offset?: number
  limit?: number
  auth?: IAuthentication
  accountName?: string
}

interface IInsertDeocument {
  data: IObj
  entity: string
  auth?: IAuthentication
  accountName?: string
}

interface IPartialUpdate {
  id: string
  data: IObj
  entity: string
  auth?: IAuthentication
  accountName?: string
}

interface IGetDocument {
  id: string
  fields: string[],
  entity: string
  auth?: IAuthentication
  accountName?: string
}

interface IGetUser {
  email: string
  fields: string[]
  auth?: IAuthentication
  accountName?: string
}

interface IUpdateUser {
  email: string
  data: IObj
  auth?: IAuthentication
  accountName?: string
}

interface INewsletterOptIn {
  email: string
  optIn?: boolean
  data?: IObj
  auth?: IAuthentication
  accountName?: string
}

interface IAttachmentParams {
  id: string | number
  entity: string
  formData: FormData
  field: string
  auth?: IAuthentication
  accountName?: string
}

interface IUploadFile {
  id: string | number
  entity: string
  file: File
  field: string
  auth?: IAuthentication
  accountName?: string
}

interface IObj {
  [key: string]: any
}
