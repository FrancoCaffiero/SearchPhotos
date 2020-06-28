<template>
  <div class="lg:w-1/5 w-full py-2 px-4">
    <div
      class="bg-white border rounded-lg overflow-hidden hover:bg-blue-500 active:bg-blue-700"
    >
      <div class="relative h-48">
        <img
          class="absolute h-full w-full object-cover"
          :src="photo.urls.thumb"
          :alt="photo.alt_description"
          v-on:click="selectPhoto(photo)"
        />
      </div>
      <div
        class="text-gray-600 text-xs uppercase font-semibold tracking-wide p-4"
      >
        {{ photo.alt_description }}
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoCard",
  props: ["photo"],
  methods: {
    selectPhoto(photo) {
      this.$emit("sselectPhoto", photo);
    },
  },
};
</script>
