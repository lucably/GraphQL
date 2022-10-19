import { gql } from 'apollo-server';

/* Colocou o "anderline"  pois estamos usando o JSON.Server o arquivo (db.json)
Numa API REAL TIRARIA o "anderline"
*/
export const apiFilterTypeDefs = gql`
  input ApiFiltersInput {
    _sort:  String
    _order: String
    _start: Int
    _limit: Int
  }

`
