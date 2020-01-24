interface IResponse {
  status: number,
  json: any
  headers: Headers
  statusText?: string
}

interface IAuthentication {
  appKey: string
  appToken: string
}

interface IObj {
  [key: string]: any
}
