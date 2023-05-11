import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  /*categories: Category[] = [
    { id: 1, name: 'Categoría 1' },
    { id: 2, name: 'Categoría 2' },
    { id: 3, name: 'Categoría 3' }
  ];*/

  /*articles: Article[] = [
    {
      id: 1,
      title: 'Camisetas',
      imageUrl: '',
      category: 1
    },
    {
      id: 2,
      title: 'Pantalones',
      imageUrl: '',
      category: 2
    },
    {
      id: 3,
      title: 'Zapatos',
      imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      category: 3
    }
  ];*/

  selectedCategory: number | null = null;

  onCategorySelected(categoryId: number): void {
    this.selectedCategory = categoryId;
  }
}
