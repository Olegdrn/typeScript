import { renderBlock } from './lib.js'

function getUserData(): unknown {
  const user: object = JSON.parse(localStorage.getItem('user'))
  return user
}


function getFavoritesAmount(): unknown {
  const amount: object = JSON.parse(localStorage.getItem('favoritesAmount'))
  return amount
}


export function renderUserBlock(link = '/img/avatar.png') {
  const amountRender = getFavoritesAmount();
  const userRender = getUserData();

  const favoritesCaption = amountRender.favoriteItemsAmount < 1 ? 'ничего нет' : amountRender.favoriteItemsAmount
  const hasFavoriteItems: boolean = amountRender.favoriteItemsAmount ? false : true

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${link}" alt="Wade Warren" />
      <div class="info">
          <p class="${userRender.userName}">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
