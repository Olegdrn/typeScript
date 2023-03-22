import { renderBlock } from './lib.js'

export function renderUserBlock(userName: string, link: string, favoriteItemsAmount: number) {
  const favoritesCaption = favoriteItemsAmount < 1 ? 'ничего нет' : favoriteItemsAmount
  const hasFavoriteItems: boolean = favoriteItemsAmount ? false : true

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="/img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
