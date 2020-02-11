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

type IFullQuery = string | number | any[];

interface IObj {
  [key: string]: any
}
