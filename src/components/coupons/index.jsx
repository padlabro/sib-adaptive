import React from 'react';
import './Coupons.scss';
import arr from './arr';

const Coupons = () => {
  const renderItems = arr.map(item => (
    <div className="coupon-shadow" key={item.id}>
      <div className="coupon-wrapper">
        <div className="coupon">
          <div className="coupon__name">
            <p className="name__title">{item.title}</p>
            <p className="name__description">{item.description}</p>
          </div>
          <div className="coupon__benefit">
            <p className="benefit__value">{item.benefit}</p>
            <p className="benefit__type">{item.benefitType}</p>
          </div>
          <img className="coupon__img" src={`../../../public/images/${item.img}.png`} />
        </div>
      </div>
    </div>
  ));

  return <div className="main__coupons">{renderItems}</div>;
};

export default Coupons;
