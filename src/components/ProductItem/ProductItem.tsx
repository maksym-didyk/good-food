import React from 'react';
import './ProductItem.scss';
import '../../assets/styles/scss/loader.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Carousel, Col, Row, Tab, Tabs } from 'react-bootstrap';
import { ProductCard } from '../ProductCard';
import Calendar from 'react-calendar';
import '../../assets/styles/scss/calendar.scss';
import { useLocalStorage } from 'usehooks-ts';
import classnames from 'classnames';
import { Product } from '../../types/Product';
import { client } from '../../utils/fetchClient';
import { MutatingDots } from 'react-loader-spinner';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  slug: string | undefined;
}

interface Energy {
  kcal: string;
  prots: string;
  fats: string;
  carbs: string;
}

export const ProductItem: React.FC<Props> = ({ slug='' }) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isClick, setIsClick] = React.useState(false);
  const [isLoading, seIsLoading] = React.useState(true);
  const [datecalendar, setDatecalendar] = React.useState<Value>(new Date());
  const [energy, setEnergy] = React.useState<Energy>();
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
    const productsData = await client.get<any>('/products?sort=price&populate=menu.dish.image');
    setProducts(productsData.data);

    seIsLoading(false);
  };

  const currentProduct = products.find(item => item.attributes.slug === slug);

  // const fillEnergy = () => {
  //   if (currentProduct) {
  //     const { kcal, prots, fats, carbs } = currentProduct.attributes;

  //     setEnergy({kcal, prots, fats, carbs});
  //   }
  // }

  const handleTabChange = (itemId: string | null) => {
    if (itemId) {
      const { kcal, prots, fats, carbs } = currentProduct?.attributes.menu.find(item => item.id === +itemId) || {kcal: '', prots: '', fats: '', carbs: ''};

      setEnergy({ kcal, prots, fats, carbs });
    }
  }

  React.useEffect(() => {
    loadProducts(); 
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <MutatingDots
          height="100"
          width="100"
          color="#c21807"
          secondaryColor='#c21807'
          radius='12.5'
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    )
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
                <Row xs={1} md={1} lg={2} xl={2} className="g-4">
                    {products.filter(item => item.id !== currentProduct?.id).map(product => {
                      return (
                        <Col key={product.id}>
                          <ProductCard small={true} product={product} />
                        </Col>
                      )
                    })}
                </Row>

              {/* <Carousel interval={3000}>
              {products &&
                products.map((item) => {
                  return (
                    <Carousel.Item key={item.id}>
                      <ProductCard small={true} product={item} />
                  </Carousel.Item>
                  )
                })}
              </Carousel> */}
              </div>
            </div>
        </div>

        <div className='product__container' id="menu">
          <div className='product__week'>
            <Tabs
              defaultActiveKey={currentProduct?.attributes.menu[0].id}
              id="justify-tab-example"
              className="mb-3"
              fill
              onSelect={(menuId) => handleTabChange(menuId)}
            >
            {currentProduct?.attributes.menu.map((item) => {

                return (
                  <Tab
                    key={item.id}
                    eventKey={item.id}
                    title={item.title}
                    className='mb-3'
                  >
                    <Row xs={1} md={2} className="g-4">

                      {item.dish.map(itemdish => {
                        return (
                          <Col key={itemdish.id} className='m-auto'>
                            <img src={itemdish.image.data?.attributes.formats.thumbnail.url} className='product__image' alt={itemdish.image.data?.attributes.name} />
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

          <div className='product__date'>
            <div className='product__energy'>
              <div className='product__daily'>
                Daily average
              </div>
              <div className='product__params'>
                <div>
                  <p>ккал</p>
                  <p className='product__param'>{energy?.kcal || currentProduct?.attributes.kcal}</p>
                </div>
                <div>
                  <p>б</p>
                  <p className='product__param'>{energy?.prots || currentProduct?.attributes.prots}</p>
                </div>
                <div>
                  <p>ж</p>
                  <p className='product__param'>{energy?.fats || currentProduct?.attributes.fats}</p>
                </div>
                <div>
                  <p>у</p>
                  <p className='product__param'>{energy?.carbs || currentProduct?.attributes.carbs}</p>
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
