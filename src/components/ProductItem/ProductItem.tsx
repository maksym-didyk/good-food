import React, { useState } from 'react';
import './ProductItem.scss';
import '../../assets/styles/scss/loader.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { ProductCard } from '../ProductCard';
import Calendar from 'react-calendar';
import '../../assets/styles/scss/calendar.scss';
import { useLocalStorage } from 'usehooks-ts';
import classnames from 'classnames';
import { Product } from '../../types/Product';
import { client } from '../../utils/fetchClient';
import { MutatingDots } from 'react-loader-spinner';
import { Locale } from '../../types/Locale';
import { Elements, ElementsAttributes } from '../../types/Elements';

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
  const [products, setProducts] = useState<Product[]>([]);
  const [isClick, setIsClick] = useState(false);
  const [isLoading, seIsLoading] = useState(true);
  const [datecalendar, setDatecalendar] = useState<Value>(new Date());
  const [energy, setEnergy] = useState<Energy>();
  const [keyTab, setKeyTab] = useState('');
  const [, setProduct] = useLocalStorage<string>('product', '');
  const [, setDate] = useLocalStorage<string>('date', '');
  const [locales, setLocales] = useState<Locale[]>([]);
  const [locale, setLocale] = useLocalStorage('locale', 'ru');
  const [elements, setElements] = useState<ElementsAttributes>();

  const loadData = async () => {
    // const productsData = await client.get<any>(`/products?locale=${locale}&sort=price&populate[0]=image&populate[1]=menu.dish.image&populate[2]=menus.menu.dish.image`);
    const productsData = await client.get<any>(`/products?locale=${locale}&sort=price&populate[0]=image&populate[1]=menus.menu.dish.image`);
    const localesDataApi = await client.get<Locale[]>('/i18n/locales');
    const elementsDataApi = await client.get<Elements>(`/element?locale=${locale}&populate[0]=header_menu&populate[1]=footer_menu`);

    setProducts(productsData.data);
    setLocales(localesDataApi);
    setElements(elementsDataApi.data.attributes);

    seIsLoading(false);
  };

  const currentProduct = products.find(item => item.attributes.slug === slug);
  const price = currentProduct?.attributes.price.toFixed(2);

  const handleTabChange = (itemId: string | null) => {
    if (itemId) {
      const { kcal, prots, fats, carbs } = currentProduct?.attributes.menus.data[0].attributes.menu.find(item => item.id === +itemId) || {kcal: '', prots: '', fats: '', carbs: ''};

      setEnergy({ kcal, prots, fats, carbs });

      setKeyTab(itemId);
    }
  }

  const setLang = (event: any) => {
    setLocale(event.target.value);
  }

  const handleClick = () => {
    if (datecalendar instanceof Date) {
      const year = datecalendar.getFullYear();
      const month = (datecalendar.getMonth() + 1).toString().padStart(2, '0'); // +1, так как месяцы начинаются с 0
      const day = datecalendar.getDate().toString().padStart(2, '0');
      const formattedDate = `${day}.${month}.${year}`;

      setDate(formattedDate);
    }

    setIsClick(true);
    setProduct(currentProduct?.attributes.title || slug);
  };

  React.useEffect(() => {
    loadData();
  // eslint-disable-next-line
  }, [locale]);

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
        <Header
          isBlack={true}
          locales={locales}
          locale={locale}
          setLang={setLang} 
          elements={elements}
        />
        </div>

      {currentProduct ? (
        <><div className='product__container'>
            <div>
              <div className='product__hero'>
                <h1 className='product__title'>
                  {currentProduct?.attributes.title}
                </h1>
                <p className='product_text'>
                  {currentProduct?.attributes.description}
                </p>
                <a href='#menu'
                  className='product-card__button-buy product__button'
                >
                  from &nbsp;
                  <span className='product__buttonprice'>{`€${price}`}</span>
                  &nbsp; / day
                </a>
              </div>
            </div>

            <div className='product__products'>
              <Container>
                <Row xs={1} md={1} lg={1} xl={2} className='g-4'>
                  {products
                    .filter(item => item.id !== currentProduct?.id)
                    .map(product =>
                      <Col key={product.id} className='d-flex justify-content-center'>
                        <ProductCard small={true} product={product} isClick={() => setKeyTab('')} />
                      </Col>
                  )}
                </Row>
              </Container>
            </div>

          </div><div className='product__container' id="menu">
              {currentProduct?.attributes.menus.data.length && (
                <div className='product__week'>
                  <Tabs
                    activeKey={keyTab || currentProduct?.attributes.menus.data[0].attributes.menu[0].id}
                    id="justify-tab"
                    className="mb-3"
                    fill
                    onSelect={(menuId) => handleTabChange(menuId)}
                  >
                    {currentProduct?.attributes.menus.data[0].attributes.menu.map(item =>
                      <Tab
                        key={item.id}
                        eventKey={item.id}
                        title={item.title}
                        className='mb-3'
                      >
                        <Row sm={1} md={1} lg={1} xl={2} className="g-4">

                          {item.dish.map(itemdish =>
                            <Col key={itemdish.id} className='text-center'>
                              <img src={itemdish.image.data?.attributes.formats.thumbnail.url} className='product__image' alt={itemdish.image.data?.attributes.name} />
                              <p className='product__menuname'>{itemdish.title}</p>
                            </Col>
                          )}

                        </Row>
                      </Tab>
                    )}
                  </Tabs>
                </div>
              )}

              <div className='product__date'>
                <div className='product__energy'>
                  <div className='product__daily'>
                    Daily average
                  </div>
                  <div className='product__params'>
                    <div>
                      <p>{elements?.item_kcal}</p>
                      <p className='product__param'>{energy?.kcal || currentProduct?.attributes.kcal.split(' ')[0]}</p>
                    </div>
                    <div>
                      <p>{elements?.item_prots}</p>
                      <p className='product__param'>{energy?.prots || currentProduct?.attributes.prots}</p>
                    </div>
                    <div>
                      <p>{elements?.item_fats}</p>
                      <p className='product__param'>{energy?.fats || currentProduct?.attributes.fats}</p>
                    </div>
                    <div>
                      <p>{elements?.item_carbs}</p>
                      <p className='product__param'>{energy?.carbs || currentProduct?.attributes.carbs}</p>
                    </div>
                  </div>
                </div>

                <div className='product__date'>
                  <div className='product__datetitle'>
                    {elements?.item_delivery_date}
                  </div>
                  <div className='product__calendar'>
                    <Calendar onChange={setDatecalendar} value={datecalendar} />
                  </div>

                  <button
                    className={classnames('product-card__button-buy product__button--buy', {
                      'sp_popup_bc29364b-2ce6-43ba-b411-a8a54991bb78': isClick && locale === 'ru',
                      'sp_popup_6b43f557-7a89-435c-9937-ff1943082ff9': isClick && locale !== 'ru',
                    })}
                    onClick={handleClick}
                  >
                    {elements?.buy_button}
                  </button>
                </div>
              </div>
            </div></>
      )
      : (
        <Container>
          <Row xs={1} md={1} lg={1} xl={3} className='g-4'>
            {products.map(product =>
                <Col key={product.id} className='d-flex justify-content-center'>
                  <ProductCard small={true} product={product} isClick={() => setKeyTab('')} />
                </Col>
            )}
          </Row>
        </Container>
      )
    }  
        <div className='product__devider'></div>
        <Footer isBlack={true} elements={elements} products={products} />
      </div>      
    </>
  );
};