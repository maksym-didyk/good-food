import React from 'react';
import './ProductItem.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Carousel, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { ProductCard } from '../ProductCard';
import Calendar from 'react-calendar';
import '../../assets/styles/scss/calendar.scss';
import imgOne from '../../assets/images/1.png';
import imgTwo from '../../assets/images/2.png';
import imgThree from '../../assets/images/3.png';
import imgFour from '../../assets/images/4.png';
import { useLocalStorage } from 'usehooks-ts';
import classnames from 'classnames';
import { Product } from '../../types/Product';
import { client } from '../../utils/fetchClient';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  slug: string | undefined;
}

export const ProductItem: React.FC<Props> = ({ slug='' }) => {
  const [products, setProducts] = React.useState<Product[]>([]);
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
    setProduct(slug);
  };

  const loadProducts = async () => {
    const productsData = await client.get<any>('/products?sort=price&populate[menu][populate]=*');
    setProducts(productsData.data);
  };

  const currentProduct = products.find(item => item.attributes.slug === slug);

  React.useEffect(() => {
    loadProducts();
  }, []);

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
                  {currentProduct?.attributes.title}
                </h1>
                <p className='product_text'>
                  {currentProduct?.attributes.description}
                </p>
                <a href='#menu'
                  className = 'product-card__button-buy product__button'
                >
                  от &nbsp;
                  <span className='product__buttonprice'>{`€${currentProduct?.attributes.price}`}</span>
                  &nbsp; / день
                </a>
              </div>
            </div>

            <div>
              <div className='product__products'>
              <Carousel interval={3000}>
              {products &&
                products.map((item) => {
                  return (
                    <Carousel.Item key={item.id}>
                      <ProductCard small={true} product={item} />
                  </Carousel.Item>
                  )
                })}
              </Carousel>
              </div>
            </div>
        </div>

        <div className='product__container' id="menu">
          <div className='product__week'>
            <Tabs
              defaultActiveKey="1"
              id="justify-tab-example"
              className="mb-3"
              fill
            >
            {currentProduct?.attributes.menu.map((item) => {
                return (
                  <Tab key={item.id} eventKey={item.id} title={item.title}>
                    <Row xs={1} md={2} lq={4} className="g-4">
                      {item.dish.map(itemdish => {
                        return (
                          <Col key={itemdish.id}>
                            <img src={imgOne} className='product__image' alt='' />
                            <p className='product__menuname'>{itemdish.title}</p>
                          </Col>
                        )
                      })}
                    </Row>
                  </Tab>
                  // <figure key={item.id} className='product__day'>{item.title}</figure>
                )
            })}
            </Tabs>
          </div>

          <div>
            <div className='product__energy'>
              <div className='product__daily'>
                Daily average
              </div>
              <div className='product__params'>
                <div>
                  <p>ккал</p>
                  <p className='product__param'>{currentProduct?.attributes.kcal}</p>
                </div>
                <div>
                  <p>б</p>
                  <p className='product__param'>{currentProduct?.attributes.prots}</p>
                </div>
                <div>
                  <p>ж</p>
                  <p className='product__param'>{currentProduct?.attributes.fats}</p>
                </div>
                <div>
                  <p>у</p>
                  <p className='product__param'>{currentProduct?.attributes.carbs}</p>
                </div>
              </div>
            </div>

            <div className='product__date'>
            <div className='product__datetitle'>
              Выберите дату первой доставки
            </div>
            <div className='product__calendar'>
              <Calendar onChange={setDatecalendar} value={datecalendar} />
            </div>

            <button
              className = {classnames('product-card__button-buy product__button--buy', {
                'sp_popup_1039a2a3-08c1-4a88-aa79-a0dd739c56ba': isClick,
              })}
              onClick={handleClick}
            >
              Заказать
            </button>
          </div>
          </div>
        </div>

        <Footer />
      </div>      
    </>
  );
};
