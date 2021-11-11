<script setup>
import { defineProps } from "vue";
import axios from "axios";

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
});

async function order() {
  // await axios.post("/api/order", json, {
  //   headers: {
  //     // Overwrite Axios's automatically set Content-Type
  //     "Content-Type": "application/json",
  //   },
  // });
  const request = new Request("http://localhost:3000/api/order", {
    method: "POST",
    body: '{"foo": "bar"}',
  });
  const bla = await fetch(request);
  console.log(bla);
}
</script>
<template>
  <div
    class="
      px-4
      py-2
      w-full
      sm:w-64
      flex flex-col
      justify-center
      items-center
      gap-4
    "
  >
    <button
      @click="order()"
      class="
        w-full
        px-4
        py-2
        bg-black
        text-white text-xl
        font-semibold
        gap-2
        flex
        items-center
        justify-center
      "
    >
      <p>Purchase</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-check-circle"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    </button>
  </div>
</template>
