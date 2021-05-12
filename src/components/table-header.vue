<template lang="pug">
div
  section
    p type:
    .hor-list
      p clicky
      p linear
      p tactile
  section
    p mount:
    .hor-list
      p PCB (5-pin)
      p Plate (3-pin)
  section
    p color:
    //TODO create component with color-picker
    .color-pick
      p green
  section
    p profile (bottom-out):
    .slider
      p 2,5mm 4,0mm
</template>

<script lang="ts">
export default ({
  props: {
    msg: String
  }
});
</script>

<style scoped lang="scss">
p {
  font-size: 16px;
  margin: 0;
}
div,
section > .hor-list {
  display: flex;
  flex-flow: row wrap;
}
section {
  margin: 10px;
  > .hor-list > p {
    font-size: 20px;
    margin: 0 10px 0 0;
  }
}
</style>
