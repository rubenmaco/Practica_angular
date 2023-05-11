import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {

  @Input() selectedCategory: number | null = null;

  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
    this.articles = articleService.getArticles();
  }

  getFilteredArticles(): Article[] {
    if (this.selectedCategory === null) {
      return [];
    }
    return this.articleService.getArticlesByCategory(this.selectedCategory);
    }
}
