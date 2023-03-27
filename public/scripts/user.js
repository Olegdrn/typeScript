import { renderBlock } from './lib.js';
export function renderUserBlock(userName, link = '/img/avatar.png', favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount < 1 ? 'ничего нет' : favoriteItemsAmount;
    const hasFavoriteItems = favoriteItemsAmount ? false : true;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${link}" alt="Wade Warren" />
      <div class="info">
          <p class="${userName}">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
