const API_KEY = '23935285-7259499af9fe05c3ca983c7fa';
const BASE_URL = 'https://pixabay.com/api/';

export default class ApiImagesService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async onFetchImages() {
    const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.searchQuery,
      page: this.page,
      per_page: 12,
      key: API_KEY,
    });

    const url = `${BASE_URL}?${searchParams}`;

    return await fetch(url).then(response => {
      this.incrementPage();
      return response.json();
    });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
