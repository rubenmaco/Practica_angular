import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [
    {
      id: 1,
      title: 'Camiseta blanca',
      imageUrl: 'https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      category: 1,
      price: 18.50
    },
    {
      id: 2,
      title: 'Camiseta rosa',
      imageUrl: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      category: 1,
      price: 14.95
    },
    {
      id: 3,
      title: 'Camiseta del Emperador',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1677838847509-0828c90e2848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      category: 1,
      price: 9999
    },
    {
      id: 4,
      title: 'Camisa negra floral',
      imageUrl: 'https://images.unsplash.com/photo-1558269853-b899f3d901ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      category: 2,
      price: 25
    },
    {
      id: 5,
      title: 'Gafas de sol negras',
      imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      category: 3,
      price: 150
    },
    {
      id: 6,
      title: 'Jersey verde',
      imageUrl: 'https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      category: 4,
      price: 43
    },
    {
      id: 7,
      title: 'Sudadera cielo nublado',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1673826949066-2706566273d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      category: 5,
      price: 55
    },
    {
      id: 8,
      title: 'Bañador salmón',
      imageUrl: 'https://images.unsplash.com/photo-1622912496991-dbed807c72f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      category: 6,
      price: 38
    },
    {
      id: 9,
      title: 'Bañador rojo',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1683147684969-2e48d5ad43c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      category: 6,
      price: 24
    },
    {
      id: 10,
      title: 'Pantalón color crema',
      imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      category: 7,
      price: 60
    },
    {
      id: 11,
      title: 'Pantalón tobillero negro',
      imageUrl: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      category: 42,
      price: 20
    },
    {
      id: 12,
      title: 'Pantalón de pana granate',
      imageUrl: 'https://images.unsplash.com/photo-1638394440667-aa54a7c0a703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      category: 7,
      price: 50
    },
    {
      id: 13,
      title: 'Pantalón vaquero',
      imageUrl: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      category: 7,
      price: 20
    }
  ];

  constructor() { }

  getArticles(): Article[] {
    return this.articles;
  }

  getArticlesByCategory(categoryId: number): Article[] {
    return this.articles.filter(article => article.category === categoryId);
  }
}
