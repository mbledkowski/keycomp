<template lang="pug">
article
  .title
    h1(v-if="entries[0].brand.length === 1") {{ entries[0].brand[0] }} {{ entries[0].name }}
    h1(v-else) {{ entries[0].brand[0] }} x {{ entries[0].brand[1] }} {{ entries[0].name }}
    //- div
    //-   p(v-if="entries[0].metascore !== -1") {{ entries[0].metascore }}
    //-   p(v-else) --
    //-   .subvalues
    //-     p score
    //-     p /100
  #spec.row
    div
      h3 profile
      p(v-if="entries[0].profile === 1") normal
      p(v-else-if="entries[0].profile === 0") low
    div
      h3 loudness
      p(v-if="entries[0].loudness === 1") normal
      p(v-else-if="entries[0].loudness === 2") loud
      p(v-else-if="entries[0].loudness === 0") silent
    div
      h3 travel
      p(v-if="entries[0].travel === 1") tactile
      p(v-else-if="entries[0].travel === 0") linear
      p(v-else-if="entries[0].travel === 2") clicky
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
      p(v-if="entries[0].diode === 1") no
      p(v-else-if="entries[0].diode === 2") yes
      p(v-else-if="entries[0].diode === 3") no + yes
      p(v-else-if="entries[0].diode === 7") no + yes + jumper
    div
      h3 lubricant
      p(v-if="entries[0].lubricated === false") no
      p(v-if="entries[0].lubricated === true") {{ entries[0].lubeName }}
    div
      h3 durability
      p(v-if="entries[0].durabilitySign === 1") > {{ entries[0].durability }} mln
      p(v-else-if="entries[0].durabilitySign === 0") = {{ entries[0].durability }} mln
    div
      h3 release
      p(v-if="entries[0].releaseAccuracy === 0") y{{ new Date(entries[0].release).getFullYear() }}
      p(v-else-if="entries[0].releaseAccuracy === 2") {{ new Date(entries[0].release).getDate() }} {{ monthsNames[new Date(entries[0].release).getMonth()] }} {{ new Date(entries[0].release).getFullYear() }}
  #firstpart
    .widget-image
      //- img(
      //-   src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9000531-NA_RF-MX1A-M1NN_RED.png"
      //- )
    div
      h2 force
      .widget.stats
        div
          .row(v-if="entries[0].initial !== 0 && entries[0].initial !== null")
            p.mainvalue {{ entries[0].initial }}
            .subvalues
              p(
                v-if="entries[0].initialA !== 0 && entries[0].initialA !== null"
              ) ± {{ entries[0].initialA }}
              p(v-else) ± --
              p(v-if="entries[0].forceUnit === 0") gf
              p(v-else) cN
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p initial
        div
          .row(
            v-if="entries[0].pressure !== 0 && entries[0].pressure !== null"
          )
            p.mainvalue {{ entries[0].pressure }}
            .subvalues
              p(
                v-if="entries[0].pressureA !== 0 && entries[0].pressureA !== null"
              ) ± {{ entries[0].pressureA }}
              p(v-else) ± --
              p(v-if="entries[0].forceUnit === 0") gf
              p(v-else) cN
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p pressure
        div
          .row(
            v-if="entries[0].actuation !== 0 && entries[0].actuation !== null"
          )
            p.mainvalue {{ entries[0].actuation }}
            .subvalues
              p(
                v-if="entries[0].actuationA !== 0 && entries[0].actuationA !== null"
              ) ± {{ entries[0].actuationA }}
              p(v-else) ± --
              p(v-if="entries[0].forceUnit === 0") gf
              p(v-else) cN
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p actuation
        div
          .row(v-if="entries[0].bottom !== 0 && entries[0].bottom !== null")
            p.mainvalue {{ entries[0].bottom }}
            .subvalues
              p(v-if="entries[0].bottomA !== 0 && entries[0].bottomA !== null") ± {{ entries[0].bottomA }}
              p(v-else) ± --
              p(v-if="entries[0].forceUnit === 0") gf
              p(v-else) cN
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p bottom
    div
      h2 travel
      .widget.stats
        div
        div
          .row(
            v-if="entries[0].peakForce !== 0 && entries[0].peakForce !== null"
          )
            p.mainvalue {{ entries[0].peakForce / 10 }}
            .subvalues
              p(
                v-if="entries[0].peakForceA !== 0 && entries[0].peakForceA !== null"
              ) ± {{ entries[0].peakForceA / 10 }}
              p(v-else) ± --
              p mm
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p peak force
        div
          .row(
            v-if="entries[0].preTravel !== 0 && entries[0].preTravel !== null"
          )
            p.mainvalue {{ entries[0].preTravel / 10 }}
            .subvalues
              p(
                v-if="entries[0].preTravelA !== 0 && entries[0].preTravelA !== null"
              ) ± {{ entries[0].preTravelA / 10 }}
              p(v-else) ± --
              p mm
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p pre-travel
        div
          .row(
            v-if="entries[0].totalTravel !== 0 && entries[0].totalTravel !== null"
          )
            p.mainvalue {{ entries[0].totalTravel / 10 }}
            .subvalues
              p(
                v-if="entries[0].totalTravelA !== 0 && entries[0].totalTravelA !== null"
              ) ± {{ entries[0].totalTravelA / 10 }}
              p(v-else) ± --
              p mm
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p total-travel
  #secondpart
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
      .widget(v-for="(item, index) in entries[0].groupsOfModels", :key="index")
        h3 {{ item }}
        pre {{ entries[0].models[index] }}

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
    #sources
      h2 sources
      p(v-for="source in entries[0].sources")
        a(:href="source.link") {{ source.name }}
        |
        | -
        |
        | {{ source.desc }}
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
  },
  data() {
    return {
      monthsNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ]
    };
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
  --kilo-spacing: 40px;
  --giga-spacing: 56px;

  --font: "Barlow";

  --button: 500 16px var(--font);
  --title3-bold: 600 20px var(--font);
  --title3: normal 20px var(--font);
  --title2: normal 22px var(--font);
  --xlargetitle: normal 54px var(--font);
}
body {
  background: var(--background);
  color: var(--foreground);
}

#firstpart {
  display: grid;
  grid-gap: var(--kilo-spacing);
  grid-template-columns: auto minmax(min-content, max-content);
  grid-template-rows: 242px 242px;
  .widget-image {
    grid-row: 1/-1;
  }
}

h1,
h2,
h3,
p {
  margin: unset;
  font-size: unset;
}

h2,
h3 {
  font: var(--title3-bold);
}

a {
  color: unset;
  text-decoration: none;
  &:hover {
    text-decoration: underline 2px;
  }
}

.title {
  font: var(--xlargetitle);
  display: flex;
  flex-flow: row wrap;
  margin-bottom: var(--kilo-spacing);
  > h1 {
    margin-right: var(--giga-spacing);
  }
  > div {
    display: flex;
    flex-flow: row nowrap;
    > p {
      margin-right: var(--pico-spacing);
    }
  }
}

.subvalues {
  font: var(--title3);
  margin: var(--pico-spacing);
  p:first-child {
    margin-bottom: 1px;
  }
}

#spec {
  > div {
    margin: 0 var(--normal-spacing) var(--nano-spacing) 0;
    max-width: 120px;
    max-height: 52px;
    h3 {
      margin-bottom: calc(var(--pico-spacing) / 2);
    }
    p {
      font: var(--title2);
    }
  }
  margin: 0 0 calc(var(--kilo-spacing) - var(--nano-spacing))
    var(--normal-spacing);
}

.widget {
  border: 2px solid var(--border);
  border-radius: var(--nano-spacing);
  padding: var(--nano-spacing);
}

.widget-image {
  border: 2px solid var(--border);
  border-radius: var(--nano-spacing);
  img {
    border-radius: var(--nano-spacing);
  }
}

.row {
  display: flex;
  flex-flow: row wrap;
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 262px;
  > div {
    > div > p.mainvalue {
      font: var(--xlargetitle);
    }
    > p {
      font: var(--title2);
    }
  }
}

.legend {
  p.primary:before {
  } //TODO
}

#sources {
  > p {
    font: var(--title3);
    > a {
      font: var(--title3-bold);
    }
  }
}
</style>