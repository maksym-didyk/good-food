import React from 'react';
import './HomePage.scss';
import '../../assets/styles/scss/loader.scss';
import { Header } from '../../components/Header';
import { Accordion, Tab, Tabs } from 'react-bootstrap';
import { Footer } from '../../components/Footer';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import imgAboutUs from '../../assets/images/about-us.png';
import { Product } from '../../types/Product';
import { HomePageAttributes } from '../../types/HomePage';
import { MutatingDots } from 'react-loader-spinner';
import { client } from '../../utils/fetchClient';

export const HomePage = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [homeData, setHomeData] = React.useState<HomePageAttributes>();
  const [isLoading, seIsLoading] = React.useState(true);

  const loadData = async () => {
    const homeDataApi = await client.get<any>('/home-page?populate=faq_tabs.questions');
    const productsDataApi = await client.get<any>('/products?sort=price');

    setHomeData(homeDataApi.data.attributes);
    setProducts(productsDataApi.data);

    seIsLoading(false);
  };

  React.useEffect(() => {
    loadData();
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
    <div className="homepage">
      <section className='homepage__hero' id='hero'>

        <Header />

        <div className='homepage__hero-section'>
          <div className='homepage__hero--title'>
            {homeData?.hero_title}
          </div>

          <div className='homepage__hero--text'>
          {homeData?.hero_content}
          </div>

          <a href='#menu' className='header__button'>Заказать</a>
        </div>

      </section>

      <section className='homepage__menu' id='menu'>
        
        <h2 className='homepage__menu--title'>{homeData?.menu_title}</h2>

        <div className='homepage__products'>

          {products &&
            products.map((item) => {
              return <ProductCard key={item.id} product={item}/>;
            })}

        </div>
      </section>

      <div className='homepage__aboutus' id='about-us'>
        <div className='homepage__aboutus--content'>
          <div className='homepage__aboutus--left'>
            <div className='homepage__aboutus--title'>
              {homeData?.about_title}
            </div>

            <div className='homepage__aboutus--text'>
              {homeData?.about_content}
            </div>

            <ul className='homepage__aboutus--list'>
              <li className='homepage__aboutus--li'>
                Все наши меню разрабатываются шеф-поваром совместно с нутрициологом с 12-летним стажем работы.
              </li>
              <li className='homepage__aboutus--li'>
                Все блюда готовятся только из качественных и свежих продуктов.
              </li>
              <li className='homepage__aboutus--li'>
                Мы ответственно относимся к тому, есть ли у Вас аллергия или непереносимость каких-либо продуктов и учитываем это, подбирая для Вас рацион.
              </li>
              <li className='homepage__aboutus--li'>
                Мы заботимся о наших клиентах и всегда рады обратной связи, чтобы с каждым днем совершенствоваться и радовать Вас лучшим продуктом.
              </li>
            </ul>
          </div>

          <div className='homepage__aboutus--right'>
            <img src={imgAboutUs} alt='' className='homepage__aboutus--image'/>
          </div>
        </div>
      </div>

      <section className='homepage__menu' id='howitwork'>
  
        <h2 className='homepage__menu--title'>{homeData?.howitwork_title}</h2>

        <div className='homepage__products'>

        <div className='homepage__whywecard'>
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <g opacity="0.5" clip-path="url(#clip0_111_833)">
              <path d="M17.498 29.1667H29.1647" stroke="#C21807" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M60.761 32.0834H53.1718C47.9655 32.0834 43.748 36.0005 43.748 40.8334C43.748 45.6663 47.9685 49.5834 53.1689 49.5834H60.761C61.006 49.5834 61.1255 49.5834 61.2276 49.5775C62.8026 49.4813 64.0568 48.3175 64.1589 46.8563C64.1647 46.763 64.1647 46.6492 64.1647 46.4246V35.2421C64.1647 35.0175 64.1647 34.9038 64.1589 34.8105C64.0539 33.3492 62.8026 32.1855 61.2276 32.0892C61.1255 32.0834 61.006 32.0834 60.761 32.0834Z" stroke="#C21807" stroke-width="4.5"/>
              <path d="M61.1466 32.0835C60.9191 26.6235 60.19 23.2751 57.8304 20.9185C54.4149 17.5001 48.9141 17.5001 37.9154 17.5001H29.1654C18.1666 17.5001 12.6658 17.5001 9.25036 20.9185C5.83203 24.3339 5.83203 29.8347 5.83203 40.8335C5.83203 51.8322 5.83203 57.333 9.25036 60.7485C12.6658 64.1668 18.1666 64.1668 29.1654 64.1668H37.9154C48.9141 64.1668 54.4149 64.1668 57.8304 60.7485C60.19 58.3918 60.922 55.0435 61.1466 49.5835" stroke="#C21807" stroke-width="4.5"/>
              <path d="M17.498 17.5001L28.3918 10.2755C29.9238 9.27897 31.7121 8.74854 33.5397 8.74854C35.3673 8.74854 37.1556 9.27897 38.6876 10.2755L49.5814 17.5001" stroke="#C21807" stroke-width="4.5" stroke-linecap="round"/>
              <path d="M52.4727 40.8334H52.5018" stroke="#C21807" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_111_833">
                <rect width="70" height="70" fill="white"/>
              </clipPath>
            </defs>
          </svg>

          <div className='homepage__whywecard--title'>
            Принимаем заказ и связываемся с Вами
          </div>

          <div className='homepage__whywecard--content'>
            Прием заказов осуществляется с 8.00 до 17.00. Мы учтем Ваши пожелания и ответим на все вопросы о рационах
          </div>
        </div>

        <div className='homepage__whywecard'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path opacity="0.5" d="M27.692 19.3314C28.923 17.0558 30.7606 15.1657 33.0008 13.8711C35.241 12.5766 37.796 11.9281 40.3824 11.9977C42.9688 12.0673 45.4853 12.8523 47.6526 14.2655C49.8199 15.6787 51.5531 17.6648 52.66 20.0034C49.7465 20.0696 46.9153 20.9828 44.5122 22.6314C42.1092 24.2801 40.2383 26.593 39.128 29.2874C38.1048 27.5815 36.8786 26.006 35.476 24.5954C33.2222 22.383 30.5846 20.5992 27.692 19.3314ZM67.968 35.9994C68.1959 32.5856 67.2505 29.1963 65.2885 26.3934C63.3265 23.5904 60.4656 21.5419 57.18 20.5874C56.1019 17.1719 54.0297 14.1554 51.2284 11.9235C48.4271 9.69169 45.0238 8.34591 41.4537 8.0582C37.8836 7.7705 34.3088 8.55394 31.1862 10.3084C28.0636 12.0628 25.5352 14.7086 23.924 17.9074C22.3327 17.4128 20.7123 17.0174 19.072 16.7234C16.2976 16.2241 13.483 15.9818 10.664 15.9994C10.4186 16.0039 10.1732 16.0119 9.928 16.0234H9.912C9.42301 16.0529 8.96173 16.2604 8.61534 16.6068C8.26895 16.9532 8.06143 17.4145 8.032 17.9034V17.9074C7.99891 18.8045 7.99757 19.7023 8.028 20.5994C8.08 22.2354 8.252 24.5074 8.716 27.0754C9.208 29.8034 10.04 32.9314 11.456 35.9954H10C9.46957 35.9954 8.96086 36.2062 8.58579 36.5812C8.21071 36.9563 8 37.465 8 37.9954V39.9954C8 48.4824 11.3714 56.6217 17.3726 62.6229C23.3737 68.624 31.5131 71.9955 40 71.9955C48.4869 71.9955 56.6263 68.624 62.6274 62.6229C68.6286 56.6217 72 48.4824 72 39.9954V37.9954C72 37.465 71.7893 36.9563 71.4142 36.5812C71.0391 36.2062 70.5304 35.9954 70 35.9954H67.968V35.9994ZM15.936 35.9994C14.2 32.8714 13.208 29.4434 12.656 26.3674C12.2782 24.2671 12.0616 22.1409 12.008 20.0074L12.464 20.0234C13.952 20.0754 16.024 20.2354 18.36 20.6594C23.08 21.5114 28.624 23.3994 32.648 27.4234C35.112 29.8874 36.78 32.9274 37.9 35.9994H30.832L23.416 28.5834C23.23 28.3978 23.0093 28.2505 22.7665 28.1501C22.5236 28.0497 22.2634 27.9981 22.0006 27.9983C21.7378 27.9985 21.4776 28.0505 21.2349 28.1512C20.9922 28.2519 20.7717 28.3995 20.586 28.5854C20.4003 28.7714 20.2531 28.9921 20.1527 29.235C20.0523 29.4778 20.0007 29.7381 20.0009 30.0009C20.0011 30.2637 20.053 30.5238 20.1538 30.7665C20.2545 31.0093 20.402 31.2298 20.588 31.4154L25.176 35.9994H15.936ZM42.128 35.9994C42.0927 35.8912 42.0567 35.7832 42.02 35.6754C41.933 34.1664 42.1579 32.6556 42.6807 31.2373C43.2035 29.819 44.013 28.5238 45.0587 27.4323C46.1044 26.3408 47.3638 25.4765 48.7584 24.8934C50.153 24.3103 51.6528 24.0209 53.1642 24.0432C54.6756 24.0655 56.1662 24.3991 57.5429 25.0231C58.9196 25.6472 60.153 26.5482 61.166 27.6701C62.179 28.792 62.9499 30.1107 63.4307 31.5437C63.9114 32.9768 64.0916 34.4936 63.96 35.9994H42.132H42.128ZM12 39.9994H68C68 42.7794 67.596 45.4634 66.84 47.9994H13.16C12.3885 45.4029 11.9977 42.7082 12 39.9994ZM40 67.9995C34.7004 68.0005 29.5093 66.4976 25.03 63.6653C20.5508 60.833 16.9673 56.7877 14.696 51.9994H65.304C63.0327 56.7877 59.4492 60.833 54.97 63.6653C50.4907 66.4976 45.2996 68.0005 40 67.9995Z" fill="#C21807"/>
          </svg>

          <div className='homepage__whywecard--title'>
            Готовим свежую и качественную еду
          </div>

          <div className='homepage__whywecard--content'>
            Мы заботимся о наших клиентах, поэтому все наши блюда готовятся исключительно из свежих и качественных продуктов 
          </div>
        </div>

        <div className='homepage__whywecard'>
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
            <g opacity="0.5" clip-path="url(#clip0_111_846)">
              <path d="M6.25 21.875V19.5312C5.6284 19.5312 5.03226 19.7782 4.59272 20.2177C4.15318 20.6573 3.90625 21.2534 3.90625 21.875H6.25ZM40.625 21.875H42.9688C42.9688 21.2534 42.7218 20.6573 42.2823 20.2177C41.8427 19.7782 41.2466 19.5312 40.625 19.5312V21.875ZM40.625 28.125V25.7812C40.0034 25.7812 39.4073 26.0282 38.9677 26.4677C38.5282 26.9073 38.2812 27.5034 38.2812 28.125H40.625ZM6.25 24.2188H40.625V19.5312H6.25V24.2188ZM38.2812 21.875V59.375H42.9688V21.875H38.2812ZM8.59375 53.125V21.875H3.90625V53.125H8.59375ZM40.625 30.4688H56.25V25.7812H40.625V30.4688ZM66.4062 40.625V53.125H71.0938V40.625H66.4062ZM42.9688 59.375V28.125H38.2812V59.375H42.9688ZM59.0125 62.1375C58.6498 62.5003 58.2191 62.7882 57.7451 62.9845C57.2711 63.1809 56.7631 63.282 56.25 63.282C55.7369 63.282 55.2289 63.1809 54.7549 62.9845C54.2809 62.7882 53.8502 62.5003 53.4875 62.1375L50.175 65.45C51.7866 67.0616 53.9724 67.9669 56.2516 67.9669C58.5307 67.9669 60.7165 67.0616 62.3281 65.45L59.0125 62.1375ZM53.4875 56.6125C53.8502 56.2497 54.2809 55.9618 54.7549 55.7655C55.2289 55.5691 55.7369 55.468 56.25 55.468C56.7631 55.468 57.2711 55.5691 57.7451 55.7655C58.2191 55.9618 58.6498 56.2497 59.0125 56.6125L62.325 53.3C60.7134 51.6884 58.5276 50.7831 56.2484 50.7831C53.9693 50.7831 51.7835 51.6884 50.1719 53.3L53.4875 56.6125ZM21.5125 62.1375C21.1498 62.5003 20.7191 62.7882 20.2451 62.9845C19.7711 63.1809 19.2631 63.282 18.75 63.282C18.2369 63.282 17.7289 63.1809 17.2549 62.9845C16.7809 62.7882 16.3502 62.5003 15.9875 62.1375L12.675 65.45C14.2866 67.0616 16.4724 67.9669 18.7516 67.9669C21.0307 67.9669 23.2165 67.0616 24.8281 65.45L21.5125 62.1375ZM15.9875 56.6125C16.3502 56.2497 16.7809 55.9618 17.2549 55.7655C17.7289 55.5691 18.2369 55.468 18.75 55.468C19.2631 55.468 19.7711 55.5691 20.2451 55.7655C20.7191 55.9618 21.1498 56.2497 21.5125 56.6125L24.825 53.3C23.2134 51.6884 21.0276 50.7831 18.7484 50.7831C16.4693 50.7831 14.2835 51.6884 12.6719 53.3L15.9875 56.6125ZM59.0125 56.6125C59.775 57.375 60.1562 58.3719 60.1562 59.375H64.8438C64.8438 57.1781 64.0031 54.975 62.3281 53.2969L59.0125 56.6125ZM60.1562 59.375C60.1562 60.3781 59.775 61.375 59.0125 62.1375L62.3281 65.45C63.1272 64.6531 63.7579 63.7062 64.1901 62.6637C64.6224 61.6212 64.8445 60.5036 64.8438 59.375H60.1562ZM50 57.0312H40.625V61.7188H50V57.0312ZM53.4875 62.1375C53.124 61.7753 52.8357 61.3447 52.6394 60.8706C52.4431 60.3965 52.3426 59.8882 52.3438 59.375H47.6562C47.6562 61.5719 48.4969 63.775 50.1719 65.4531L53.4875 62.1375ZM52.3438 59.375C52.3438 58.3719 52.725 57.375 53.4875 56.6125L50.1719 53.3C49.3728 54.0969 48.7421 55.0438 48.3099 56.0863C47.8776 57.1288 47.6555 58.2464 47.6562 59.375H52.3438ZM15.9875 62.1375C15.624 61.7753 15.3357 61.3447 15.1394 60.8706C14.9431 60.3965 14.8426 59.8882 14.8438 59.375H10.1562C10.1562 61.5719 10.9969 63.775 12.6719 65.4531L15.9875 62.1375ZM14.8438 59.375C14.8438 58.3719 15.225 57.375 15.9875 56.6125L12.675 53.3C11.8761 54.097 11.2423 55.044 10.8101 56.0864C10.3779 57.1289 10.1557 58.2465 10.1562 59.375H14.8438ZM40.625 57.0312H25V61.7188H40.625V57.0312ZM21.5125 56.6125C22.275 57.375 22.6562 58.3719 22.6562 59.375H27.3438C27.3438 57.1781 26.5031 54.975 24.8281 53.2969L21.5125 56.6125ZM22.6562 59.375C22.6562 60.3781 22.275 61.375 21.5125 62.1375L24.825 65.45C25.6239 64.653 26.2577 63.706 26.6899 62.6636C27.1221 61.6211 27.3443 60.5035 27.3438 59.375H22.6562ZM66.4062 53.125C66.4062 55.2812 64.6562 57.0312 62.5 57.0312V61.7188C64.7792 61.7188 66.9651 60.8133 68.5767 59.2017C70.1883 57.5901 71.0938 55.4042 71.0938 53.125H66.4062ZM56.25 30.4688C58.9436 30.4688 61.5269 31.5388 63.4316 33.4434C65.3362 35.3481 66.4062 37.9314 66.4062 40.625H71.0938C71.0938 36.6882 69.5299 32.9126 66.7461 30.1289C63.9624 27.3451 60.1868 25.7812 56.25 25.7812V30.4688ZM3.90625 53.125C3.90625 55.4042 4.81166 57.5901 6.4233 59.2017C8.03494 60.8133 10.2208 61.7188 12.5 61.7188V57.0312C10.3438 57.0312 8.59375 55.2812 8.59375 53.125H3.90625Z" fill="#C21807"/>
              <path d="M23.4375 18.75C23.4375 16.2636 22.4498 13.879 20.6916 12.1209C18.9335 10.3627 16.5489 9.375 14.0625 9.375C13.2337 9.375 12.4388 9.70424 11.8528 10.2903C11.2667 10.8763 10.9375 11.6712 10.9375 12.5C10.9375 14.9864 11.9252 17.371 13.6834 19.1291C15.4415 20.8873 17.8261 21.875 20.3125 21.875H23.4375M23.4375 18.75V21.875M23.4375 18.75C23.4375 16.2636 24.4252 13.879 26.1834 12.1209C27.9415 10.3627 30.3261 9.375 32.8125 9.375C33.6413 9.375 34.4362 9.70424 35.0222 10.2903C35.6083 10.8763 35.9375 11.6712 35.9375 12.5C35.9375 14.9864 34.9498 17.371 33.1916 19.1291C31.4335 20.8873 29.0489 21.875 26.5625 21.875H23.4375" stroke="#C21807" stroke-width="4.5" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_111_846">
                <rect width="75" height="75" fill="white"/>
              </clipPath>
            </defs>
          </svg>

          <div className='homepage__whywecard--title'>
            Бережно доставляем Ваш заказ
          </div>

          <div className='homepage__whywecard--content'>
            Вы сами выбираете удобное для Вас время доставки, чтобы уже с утра Вы могли с комфортом насладиться своим рационом
          </div>
        </div>

        <div className='homepage__whywecard'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path opacity="0.5" d="M40.125 24.856C33.875 10.1872 12 11.7497 12 30.4997C12 49.2497 40.125 64.8747 40.125 64.8747C40.125 64.8747 68.25 49.2497 68.25 30.4997C68.25 11.7497 46.375 10.1872 40.125 24.856Z" stroke="#C21807" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <div className='homepage__whywecard--title'>
            Заботимся о вас и Вашем питании
          </div>

          <div className='homepage__whywecard--content'>
            Мы всегда рады обратной связи, чтобы с каждым днем становиться лучше и радовать вас наилучшими продуктами!
          </div>
        </div>

        </div>
      </section>

      <section className='homepage__delivery'>
        <h2 className='homepage__menu--title'>{homeData?.delivery_title}</h2>

        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" stroke="#C21807" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29.334 21.3333V34.6667H42.6673" stroke="#C21807" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <div className='homepage__maptext'>
        {homeData?.delivery_content}
          <br />
          <span className='homepage__maptext--red'>{homeData?.delivery_time}</span>
        </div>

        <iframe title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51316.70461027648!2d-4.880515161089349!3d36.498755678465145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72d809904dabdf%3A0xe6c9db907b5ecab!2z0JzQsNGA0LHQtdC70YzRjywg0JzQsNC70LDQs9CwLCDQhtGB0L_QsNC90ZbRjw!5e0!3m2!1suk!2sua!4v1695757805681!5m2!1suk!2sua" width="100%" height="490" loading="lazy" />
      </section>

      <section className='homepage__menu' id='faq'>
          <h2 className='homepage__menu--title'>{homeData?.faq_title}</h2>

          <Tabs
            defaultActiveKey="1"
            id="justify-tab-example"
            className="mb-3"
            fill
          >
            {homeData?.faq_tabs.map(tab => {
              return (
                <Tab key={tab.id} eventKey={tab.id} title={tab.title}>
                  <div className='homepage__accordion'>
                  {tab.questions && tab.questions.map(question => {
                    return (
                      <Accordion key={question.id} defaultActiveKey="" flush>
                        <Accordion.Item eventKey={String(question.id)}>
                          <Accordion.Header>{question.question}</Accordion.Header>
                          <Accordion.Body>
                            {question.answer}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    )
                  })}
                  </div>
                </Tab>
              )
            })}

          </Tabs>
      </section>

      <section className='homepage__formsection'>
          <div className='homepage__formsection-imagewrapper' />

          <div className='homepage__formsection-content'>
            <div className='homepage__formsection-title'>
              {homeData?.feedback_title}
            </div>
            <div>
              Все наши меню разработаны под руководством нутрициолога с 12-ти летним опытом работы <span className='red'>Камышевой Виктории.</span>
            </div>
            <div>
              Хотите получить бесплатную консультацию и узнать больше про личное сопровождение?
            </div>
            <div className='red'>
              Оставьте заявку и мы свяжемся с Вами!
            </div>
            <div>
              <button className='product-card__button-buy sp_popup_28095c1b-d2f3-45d9-8d5f-8c2149e1b539'>Оставить заявку</button>
            </div>
          </div>


        <div className='homepage__form'></div>

      </section>

      <Footer />
    </div>
  );
};
