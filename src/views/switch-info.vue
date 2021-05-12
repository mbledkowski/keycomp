<template lang="pug">
article
  p {{ entries[0].brand[0] }} {{ entries[0].name }}
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import getElement from "@/composables/getElement";
export default defineComponent({
  name: "switch-info",
  setup() {
    const route = useRoute();
    const { entries, error, load } = getElement();
    load(route.params.switchname);
    console.log(entries);
    return { entries, error };
  }
});
</script>

<style lang="scss">
</style>