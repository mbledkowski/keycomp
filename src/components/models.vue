<template lang="pug">
.widget(v-for="(group, i) in modelGroups", :key="i")
  h3 {{ group.name }}
  div(
    v-for="(model, j) in models.models.filter((e) => e.group === group.id)",
    :key="j"
  )
    p {{ model.name }}
    p(v-for="(item, k) in model.characteristic", :key="k") {{ item + '; ' }}
  p
    span(v-for="(item, j) in group.characteristic", :key="j") {{ item + '; ' }}
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    entry: Object,
    models: Object,
    modelGroups: Object
  },
  data() {
    return {};
  }
});
</script>
<style lang="scss">
</style>