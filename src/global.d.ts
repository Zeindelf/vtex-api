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

interface IMasterdataParams {
  method: string
  entity: string
  type: string
  id?: string
  data?: IObj
  accountName?: string
}

interface IMasterdataAttachmentParams {
  id: string | number
  entity: string
  formData: FormData
  field: string
}

interface IUploadFile {
  id: string | number
  entity: string
  file: File
  field: string
}

interface IObj {
  [key: string]: any
}
