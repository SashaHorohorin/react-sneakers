

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__column">
          <img src="/img/logo.png" alt="logo" className="header__logo" />
          <div className="header__text text-header">
            <div className="text-header__title">REACT SNEAKERS</div>
            <div className="text-header__subtitle">Магазин лучших кроссовок</div>
          </div>
        </div>
        <div className="header__column">
          <div className="header__cart cart-header">
            <img src="img/cart.svg" alt="cart" className="cart-header__logo" />
            <div className="cart-header__cost">1205 руб.</div>
          </div>
          <div className="header__like"><img src="/img/like.svg" alt="like" /></div>
          <div className="header__user"><img src="/img/user.svg" alt="user" /></div>
        </div>
      </header>
      <div className="content">
        <h1 className="content__title">Все кроссовки</h1>
        <div className="sneakers">
        <div className="card">
          <div className="card__like"><img src="/img/like-card.svg" alt="like" /></div>
          <img src="/img/1.jpg" alt="" className="card__img"/>
          <div className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</div>
          <div className="card__row">
            <div className="card__price price-card">
              <div className="price-card__title">Цена:</div>
              <div className="price-card__cost">12 999 руб.</div>
            </div>
            <img src="/img/plus.svg" alt="plus" className="card__plus" />
          </div>
        </div>
        <div className="card">
          <div className="card__like"><img src="/img/like-card.svg" alt="like" /></div>
          <img src="/img/2.jpg" alt="" className="card__img"/>
          <div className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</div>
          <div className="card__row">
            <div className="card__price price-card">
              <div className="price-card__title">Цена:</div>
              <div className="price-card__cost">12 999 руб.</div>
            </div>
            <img src="/img/plus.svg" alt="plus" className="card__plus" />
          </div>
        </div>
        <div className="card">
          <div className="card__like"><img src="/img/like-card.svg" alt="like" /></div>
          <img src="/img/3.jpg" alt="" className="card__img"/>
          <div className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</div>
          <div className="card__row">
            <div className="card__price price-card">
              <div className="price-card__title">Цена:</div>
              <div className="price-card__cost">12 999 руб.</div>
            </div>
            <img src="/img/plus.svg" alt="plus" className="card__plus" />
          </div>
        </div>
        <div className="card">
          <div className="card__like"><img src="/img/like-card.svg" alt="like" /></div>
          <img src="/img/4.jpg" alt="" className="card__img"/>
          <div className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</div>
          <div className="card__row">
            <div className="card__price price-card">
              <div className="price-card__title">Цена:</div>
              <div className="price-card__cost">12 999 руб.</div>
            </div>
            <img src="/img/plus.svg" alt="plus" className="card__plus" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
