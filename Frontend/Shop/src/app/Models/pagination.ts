import {IProduct} from './products';

export interface IPagintation {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: IProduct[];
}
