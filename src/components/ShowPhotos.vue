<template>
  <div class="flex flex-wrap bg-gray-200 px-10">
    <PhotoCard
      :photo="photo"
      v-for="photo in allPhotos"
      v-bind:key="photo.id"
      v-on:selectPhoto="selectPhoto"
    />
  </div>
</template>

<script>
import Vue from "vue";
import PhotoCard from "./PhotoCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "ShowPhotos",
  components: {
    PhotoCard,
  },
  props: ["photos"],
  computed: mapGetters(["allPhotos"]),
  methods: {
    selectPhoto(photo) {
      const index = this.allPhotos.findIndex((ph) => ph.id === photo.id);
      Vue.set(this.allPhotos, index, { ...photo, selected: !photo.selected });
    },
  },
};
</script>

<style scoped></style>
