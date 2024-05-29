import Swiper from 'swiper';
import 'swiper/css/swiper.css';
require('../scss/_styles.scss');

function appSwiper(moduleID: string, autoplay: string, speed: string, effectDefaults: any, fallback: any) {
  var configured = {
    autoplay: (autoplay === 'True'),
    speed: speed
  };
  var merged = Object.assign(fallback, effectDefaults, configured);
  var mySwiper = new Swiper (`.swiper-${moduleID}`, merged);
}

(window as any).appSwiperInit = appSwiper