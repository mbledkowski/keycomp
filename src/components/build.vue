<template lang="pug">
#build
  img#buildImage(:src="img")
  #buildProps
    .buildProp
      .line
      p.name top
      p.material {{ topM[0] }}
      p.color {{ topM[1] }} {{ topC[0] }} ({{ topC[1] }})
    .buildProp
      .line
      p.name stem
      p.material {{ stemM[0] }}
      p.color {{ stemM[1] }} {{ stemC[0] }} ({{ stemC[1] }})
    .buildProp
      .line
      p.name leaf
      p.material {{ contactM[0] }}
      p.color {{ contactM[1] }} {{ contactC[0] }}
    .buildProp
      .line
      p.name spring
      p.material {{ springM[0] }}
      p.color {{ springM[1] }} {{ springC[0] }}
    .buildProp
      .line
      p.name bottom
      p.material {{ bottomM[0] }}
      p.color {{ bottomM[1] }} {{ bottomC[0] }} ({{ bottomC[1] }})
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    img: String,
    topM: Array,
    topC: Array,
    stemC: Array,
    stemM: Array,
    contactC: Array,
    contactM: Array,
    springC: Array,
    springM: Array,
    bottomM: Array,
    bottomC: Array
  }
});
</script>

<style lang="scss">
img#buildImage {
  height: 316px;
}
#build {
  display: flex;
  flex-flow: row nowrap;
  & > #buildProps {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-flow: column nowrap;
    & > .buildProp {
      display: grid;
      grid-template-columns: 1fr 140px;
      & > p.name {
        font: var(--button);
        align-self: center;
        grid-column: 1;
        grid-row: 1;
        margin: auto 32px 0 auto;
      }
      & > .line {
        height: 2px;
        background: var(--border);
        grid-column: 1;
        grid-row: 2/4;
        margin: auto 10px auto auto;
        width: 100px;
      }
      & > p.material {
        font: var(--title2);
        overflow: hidden;
        text-overflow: ellipsis;
        grid-column: 2;
        grid-row: 1/3;
      }
      & > p.color {
        font: var(--title3);
        overflow: hidden;
        text-overflow: ellipsis;
        grid-column: 2;
        grid-row: 3/5;
      }
    }
  }
}
</style>