<template lang="pug">
main
  #tableBar
    .name Name
    .type Type
    .mount Mount
    .weightprop Actuation
    .weightprop Bottom-out
    .distanceprop Pre-travel
    .distanceprop Total-travel
    //- .price Price
  div
    router-link.item(v-for="(item, index) in listOfSwitches", :key="item.id", :to="item.brand[0] + '-' + item.name.split(' ').join('-')" )
      .name {{ item.brand[0] }} {{ item.name }}
      .type(v-if="item.travel === 0") Linear
      .type(v-else-if="item.travel === 1") Tactile
      .type(v-else-if="item.travel === 2") Clicky
      .type(v-else)="<unknown>"
      .mount(v-if="item.mount === 1") Plate
      .mount(v-else-if="item.mount === 2") PCB
      .mount(v-else-if="item.mount === 3") PCB or Plate
      .mount(v-else)="<unknown>"
      .weightprop(v-if="item.pressure || item.actuation") {{ item.pressure > item.actuation ? item.pressure : item.actuation }} {{ item.forceUnit ? 'cN' : 'g' }}
      .weightprop(v-else) -- {{ item.forceUnit ? 'cN' : 'g' }}
      .weightprop(v-if="item.bottom") {{ item.bottom }} {{ item.forceUnit ? 'cN' : 'g' }}
      .weightprop(v-else) -- {{ item.forceUnit ? 'cN' : 'g' }}
      .distanceprop(v-if="item.preTravel") {{ item.preTravel/10 }} mm
      .distanceprop(v-else) -- mm
      .distanceprop(v-if="item.totalTravel") {{ item.totalTravel/10 }} mm
      .distanceprop(v-else) -- mm
      //- .price --
</template>

<script>
import getElement from '@/composables/getElement'

export default {
  props: {
    options: Object,
  },
  data() {
    return { items: {} }
  },
  setup() {
    const { page, fetchSwitches } = getElement()
    fetchSwitches()
    return { page }
  },
  computed: {
    listOfSwitches() {
      function type(options, element) {
        return options.type.includes(element.travel.toString())
      }
      function mount(options, element) {
        let sum = 0
        for (let i = 0; i < options.mount.length; i++) {
          sum += parseInt(options.mount[i], 10)
        }
        console.log(sum)
        return element.mount === sum || element.mount === 3
      }
      function profile(options, element) {
        return options.profile.includes(element.profile.toString())
      }
      return this.page.filter((element) => (this.options.type.length ? type(this.options, element) : true)
          && (this.options.mount.length ? mount(this.options, element) : true)
          && (this.options.profile.length ? profile(this.options, element) : true))
    },
  },
}
</script>

<!-- "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main {
  display: flex;
  flex-flow: column nowrap;
  #tableBar, .item {
    display: grid;
    grid-template-columns: 5fr repeat(2, 2fr) repeat(4, 1fr);
    div {
      border: 2px dotted lightgray;
      display: flex;
      padding: 0 10px;
      white-space: nowrap;
      overflow: hidden;
    }
    // .name {
    //   width: 40%;
    // }
    // .type {
    //   width: 16%;
    // }
    // .mount {
    //   width: 16%;
    // }
    // .weightprop,
    // .distanceprop {
    //   width: 8%;
    // }
  }
}
</style>
