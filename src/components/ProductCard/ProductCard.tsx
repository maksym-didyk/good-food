import React from 'react';
import './ProductCard.scss';
import imgPlan from '../../assets/images/light.png';

export const ProductCard = () => {
    return(
        <div className='product-card'>
          <div className='product-card__container'>
            <img src={imgPlan} alt='Light'/>
            <div className='product-card__title'>Light</div>
            <div className='product-card__calories'>1200 ккал</div>
            <div className='product-card__content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
            <div className='product-card__price'>€ 24</div>
            <div className='product-card__button'>
              <button className='product-card__button-buy'>Заказать</button>
            </div>
            
          </div>
        </div>
    );
}
