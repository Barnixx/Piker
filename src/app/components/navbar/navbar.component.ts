import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CategoryService} from '../../services/category/category.service';
import {CategoryModel} from '../../models/category.model';

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
    this.categoryService.getCategory(true).subscribe(cat => {
      this.categories = cat.content;
    });
  }



}
