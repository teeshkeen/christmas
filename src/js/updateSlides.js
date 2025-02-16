import { gifts } from './data.js';

export function updateSlides() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = '';
    gifts.forEach((i) => {
      swiperWrapper.insertAdjacentHTML('beforeend', `
          <div key=${i.id} class="swiper-slide">
            <div class="new-gifts__card">
              <div class="new-gifts__card-ellipse">
                <svg width="230" height="180" viewBox="0 0 230 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="115" cy="55" r="125" fill="#DC3845" />
                </svg>
              </div>
              <div class="new-gifts__card-image">
                <img src="${i.image}" alt="Картинка нового подарка">
              </div>
              <div class="new-gifts__card-text">
                <div class="new-gift_card-text-cost">
                  <span class="new-gifts__card-text-cost-value">${i.price}</span>
                </div>
                <div class="new-gifts_card-text-name">
                  <span class="new-gifts__card-text-name-value">${i.name}</span>
                </div>
              </div>
              <div class="new-gifts__card-like">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3.82922C9.09203 2.9943 7.90353 2.53092 6.67002 2.53088C6.01714 2.53156 5.37084 2.66135 4.76831 2.91277C4.16577 3.1642 3.61891 3.5323 3.15919 3.99588C1.19836 5.96505 1.19919 9.04505 3.16086 11.0059L9.27086 17.1159C9.41252 17.3651 9.68586 17.5259 10 17.5259C10.129 17.5246 10.2559 17.4931 10.3706 17.4339C10.4852 17.3748 10.5843 17.2895 10.66 17.1851L16.8392 11.0059C18.8009 9.04422 18.8009 5.96505 16.8375 3.99255C16.378 3.52981 15.8316 3.16246 15.2297 2.91162C14.6277 2.66078 13.9821 2.53138 13.33 2.53088C12.0965 2.53109 10.9081 2.99444 10 3.82922ZM15.6592 5.17088C16.9617 6.48005 16.9625 8.52505 15.6609 9.82755L10 15.4884L4.33919 9.82755C3.03752 8.52505 3.03836 6.48005 4.33752 5.17422C4.97086 4.54422 5.79919 4.19755 6.67002 4.19755C7.54086 4.19755 8.36586 4.54422 8.99419 5.17255L9.41086 5.58922C9.48818 5.66667 9.58002 5.72812 9.68111 5.77005C9.78221 5.81197 9.89058 5.83355 10 5.83355C10.1095 5.83355 10.2178 5.81197 10.3189 5.77005C10.42 5.72812 10.5119 5.66667 10 .58922L11.0059 5.17255C12.2659 3.91505 14.4009 3.91838 15.6592 5.17088Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        `);
    });
  }
  