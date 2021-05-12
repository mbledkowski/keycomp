<template lang="pug">
main
  #tableHeader
    .name Name
    .type Type
    .mount Mount
    .weightprop Actuation
    .weightprop Bottom-out
    .distanceprop Pre-travel
    .distanceprop Total-travel
  div
    .item(v-for="(item, index) in entries", :key="item.id")
      .name {{ item.brand[0] }} {{ item.name }}
      .type(v-if="item.type === 0") Linear
      .type(v-if="item.type === 1") Tactile
      .type(v-if="item.type === 2") Clicky
      .mount(v-if="item.mount === 0") Plate
      .mount(v-if="item.mount === 1") PCB
      .mount(v-if="item.mount === 2") PCB or Plate
      .weightprop {{ item.force.pressure[0] > item.force.actuation[0] ? item.force.pressure[0] : item.force.actuation[0] }} {{ item.force.unit ? 'cN' : 'g' }}
      .weightprop {{ item.force.actuation[0] }} {{ item.force.unit ? 'cN' : 'g' }}
      .distanceprop {{ item.travel.actuation[0] }} mm
      .distanceprop {{ item.travel.total[0] }} mm
</template>

<script>
import getElements from "@/composables/getElements";
export default {
  data() {
    return { items: {} };
  },
  setup() {
    const { entries, error, load } = getElements();
    load();
    console.log(entries);
    return { entries, error };
  }
};
</script>

<!-- "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main {
  display: flex;
  flex-flow: column nowrap;
  #tableHeader,
  .item {
    display: flex;
    flex-flow: row nowrap;
    div {
      border: 2px dotted lightgray;
      display: flex;
      padding: 0 10px;
    }
    .name {
      width: 40%;
    }
    .type {
      width: 16%;
    }
    .mount {
      width: 16%;
    }
    .weightprop,
    .distanceprop {
      width: 8%;
    }
  }
}
</style>
