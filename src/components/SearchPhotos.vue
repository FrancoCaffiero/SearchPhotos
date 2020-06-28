<template>
  <div class="relative overflow-hidden mb-8 px-2">
    <div class="max-w-sm mx-auto">
      <p class="text-sm mb-2 text-gray-600">Search photos by tags</p>
      <input
        v-model="keywords"
        class="input input-border"
        placeholder="Ex. car"
      />
      <div class="p-4">
        <button class="btn btn-blue" v-on:click="searchPhotos">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPhotos",
  props: {},
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    searchPhotos() {
      this.$emit("searchPhotos", this.keywords.split(" "));
      this.keywords = "";
    },
  },
};
</script>

<style scoped>
.input {
  @apply bg-white;
}
.input:focus {
  @apply outline-none shadow-outline;
}
.input-border {
  @apply border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal;
}

.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
