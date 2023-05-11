import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  @Output() categorySelected = new EventEmitter<number>();

  categories: Category[] = [
    {id: 1, name: "Camisetas" },
    {id: 2, name: "Camisas" },
    {id: 3, name: "Gafas" },
    {id: 4, name: "Jerseys" },
    {id: 5, name: "Sudaderas" },
    {id: 6, name: "Bañadores" },
    {id: 7, name: "Pantalones" }
   
    ];

  onCategoryClick(id: number): void {
    
    this.categorySelected.emit(id);
  
}
}
