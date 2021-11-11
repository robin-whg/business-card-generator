<script setup>
import { reactive } from "vue";
import TheNavbar from "./components/TheNavbar.vue";
import PreviewCard from "./components/PreviewCard.vue";
// import OrderSection from "./components/OrderSection.vue";

const form = reactive({
  color: "Bone",
  font: "Silian Rail",
  firstName: "Patrick",
  lastName: "Bateman",
  title: "Vice President",
  phone: "212 555 6342",
  company: "Pierce &Pierce",
  slogan: "Mergers and Aquisitions",
  address: "358 Exchange Place New York, N.Y. 10099",
  fax: "212 55 6390",
  telex: "10 4534",
});
</script>

<template>
  <div class="font-serif">
    <the-navbar></the-navbar>
    <div
      class="container px-4 mx-auto my-16 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <div class="flex justify-center flex-col">
        <form
          @submit.prevent="submit()"
          class="flex flex-col gap-4 w-full sm:w-[32rem]"
        >
          <div class="flex flex-col">
            <label for="first-name" class="font-semibold">Vorname</label>
            <input type="text" id="first-name" v-model="form.firstName" />
          </div>

          <div class="flex flex-col">
            <label for="last-name" class="font-semibold">Nachname</label>
            <input type="text" id="last-name" v-model="form.lastName" />
          </div>

          <div class="flex flex-col">
            <label for="color" class="font-semibold">Farbe</label>
            <select
              v-model="form.color"
              name="color"
              id="color"
              class="p-1 w-full"
            >
              <option value="Bone">Bone</option>
              <option value="Eggshell">Eggshell</option>
              <option value="White">White</option>
              <option value="Subtle Off-White">Subtle Off-White</option>
            </select>
          </div>

          <div class="flex flex-col">
            <label for="color" class="font-semibold">Schriftart</label>
            <select
              v-model="form.font"
              name="color"
              id="color"
              class="p-1 w-full"
            >
              <option value="Silian Rail">Silian Rail</option>
              <option value="Romalian Type">Romalian Type</option>
              <option value="Pale Nimbus">Pale Nimbus</option>
            </select>
          </div>

          <div class="flex items-center gap-2">
            <input type="checkbox" name="" id="" class="" />
            <label for="tasteful-thickness" class="font-semibold"
              >Tastefull Thickness</label
            >
          </div>

          <div class="flex items-center gap-2">
            <input type="checkbox" name="watermark" id="watermark" class="" />
            <label for="watermark" class="font-semibold">Watermark</label>
          </div>

          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              name="raised-lettering"
              id="raised-lettering"
              class=""
            />
            <label for="raised-lettering" class="font-semibold"
              >Raised Lettering</label
            >
          </div>
        </form>
      </div>
      <div class="flex justify-center">
        <preview-card :form="form"></preview-card>
      </div>
      <div class="my-8 sm:col-span-2 flex flex-col justify-center items-center">
        <!-- <order-section :form="form"></order-section> -->
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
input[type="text"] {
  @apply py-1 px-1 border-0 border-b border-black text-xl focus:ring-0 focus:border-red-500;
}

input[type="checkbox"] {
  @apply border-black border-2 text-black focus:border-black focus:ring-black;
}

select {
  @apply py-1 px-0 border-0 border-b border-black text-xl focus:ring-0 focus:border-red-500;
}
</style>
