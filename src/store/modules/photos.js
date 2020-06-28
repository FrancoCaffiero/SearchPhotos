import axios from "axios";

const state = {
  photos: [],
};

const getters = {
  allPhotos: (state) => state.photos,
  getSelectedPhotos: (state) => state.photos.filter((photo) => photo.selected),
};

const actions = {
  async fetchPhotosFilteredByKeywords({ commit }, keywords) {
    const base = "https://api.unsplash.com/search/photos";
    const page = "page=1";
    const per_page = "per_page=10";
    const query = `query=${keywords.join("%20")}`;
    const client = "client_id=M4h2fLH0CUHf2ifsx3jUJEgPuUff1nO4sgnVlkPJf84";
    const and = "&";

    const url = base + "?" + page + and + per_page + and + query + and + client;

    const response = await axios.get(url);

    commit("setPhotos", response.data.results);
  },
};

const mutations = {
  setPhotos: (state, photos) => (state.photos = photos),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
