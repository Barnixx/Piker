export interface PagedResponseModel <T>{

  content: Array<T>;
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;

}

export interface Pageable {

  pageSize: number;
  pageNumber: number;


}
