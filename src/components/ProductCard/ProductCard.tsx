import React from 'react';
import './ProductCard.scss';
import imgPlan from '../../assets/images/light.png';
import { Link } from 'react-router-dom';

interface Props {
  small?: boolean
}

export const ProductCard: React.FC <Props> = ({ small = false }) => {
    return(
        <div className='product-card'>
          <div className='product-card__container'>
            <img src={imgPlan} alt='Light'/>
            <div className='product-card__title'>Light</div>
            {small || (
              <>
                <div className='product-card__calories'>1200 ккал</div>
                <div className='product-card__content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div><div className='product-card__price'>€ 24</div><div className='product-card__button'>
                  <Link to='/menu' className='product-card__button-buy'>Заказать</Link>
                </div>
              </>
            )}
          </div>
        </div>
    );
}
