export interface SearchFormData {
  checkin: string,
  checkout: string,
  price: string
}

const searchForm: unknown = document.getElementById('searchForm');


export function search(entity: SearchFormData): void {
  searchForm.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstDate = formData.get(entity.checkin);
    const secondDate = formData.get(entity.checkout);
    const price = formData.get(entity.price);
    console.log(`Дата заезда: ${firstDate}, дата выезда:${secondDate}, цена: ${price}`)
  }
}

