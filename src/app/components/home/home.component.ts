import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category/category.service";
import {Subscription} from "rxjs";
import {CategoryModel} from "../../models/category.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private sseStream: Subscription;
  categories: Array<CategoryModel> = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getSseCategory().subscribe(stream => {
      console.log(stream);
      this.categories = stream;
    })
  }

  ngOnDestroy(): void {
    if (this.sseStream) {
      this.sseStream.unsubscribe();
    }
  }

}
