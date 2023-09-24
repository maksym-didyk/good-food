import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard/ProductCard';
import imgAboutUs from './assets/images/about-us.png'
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <section className='App__hero' id='hero'>

        <Header />

        <div className='App__hero-section'>
          <div className='App__hero--title'>
            Правильное питание без усилий у Вас дома
          </div>

          <div className='App__hero--text'>
            Вас приветствует GoodFood — сервис правильного питания на каждый день.
          </div>

          <button className='header__button'>Заказать</button>
        </div>

      </section>

      <section className='App__menu' id='menu'>
        
        <h2 className='App__menu--title'>Рационы питания</h2>

        <div className='App__products'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <section className='App__aboutus' id='about-us'>
        <div className='App__aboutus--content'>
          <div className='App__aboutus--left'>
            <div className='App__aboutus--title'>
              О нас
            </div>

            <div className='App__aboutus--text'>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es.
            </div>

            <ul className='App__aboutus--list'>
              <li className='App__aboutus--li'>
                Modern and intuitive  food
              </li>
              <li className='App__aboutus--li'>
                Full customizable goods
              </li>
              <li className='App__aboutus--li'>
                Detailed layouts & elements
              </li>
              <li className='App__aboutus--li'>
                Design pattern best practice
              </li>
            </ul>
          </div>

          <div className='App__aboutus--right'>
            <img src={imgAboutUs} alt='' className='App__aboutus--image'/>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}

export default App;
