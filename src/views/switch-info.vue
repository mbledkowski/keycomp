<template lang="pug">
article
  .title
    h1(v-if="entry[0].brand.length === 1") {{ entry[0].brand[0] }} {{ entry[0].name }}
    h1(v-else) {{ entry[0].brand[0] }} x {{ entry[0].brand[1] }} {{ entry[0].name }}
    //- div
    //-   p(v-if="entry[0].metascore !== -1") {{ entry[0].metascore }}
    //-   p(v-else) --
    //-   .subvalues
    //-     p score
    //-     p /100
  #spec.row
    div
      h3 profile
      p(v-if="entry[0].profile === 1") normal
      p(v-else-if="entry[0].profile === 0") low
    div
      h3 loudness
      p(v-if="entry[0].loudness === 1") normal
      p(v-else-if="entry[0].loudness === 2") loud
      p(v-else-if="entry[0].loudness === 0") silent
    div
      h3 travel
      p(v-if="entry[0].travel === 1") tactile
      p(v-else-if="entry[0].travel === 0") linear
      p(v-else-if="entry[0].travel === 2") clicky
    div
      h3 stem
      p {{ entry[0].stem }}
    div
      h3 spring
      p {{ entry[0].spring }}
    div
      h3 socket
      p {{ entry[0].socket }}
    div
      h3 mount
      p(v-if="entry[0].mount === 1") plate
      p(v-else-if="entry[0].mount === 2") PCB
      p(v-else-if="entry[0].mount === 3") plate + PCB
    div
      h3 diode
      p(v-if="entry[0].diode === 1") no
      p(v-else-if="entry[0].diode === 2") yes
      p(v-else-if="entry[0].diode === 3") no + yes
      p(v-else-if="entry[0].diode === 7") no + yes + jumper
    div
      h3 lubricant
      p(v-if="entry[0].lubricated === false") no
      p(v-if="entry[0].lubricated === true") {{ entry[0].lubeName }}
    div
      h3 durability
      p(v-if="entry[0].durabilitySign === 1") > {{ entry[0].durability }} mln
      p(v-else-if="entry[0].durabilitySign === 0") = {{ entry[0].durability }} mln
    div
      h3 release
      p(v-if="entry[0].releaseAccuracy === 0") y{{ new Date(entry[0].release).getFullYear() }}
      p(v-else-if="entry[0].releaseAccuracy === 2") {{ new Date(entry[0].release).getDate() }} {{ monthsNames[new Date(entry[0].release).getMonth()] }} {{ new Date(entry[0].release).getFullYear() }}
  #firstpart
    .widget.image
      imagePrev(:photos="photos")
    div
      h2 force
      .widget.stats
        div
          .row(v-if="entry[0].initial !== 0 && entry[0].initial !== null")
            p.mainvalue {{ entry[0].initial }}
            .subvalues
              p(v-if="entry[0].initialA !== 0 && entry[0].initialA !== null") ± {{ entry[0].initialA }}
              p(v-else) ± --
              p(v-if="entry[0].forceUnit === 0") gf
              p(v-else) cN
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p initial
        div
          .row(v-if="entry[0].pressure !== 0 && entry[0].pressure !== null")
            p.mainvalue {{ entry[0].pressure }}
            .subvalues
              p(v-if="entry[0].pressureA !== 0 && entry[0].pressureA !== null") ± {{ entry[0].pressureA }}
              p(v-else) ± --
              p(v-if="entry[0].forceUnit === 0") gf
              p(v-else) cN
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p pressure
        div
          .row(v-if="entry[0].actuation !== 0 && entry[0].actuation !== null")
            p.mainvalue {{ entry[0].actuation }}
            .subvalues
              p(
                v-if="entry[0].actuationA !== 0 && entry[0].actuationA !== null"
              ) ± {{ entry[0].actuationA }}
              p(v-else) ± --
              p(v-if="entry[0].forceUnit === 0") gf
              p(v-else) cN
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p actuation
        div
          .row(v-if="entry[0].bottom !== 0 && entry[0].bottom !== null")
            p.mainvalue {{ entry[0].bottom }}
            .subvalues
              p(v-if="entry[0].bottomA !== 0 && entry[0].bottomA !== null") ± {{ entry[0].bottomA }}
              p(v-else) ± --
              p(v-if="entry[0].forceUnit === 0") gf
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
          .row(v-if="entry[0].peakForce !== 0 && entry[0].peakForce !== null")
            p.mainvalue {{ entry[0].peakForce / 10 }}
            .subvalues
              p(
                v-if="entry[0].peakForceA !== 0 && entry[0].peakForceA !== null"
              ) ± {{ entry[0].peakForceA / 10 }}
              p(v-else) ± --
              p mm
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p peak force
        div
          .row(v-if="entry[0].preTravel !== 0 && entry[0].preTravel !== null")
            p.mainvalue {{ entry[0].preTravel / 10 }}
            .subvalues
              p(
                v-if="entry[0].preTravelA !== 0 && entry[0].preTravelA !== null"
              ) ± {{ entry[0].preTravelA / 10 }}
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
            v-if="entry[0].totalTravel !== 0 && entry[0].totalTravel !== null"
          )
            p.mainvalue {{ entry[0].totalTravel / 10 }}
            .subvalues
              p(
                v-if="entry[0].totalTravelA !== 0 && entry[0].totalTravelA !== null"
              ) ± {{ entry[0].totalTravelA / 10 }}
              p(v-else) ± --
              p mm
          .row(v-else)
            p.mainvalue --
            .subvalues
              p ± --
              p --
          p total-travel
  #secondpart
    .sidebar
      h2 prices
      .widget
        table
        p links might be affiliate
        p more
      h2 price history
      .widget
        p more
      h2 models
      .widget(v-for="(item, index) in entry[0].groupsOfModels", :key="index")
        h3 {{ item }}
        p {{ entry[0].models[index] }}

    div
      h2 build
      .widget
        build(
          :img="photos.filter((i) => i.type === 1)[0].src",
          :topM="entry[0].topM",
          :topC="entry[0].topC",
          :stemC="entry[0].stemC",
          :stemM="entry[0].stemM",
          :contactC="entry[0].contactC",
          :contactM="entry[0].contactM",
          :springC="entry[0].springC",
          :springM="entry[0].springM",
          :bottomM="entry[0].bottomM",
          :bottomC="entry[0].bottomC"
        )
    div
      h2 force graph
      .widget
        forceGraph(
          :chartdata="entry[0].graphs",
          :firstColor="entry[0].stemC[2]",
          :secondColor="entry[0].topC[2]"
        )
    #reviews
      h2 reviews
      //- .widget(v-for="")
    #sources
      h2 sources
      p(v-for="source in entry[0].sources")
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

import forceGraph from "@/components/force-graph.vue";
import imagePrev from "@/components/image-prev.vue";
import build from "@/components/build.vue";

export default defineComponent({
  name: "switch-info",
  setup() {
    const route = useRoute();
    const {
      entry,
      error,
      photos,
      switchName,
      fetchSwitch,
      fetchSwitchPhotos
    } = getElement();
    switchName.value = route.params.switchname;
    fetchSwitch();
    fetchSwitchPhotos();
    return { entry, photos, error };
  },
  components: {
    forceGraph,
    imagePrev,
    build
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
  --border: #c7c7c7;
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

#firstpart,
#secondpart {
  display: grid;
  grid-gap: var(--kilo-spacing);
  margin: var(--kilo-spacing);
}

#firstpart {
  grid-template-columns: auto minmax(min-content, max-content);
  grid-template-rows: 242px 242px;
  .widget.image {
    grid-row: 1/-1;
  }
}

#secondpart {
  grid-template-columns: 3fr 4fr 4fr;
  .sidebar {
    grid-row: 1/5;
  }
  #reviews,
  #sources {
    grid-column: 2/-1;
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

.title,
#spec {
  justify-content: center;
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

.widget.image {
  border: 2px solid var(--border);
  border-radius: var(--nano-spacing);
  overflow: hidden;
  padding: unset;
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