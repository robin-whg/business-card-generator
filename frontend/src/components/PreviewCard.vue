<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
});

const font = computed(() => {
  switch (props.form.font) {
    case "Silian Rail":
      return "font-serif";
    case "Romalian Type":
      return "font-alternative";
    case "Pale Nimbus":
      return "font-sans";
  }
});

async function generate() {
  await html2PDF(document.getElementById("card"), {
    jsPDF: {
      orientation: "landscape",
      unit: "in",
      format: [3.5, 2],
    },
    imageType: "image/jpeg",
    output: "./pdf/generate.pdf",
  });
}
</script>

<template>
  <div class="overflow-x-auto p-1">
    <h1 class="text-2xl mb-4">Preview</h1>
    <div
      id="card"
      :class="font"
      class="mb-4 pt-8 pb-4 px-6 shadow w-[32rem] h-[18rem] p-2 flex flex-col"
    >
      <div class="flex justify-between">
        <p style="font-variant-numeric: oldstyle-nums" class="text-xl">
          {{ form.phone }}
        </p>
        <div class="font-variant-caps w-36 text-justify">
          <p class="text-xl leading-none m-0 text-justify p-0 w-full">
            {{ form.company }}
          </p>
          <p class="text-xs leading-none text-justify">{{ form.slogan }}</p>
        </div>
      </div>
      <div class="flex flex-grow items-center justify-center flex-col">
        <h1 class="text-xl flex gap-1 font-variant-caps">
          <span class="font-variant-caps">{{ form.firstName }}</span>
          <span class="">{{ form.lastName.toUpperCase() }}</span>
        </h1>
        <h2 class="font-variant-caps">{{ form.title }}</h2>
      </div>
      <div>
        <p
          style="font-variant-numeric: oldstyle-nums"
          :class="[font === 'font-sans' ? 'text-[13px]' : 'text-sm']"
          class="font-variant-caps text-center"
        >
          {{ form.address }} Fax {{ form.fax }} Telex {{ form.telex }}
        </p>
      </div>
    </div>

    <div
      class="px-4 py-2 w-full flex flex-col justify-center items-center gap-4"
    >
      <button
        @click="generate()"
        class="
          w-full
          text-xl
          font-semibold
          gap-2
          flex
          items-center
          justify-center
        "
      >
        <p>Download PDF</p>
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
          class="feather feather-download"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </button>
    </div>
  </div>
</template>
