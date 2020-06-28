<template>
  <div id="app">
    <SearchPhotos v-on:searchPhotos="getPhotosByKeywords" />
    <Actions />
    <ShowPhotos v-bind:photos="photos" />
  </div>
</template>

<script>
import SearchPhotos from "./components/SearchPhotos.vue";
import ShowPhotos from "./components/ShowPhotos.vue";
import Actions from "./components/Actions.vue";
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    SearchPhotos,
    ShowPhotos,
    Actions,
  },
  data() {
    return { photos: [] };
  },
  methods: {
    ...mapActions(["fetchPhotosFilteredByKeywords"]),

    getPhotosByKeywords(keywords) {
      this.fetchPhotosFilteredByKeywords(keywords);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
