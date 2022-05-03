<template lang="pug">
.home
  tableHeader(:options="options")
  itemTable(:options="options")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import tableHeader from "@/components/table-header.vue";
import itemTable from "@/components/table.vue"; // @ is an alias to /src

export default defineComponent({
  name: "home",
  components: {
    itemTable,
    tableHeader,
  },
  data() {
    return {
      options: {
        type: [],
        mount: [],
        profile: [],
      },
    };
  },
});
</script>

<style lang="scss">
.home {
  > div,
  main {
    max-width: 1280px;
    margin: auto;
  }
}
</style>
