<template lang="pug">
article
  div
    h1(v-if="entries[0].brand.length === 1") {{ entries[0].brand[0] }} {{ entries[0].name }}
    h1(v-else) {{ entries[0].brand[0] }} x {{ entries[0].brand[1] }} {{ entries[0].name }}
    div
      p(v-if="entries[0].metascore !== -1") {{ entries[0].metascore }}
      p(v-else) --
      div
        p score
        p /100
  div
    div
      h3 profile
      p(v-if="entries[0].profile === 1") normal
      p(v-else-if="entries[0].profile === 0") low
    div
      h3 loudness
      p(v-if="entries[0].loudness.value === 1") normal
      p(v-else-if="entries[0].loudness.value === 2") loud
      p(v-else-if="entries[0].loudness.value === 0") silent
    div
      h3 travel
      p(v-if="entries[0].loudness.value === 1") tactile
      p(v-else-if="entries[0].loudness.value === 0") linear
      p(v-else-if="entries[0].loudness.value === 2") clicky
    div
      h3 stem
      p {{ entries[0].stem }}
    div
      h3 spring
      p {{ entries[0].spring }}
    div
      h3 socket
      p {{ entries[0].socket }}
    div
      h3 mount
      p(v-if="entries[0].mount === 1") plate
      p(v-else-if="entries[0].mount === 2") PCB
      p(v-else-if="entries[0].mount === 3") plate + PCB
    div
      h3 diode
      p(v-if="entries[0].diode.basic === 1") no
      p(v-else-if="entries[0].diode.basic === 2") yes
      p(v-else-if="entries[0].diode.basic === 3") no + yes
      p(v-else-if="entries[0].diode.basic === 7") no + yes + jumper
    div
      h3 lubricant
      p(v-if="entries[0].lubricated.value === 0") no
      p(v-if="entries[0].lubricated.value === 1") {{ entries[0].lubricated.lubricant }}
    div
      h3 durability
      p(v-if="entries[0].durability[0] === 1") > {{ entries[0].durability[1] }} mln
      p(v-else-if="entries[0].loudness.value === 0") linear
    div
      h3 release
      p(v-if="entries[0].release.accuracy === 0") y{{ new Date(entries[0].release.date.seconds * 1000).getFullYear() }}
      p(v-else) {{ new Date(entries[0].release.date.seconds * 1000) }}
  div
    div
      .widget-border
        img(v-bind:src="entries[0].photos.cover[0].img")
    div
      h2 force
      .widget
        div
          div(v-if="entries[0].force.init[0] !== 0")
            p {{ entries[0].force.init[0] }}
            div
              p(v-if="entries[0].force.init[1] !== 0") ± {{ entries[0].force.init[1] }}
              p(v-else) ± --
              p(v-if="entries[0].force.unit === 0") gf
              p(v-else) cN
          div(v-else)
            p --
            div
              p ± --
              p --
          p initial
        div
          div(v-if="entries[0].force.pressure[0] !== 0")
            p {{ entries[0].force.pressure[0] }}
            div
              p(v-if="entries[0].force.pressure[1] !== 0") ± {{ entries[0].force.pressure[1] }}
              p(v-else) ± --
              p(v-if="entries[0].force.unit === 0") gf
              p(v-else) cN
          div(v-else)
            p --
            div
              p ± --
              p --
          p pressure
        div
          div(v-if="entries[0].force.actuation[0] !== 0")
            p {{ entries[0].force.actuation[0] }}
            div
              p(v-if="entries[0].force.actuation[1] !== 0") ± {{ entries[0].force.actuation[1] }}
              p(v-else) ± --
              p(v-if="entries[0].force.unit === 0") gf
              p(v-else) cN
          div(v-else)
            p --
            div
              p ± --
              p --
          p actuation
        div
          div(v-if="entries[0].force.bottom[0] !== 0")
            p {{ entries[0].force.bottom[0] }}
            div
              p(v-if="entries[0].force.bottom[1] !== 0") ± {{ entries[0].force.bottom[1] }}
              p(v-else) ± --
              p(v-if="entries[0].force.unit === 0") gf
              p(v-else) cN
          div(v-else)
            p --
            div
              p ± --
              p --
          p bottom
    div
      h2 travel
      .widget
        div
        div
          div(v-if="entries[0].travel.peak[0] !== 0")
            p {{ entries[0].travel.peak[0] }}
            div
              p(v-if="entries[0].travel.peak[1] !== 0") ± {{ entries[0].travel.peak[1] }}
              p(v-else) ± --
              p mm
          div(v-else)
            p --
            div
              p ± --
              p --
          p peak force
        div
          div(v-if="entries[0].travel.actuation[0] !== 0")
            p {{ entries[0].travel.actuation[0] }}
            div
              p(v-if="entries[0].travel.actuation[1] !== 0") ± {{ entries[0].travel.actuation[1] }}
              p(v-else) ± --
              p mm
          div(v-else)
            p --
            div
              p ± --
              p --
          p pre-travel
        div
          div(v-if="entries[0].travel.total[0] !== 0")
            p {{ entries[0].travel.total[0] }}
            div
              p(v-if="entries[0].travel.total[1] !== 0") ± {{ entries[0].travel.total[1] }}
              p(v-else) ± --
              p mm
          div(v-else)
            p --
            div
              p ± --
              p --
          p total-travel
    div
      h2 prices
      .widget
        table
        p links might be affiliate
        p more
      h2 price history
      .widget
        p more
      h2 models
      .widget(v-for="cat in entries[0].categories", :key="cat.name")
        h3 {{ cat.name }}
        ul(v-for="model in cat.models")
          li {{ model.model }}
            p
              span(v-for="(value, param) in model.params") {{ param }}: {{ value }};!{' '}

    div
      h2 build
      .widget
    div
      h2 force graph
      .widget
        .legend
          p.primary pressure
          p.secondary reset
    div
      h2 reviews
      //- .widget(v-for="")
    div
      h2 sources
      //- p(v-for="")
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
:root {
  --foreground: black;
  --accent: red; //TODO
  --border: gray;
  --background: white;

  --pico-spacing: 8px;
  --nano-spacing: 16px;
  --mili-spacing: 24px;
  --normal-spacing: 32px;
  --giga-spacing: 40px;
  --tera-spacing: 56px;
}
body {
  background: var(--background);
  color: var(--foreground);
}
.widget {
  border: 2px solid var(--border);
  border-radius: var(--nano-spacing);
  padding: var(--nano-spacing);
}

.widget-border {
  border: 2px solid var(--border);
  border-radius: var(--nano-spacing);
  img {
    border-radius: var(--nano-spacing);
  }
}

.legend {
  p.primary:before {
  } //TODO
}
</style>