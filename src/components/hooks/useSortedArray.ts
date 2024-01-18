import { IAcount } from "../types/types";

export const useSortedBy = (array: IAcount[], method: string) => {
  switch (method) {
    case 'filter':
      return array;
    case 'date':
      array.sort((a, b) => +a.creationDate - +b.creationDate)
      return array
    case 'token':
      array.sort((a, b) => +a.authToken - +b.authToken)
      return array
    case 'id':
      array.sort((a, b) => +a.id - +b.id)
      return array
    default:
      return array;
  }
}