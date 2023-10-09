import React from 'react';
import './ProductCard.scss';
import imgPlan from '../../assets/images/light.png';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';

interface Props {
  small?: boolean,
  product: Product,
}

export const ProductCard: React.FC <Props> = ({ small = false, product }) => {
  const price = product.attributes.price.toFixed(2);
    return(
        <div className='product-card'>
          <div className='product-card__container'>
            <Link to={`/${product.attributes.slug}`}>
              <img src={imgPlan} alt={product.attributes.title} />
            </Link>
            <div className='product-card__title'>{product.attributes.title}</div>
            {small || (
              <>
                <div className='product-card__calories'>{`${product.attributes.kcal} ккал`}</div>
                <div className='product-card__content'>{product.attributes.description}</div>
                <div className='product-card__price'>{`€ ${price}`}</div>
                <div className='product-card__button'>
                  <Link to={product.attributes.slug} className='product-card__button-buy'>Заказать</Link>
                </div>
              </>
            )}
          </div>
        </div>
    );
}
