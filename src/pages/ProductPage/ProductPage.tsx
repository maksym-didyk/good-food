import React from 'react';
import { Product } from '../../components/Product';
// import { useParams } from 'react-router-dom';
import { client } from '../../utils/fetchClient';

// export interface Product {
//   data: [
//     id: number,
//     attributes: {
//       title: string,
//       price: number,
//       description: string,
//       slug: string,
//       energy: number,
//     }
//   ]
// }

const getProducts = () => client.get<string>('/products');

export const ProductPage = () => {
  // const [products, setProducts] = React.useState<Product[]>([]);
  // const { slug } = useParams();

// const loadProducts = async () => {

// }


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToTop();
  }, []);

  console.log(getProducts);
  return (
    <Product />
  )
};
