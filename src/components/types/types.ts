export interface IAcount{
  id: number,
  email: string,
  authToken: number,
  creationDate: string,
}

export interface IProfile{
  id: number,
  country: string,
  marketplace: string,
}

export interface ICampaign{
 id: number,
 clicks: number,
 cost: string,
 date: string,
}