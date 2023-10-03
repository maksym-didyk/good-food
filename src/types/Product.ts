export interface ProductAttributes {
  title: string;
  price: number;
  description: string;
  slug: string;
  kcal: string;
  prots: string;
  fats: string;
  carbs: string;
  image: {
    data: [
      id: number,
      attributes: {
        name: string;
        url: string;
      }
    ]
  }
  menu: ProductMenu[];
}

export interface ProductMenu {
  id: number;
  title: string;
  dish: [
    {
      id: number;
      title: string;
      image: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: string;
            url: string;
          }
        }
      }
    }
  ]
}

export interface Product {
id: number;
attributes: ProductAttributes;
}
