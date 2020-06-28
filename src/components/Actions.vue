<template>
  <div class="flex flex-wrap bg-blue-200 px-10">
    <div class="flex w-full bg-gray-200 border rounded m-4">
      <div class="flex flex-col w-full">
        <p class="text-sm mb-2 text-gray-600 m-2">
          Photos you have selected:
        </p>
        <div class="flex flex-row bg-gray-200 m-4">
          <div
            v-for="photo in getSelectedPhotos"
            v-bind:key="photo.id"
            class="text-gray-700 bg-gray-400 px-4 py-2 m-1"
          >
            {{ photo.alt_description }}
          </div>
        </div>
        <div class="flex justify-end px-4 py-2">
          <div class="m-2">
            <button
              class="bg-blue-300 hover:bg-blue-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M7.03 2.6a3 3 0 0 1 5.94 0L15 3v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
              <span>Copy URLs to clipboard</span>
            </button>
          </div>
          <div class="m-2">
            <button
              class="bg-blue-300 hover:bg-blue-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Actions",
  components: {},
  props: "",
  computed: mapGetters(["getSelectedPhotos"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
