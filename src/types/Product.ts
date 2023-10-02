export interface ProductAttributes {
  title: string;
  price: number;
  description: string;
  slug: string;
  kcal: string;
  prots: string;
  fats: string;
  carbs: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: [
      id: number,
      attributes: {
        name: string;
        url: string;
      }
    ]
  }
}

export interface Product {
id: number;
attributes: ProductAttributes;
}
