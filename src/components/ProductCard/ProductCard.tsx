import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';

interface Props {
  small?: boolean,
  product: Product,
  isClick?: () => void;
  buy_button?: string;
}

export const ProductCard: React.FC <Props> = ({ small = false, product, isClick, buy_button = 'Buy' }) => {
  const price = product.attributes.price.toFixed(2);
    return(
        <div className='product-card'>
          <div className='product-card__container'>
            <Link to={`/${product.attributes.slug}`} onClick={isClick}>
              <img src={product.attributes.image.data[0].attributes.url} alt={product.attributes.title} width={270} height={163} />
            </Link>
            <div className='product-card__title'>{product.attributes.title}</div>
            {small || (
              <>
                <div className='product-card__calories'>{product.attributes.kcal}</div>
                <div className='product-card__content'>{product.attributes.description}</div>
                <div className='product-card__price'>{`€ ${price}`}</div>
                <div className='product-card__button'>
                  <Link to={product.attributes.slug} className='product-card__button-buy'>{buy_button}</Link>
                </div>
              </>
            )}
          </div>
        </div>
    );
}
