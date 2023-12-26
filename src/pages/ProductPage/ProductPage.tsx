import React from 'react';
import { ProductItem } from '../../components/ProductItem';
import { useParams } from 'react-router-dom';

export const ProductPage = () => {
  let { slug } = useParams();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToTop();
  }, [slug]);

  return (
    <ProductItem slug={slug}/>
  )
};
