/*export class Article {
    id?: number;
    title?: string;
    imageUrl?: string;
    category?: number;
  }*/
  export class Article {
    constructor(
      public id: number,
      public title: string,
      public imageUrl: string,
      public category: number,
      public price: number
    ) { }
  }