import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CategoryModel} from '../../models/category.model';
import {Observable} from 'rxjs';
import {PagedResponseModel} from '../../models/paged-response.model';

const categoryApiUrl: string = "http://localhost:8080/api/category";
const httpHeader = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Origin, Methods, Content-Type'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public categories: Array<PagedResponseModel>;


  constructor(private http: HttpClient) { }

  getCategory(root: boolean): Observable<PagedResponseModel<CategoryModel>> {
    let params = new HttpParams().set('root', root.toString());
    return this.http.get<PagedResponseModel<CategoryModel>>(categoryApiUrl, {params: params});
  }
}
