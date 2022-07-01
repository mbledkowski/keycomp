<template lang="pug">
div
  //- section
  //-   p brand:
  //-   .hor-list
  //-     p Cherry
  section
    p type
    .hor-list
      input(type="checkbox" id="linear" value="0" v-model="options.type")
      label(for="linear") linear
      input(type="checkbox" id="tactile" value="1" v-model="options.type")
      label(for="tactile") tactile
      input(type="checkbox" id="clicky" value="2" v-model="options.type")
      label(for="clicky") clicky
  section
    p mount
    .hor-list
      input(type="checkbox" id="plate" value="1" v-model="options.mount")
      label(for="plate") Plate (3-pin)
      input(type="checkbox" id="pcb" value="2" v-model="options.mount")
      label(for="pcb") PCB (5-pin)
  //- section
  //-   p color:
  //-   //TODO create component with color-picker
  //-   .color-pick
  //-     p green
  //- section
  //-   p profile (bottom-out):
  //-   //- .slider
  //-   .hor-list
  //-     p 3.2mm
  //-     p 3.4mm
  //-     p 3.6mm
  //-     p 3.7mm
  //-     p 4.0mm
  section
    p profile
    .hor-list
      input(type="checkbox" id="ultralow" value="3" v-model="options.profile")
      label(for="ultralow") ultra low
      input(type="checkbox" id="low" value="0" v-model="options.profile")
      label(for="low") low
      input(type="checkbox" id="normal" value="1" v-model="options.profile")
      label(for="normal") normal
      input(type="checkbox" id="nonstandard" value="2" v-model="options.profile")
      label(for="nonstandard") non-standard
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    options: Object,
  },
});
</script>

<style scoped lang="scss">
div {
  justify-content: center;
}

p {
  font: var(--button);
  margin: 0;
}
div,
section > .hor-list {
  display: flex;
  flex-flow: row wrap;
}
section {
  margin: var(--nano-spacing);
  > .hor-list {
    > input {
      display: none;
    }
    > label {
      font: var(--title2);
      margin: 0 10px 0 0;
      user-select: none;
    }
    > input[type="checkbox"]:checked + label {
      background-image: linear-gradient(to left, var(--keycomp-b) 100%, transparent 0%);
      background-position: 0 1.04em;
      background-repeat: repeat-x;
      background-size: 8px 3px;
    }
  }
}
</style>
