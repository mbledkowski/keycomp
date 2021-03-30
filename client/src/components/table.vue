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
    .item(v-for="(item, index) in items", :key="index")
      .name {{ item.name }}
      .type(v-if="item.type === 0") Clicky
      .type(v-if="item.type === 1") Tactile
      .type(v-if="item.type === 2") Linear
      .mount(v-if="item.mount === 0") PCB or Plate
      .mount(v-if="item.mount === 1") PCB
      .mount(v-if="item.mount === 2") Plate
      .weightprop {{ item.actuation / 100 }} g
      .weightprop {{ item['bottom-out'] / 100 }} g
      .distanceprop {{ item['pre-travel'] / 1000 }} mm
      .distanceprop {{ item['total-travel'] / 1000 }} mm
</template>

<script>
export default {
  data() {
    return { items: {} };
  },
  methods: {
    fetchItems() {
      fetch("http://localhost:2137/switch/a/a")
        .then(res => res.json())
        .then(this.setResult);
    },
    setResult(result) {
      this.items = result;
      console.log(this.items);
    }
  },
  beforeMount() {
    this.fetchItems();
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
      width: 20%;
    }
    .type {
      width: 4%;
    }
    .mount {
      width: 8%;
    }
    .weightprop,
    .distanceprop {
      width: 17%;
    }
  }
}
</style>
