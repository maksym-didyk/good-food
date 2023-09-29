import React from 'react';
import './Product.scss';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/ProductCard';
import Calendar from 'react-calendar';
import '../../assets/styles/scss/calendar.scss';
import imgOne from '../../assets/images/1.png';
import imgTwo from '../../assets/images/2.png';
import imgThree from '../../assets/images/3.png';
import imgFour from '../../assets/images/4.png';
import { useLocalStorage } from '../../utils/useLocalStorage';
import classnames from 'classnames';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Product = () => {
  const [isClick, setIsClick] = React.useState(false);
  const [datecalendar, setDatecalendar] = React.useState<Value>(new Date());
  const [, setProduct] = useLocalStorage<string>('product', '');
  const [, setDate] = useLocalStorage<string>('date', '');

  const handleClick = () => {
    if (datecalendar instanceof Date) {
      const year = datecalendar.getFullYear();
      const month = (datecalendar.getMonth() + 1).toString().padStart(2, '0'); // +1, так как месяцы начинаются с 0
      const day = datecalendar.getDate().toString().padStart(2, '0');
      const formattedDate = `${day}.${month}.${year}`;

      setDate(formattedDate);
    }

    setIsClick(true);
    setProduct('Ligth');
  };

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
                <a href='#menu'
                  className = 'product-card__button-buy product__button'
                >
                  от
                  <span className='product__buttonprice'>&euro;24</span>
                  / день
                </a>
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

        <div className='product__container' id="menu">
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
            <div className='product__calendar'>
              <Calendar onChange={setDatecalendar} value={datecalendar} />
            </div>

            <button
              className = {classnames('product-card__button-buy product__button--buy', {
                'sp_popup_ee92261f-3d9e-4101-bf57-dfd5b4aaf302': isClick,
              })}
              onClick={handleClick}
            >
              Заказать
            </button>
          </div>
        </div>

        <Footer />
      </div>      
    </>
  );
};
