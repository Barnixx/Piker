import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CategoryService} from '../../services/category/category.service';
import {CategoryModel} from '../../models/category.model';
import {tap} from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  categories: Array<CategoryModel>;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
      this.categoryService.getCategory(true)
          .pipe(
              tap(() => {
                  setTimeout(() => {
                      $('.selectpicker').selectpicker('refresh');
                  });
              })).subscribe(cat => {
          this.categories = cat.content;
          console.log(cat.content);
    });
  }
}