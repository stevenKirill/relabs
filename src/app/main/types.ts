export interface IUsersResponse {
  total: number,
  per_page: number,
  page: number,
  limit: number,
  offset: number,
  items: Array<IUserItem>
}

export interface IUserItem {
  id: number,
  name: string,
  role: string,
  ctime: number;
}
