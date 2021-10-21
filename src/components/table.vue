<template lang="pug">
main
  #tableBar
    //- .image 🖼
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
      //- .image
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
  #tableBar {
    font: var(--button);
    text-transform: lowercase;
    border-radius: var(--pico-spacing);
    padding: var(--pico-spacing);
    background: var(--keycomp-a);
    margin-bottom: var(--nano-spacing);
  }
  .item{
    font: var(--button);
    border-radius: 4px;
    padding: 0 var(--pico-spacing) 0 calc(var(--pico-spacing) - 4px);
    border-left: 4px transparent solid;
    &:hover{
      border-left: 4px var(--keycomp-b) solid;
    }
    &:focus{
      border-left: 4px var(--keycomp-b) solid;
      background: rgba(255,255,255,.1);
    }
  }

  #tableBar, .item {
    display: grid;
    grid-template-columns: /*minmax(36px, 52px)*/ 7fr repeat(2, 3fr) repeat(4, 2fr);
    margin-left: var(--pico-spacing);
    margin-right: var(--pico-spacing);
    div {
      display: flex;
      padding: 0 10px;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .item div:not(:last-child){
    border-right: 2px var(--border) solid;
  }
  #tableBar div{
    color: var(--foreground-dark);
    &:not(:last-child){
    border-right: 2px var(--border-dark) solid;
  }}
}
@media (prefers-color-scheme: dark) {
  main {
    .item div:not(:last-child){
      border-right: 2px var(--border-dark) solid;
    }
  }
}
</style>
