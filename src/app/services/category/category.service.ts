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

  constructor(private http: HttpClient) { }

  getCategory(root: boolean): Observable<PagedResponseModel<CategoryModel>> {
    let params = new HttpParams().set('root', root.toString());
    return this.http.get<PagedResponseModel<CategoryModel>>(categoryApiUrl, {params: params});
  }

  getSseCategory(): Observable<Array<CategoryModel>> {
    return new Observable<Array<CategoryModel>>(observer => {
      const source: EventSource = new EventSource(categoryApiUrl + '/stream');
      source.onmessage = x => {
        let jsonString: any = JSON.parse(x.data);
        let categories: Array<CategoryModel> = <Array<CategoryModel>>jsonString;
        observer.next(categories);
      };
      source.onerror = x => console.log(x);

      return () => {
        source.close();
      };
    });
  }
}
