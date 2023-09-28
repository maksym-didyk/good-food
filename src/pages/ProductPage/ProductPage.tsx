import React from 'react';
import './ProductPage.scss';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/ProductCard';
import Calendar from 'react-calendar';
import '../../assets/styles/scss/calendar.css';
import imgOne from '../../assets/images/1.png';
import imgTwo from '../../assets/images/2.png';
import imgThree from '../../assets/images/3.png';
import imgFour from '../../assets/images/4.png';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const ProductPage = () => {
  const [value, onChange] = React.useState<Value>(new Date());

  return (
    <>
      <div className='product'>
        <div className='product__header'>
          <Header />
        </div>

        <div className='product__container'>
            <div>
              <div className='product__hero'>
                <h1 className='product__title'>
                  Light
                </h1>
                <p className='product_text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. product/service description
                </p>
                <button className='product-card__button-buy product__button'>
                  от
                  <span className='product__buttonprice'>&euro;24</span>
                  / день
                </button>
              </div>
            </div>

            <div>
              <div className='product__products'>
              <Carousel interval={3000}>
                <Carousel.Item>
                  <ProductCard small={true} />
                </Carousel.Item>
                <Carousel.Item>
                  <ProductCard small={true} />
                </Carousel.Item>
                <Carousel.Item>
                  <ProductCard small={true} />
                </Carousel.Item>
              </Carousel>
              </div>
            </div>
        </div>

        <div className='product__container'>
          <div className='product__week'>
            <figure className='product__day product__day--active'>Пн</figure>
            <figure className='product__day'>Вт</figure>
            <figure className='product__day'>Ср</figure>
            <figure className='product__day'>Чт</figure>
            <figure className='product__day'>Пт</figure>
            <figure className='product__day'>Сб</figure>
            <figure className='product__day'>Вс</figure>
          </div>

          <div>
            <div className='product__energy'>
              <div className='product__daily'>
                Daily average
              </div>
              <div className='product__params'>
                <div>
                  <p>ккал</p>
                  <p className='product__param'>1221</p>
                </div>
                <div>
                  <p>б</p>
                  <p className='product__param'>65</p>
                </div>
                <div>
                  <p>ж</p>
                  <p className='product__param'>64</p>
                </div>
                <div>
                  <p>у</p>
                  <p className='product__param'>84</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='product__container'>
          <Container>
            <Row>
              <Col sm={6}>
                <img src={imgOne} className='product__image' alt='' />
                <p className='product__menuname'>Скрембл с трюфельной пастой</p>
              </Col>
              <Col sm={6}>
                <img src={imgTwo} className='product__image' alt='' />
                <p className='product__menuname'>Тортилья с креветкой и овощами </p>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <img src={imgThree} className='product__image' alt='' />
                <p className='product__menuname'>Салат с индейкой, черри и авокадо</p>
              </Col>
              <Col sm={6}>
                <img src={imgFour} className='product__image' alt='' />
                <p className='product__menuname'>Фруктовый салат с орехами</p>
              </Col>
            </Row>
          </Container>
          <div className='product__date'>
            <div className='product__datetitle'>
              Выберите дату первой доставки
            </div>
            <div>
              <Calendar onChange={onChange} value={value} />
            </div>

            <button className='product-card__button-buy product__button--buy'>Заказать</button>
          </div>
        </div>

        <Footer />
      </div>      
    </>
  );
};
