<script setup>
import { defineProps } from "vue";

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="shadow-lg w-96 h-48 p-2">{{ form }}</div>
</template>
