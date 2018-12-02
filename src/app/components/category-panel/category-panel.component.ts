import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category/category.service';
import {CategoryModel} from '../../models/category.model';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.css']
})
export class CategoryPanelComponent implements OnInit {

  categories: Array<CategoryModel>;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {

    this.categoryService.getCategory(true).subscribe(cat => {
      this.categories = cat.content;
    });
  }

}
