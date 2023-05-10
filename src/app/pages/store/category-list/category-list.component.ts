import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  @Output() categorySelected = new EventEmitter<string>();

  onCategoryClick(category: string) {
    this.categorySelected.emit(category);
  }
}
