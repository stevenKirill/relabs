import React from 'react';
import Image from 'next/image';
import tablet from '../../assets/images/tablet.webp';
import sber from '../../assets/images/SberPay.png';
import mir from '../../assets/images/mir-logo.svg';
import sbp from '../../assets/images/sbp.png';
import classes from './classes.module.css';

const Card = () => (
  <div className={classes.wrapper}>
    <div className={classes.inner}>
      <div>
        <Image src={tablet} alt="tablet" className={classes.tablet} />
      </div>
      <div className={classes.prices}>
        <span>86 956 ₽</span>
        <span className={classes.olPrice}>99 990 ₽</span>
      </div>
      <div className={classes.icons}>
        <span className={classes.currentPrice}>85 000 ₽</span>
        <Image src={mir} alt="mir" className={classes.mir} />
        <Image src={sber} alt="sber" className={classes.sber} />
        <Image src={sbp} alt="sbp" className={classes.sbp} />
      </div>
      <div>
        <span className={classes.description}>Apple / Смартфон / 6.1 / OLED</span>
      </div>
      <div className={classes.stars}>
        {[1, 2, 3, 4, 5].map(() => (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" fill="purple" /></svg>
        ))}
      </div>
      <div className={classes.other}>рассрочка 0-0-6</div>
      <div className={classes.btnWrapper}>
        <button className={classes.btn}>В корзину</button>
        <svg className={classes.heart} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" fill="purple" /></svg>
      </div>
    </div>
  </div>
);

export default Card;
