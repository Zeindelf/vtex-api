interface IResponse {
  status: number,
  json: any;
  headers: Headers;
  statusText?: string;
}

interface IFilters {
  _where?: string;
  _keyword?: string;
  _sort?: string;
}

interface IMasterdataParams {
  method: string;
  entity: string;
  type: string;
  id?: string;
  data?: {};
}

interface IObj {
  [key: string]: any;
}
