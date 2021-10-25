<template lang="pug">
article(v-if="entry[0]")
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
      p(v-if="entry[0].stem===0") MX
    div
      h3 spring
      p(v-if="entry[0].spring===0") std. Cherry
      p(v-else-if="entry[0].spring===1") low profile Cherry
    div
      h3 socket
      p(v-if="entry[0].socket===0") std. Cherry
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
      p(v-for="i in entry[0].diodeAdditional") + {{i}}
    div
      h3 lubricant
      p(v-if="entry[0].lubricated === false") no
      p(v-if="entry[0].lubricated === true") {{ entry[0].lubeName }}
    div
      h3 durability
      p(v-if="entry[0].durabilitySign === 1") > {{ entry[0].durability }} mln
      p(v-else-if="entry[0].durabilitySign === 0") = {{ entry[0].durability }} mln
    div(v-if="entry[0].release")
      h3 release
      p(v-if="entry[0].releaseAccuracy === 0") y{{ new Date(entry[0].release).getFullYear() }}
      p(v-else-if="entry[0].releaseAccuracy === 2")
        | {{ new Date(entry[0].release).getDate() }}
        | {{ monthsNames[new Date(entry[0].release).getMonth()] }}
        | {{ new Date(entry[0].release).getFullYear() }}
  #firstpart
    .widget.image(v-if="photos")
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
              p(v-if="entry[0].forceUnit === false") gf
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
              p(v-if="entry[0].forceUnit === false") gf
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
              p(v-if="entry[0].forceUnit === false") gf
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
              p(v-if="entry[0].forceUnit === false") gf
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
    div
      h2 build
      .widget
        build(
          :img="buildImage",
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
          :secondColor="secondColor"
          :foregroundColor="foregroundColor"
          :borderColor="borderColor"
        )
    .sidebar
      // TODO
      //- h2 prices
      //- .widget
      //-   table
      //-   p links might be affiliate
      //-   p more
      //- h2 price history
      //- .widget
      //-   p more
      h2 models
      modelsList(:entry="entry", :models="models", :modelGroups="modelGroups")
    // TODO
    //- #reviews
    //-   h2 reviews
    //-   //- .widget(v-for="")
    #sources
      h2 sources
      p(v-for="i in sources.name.length")
        a(v-if="sources.link[i-1] === 'DATASHEET'" target="_blank" rel="nofollow noopener" :href="entry[0].datasheets[0]") {{ sources.name[i-1] }}
        a(v-else-if="sources.link[i-1] === 'DATASHEET1'" target="_blank" rel="nofollow noopener" :href="entry[0].datasheets[1]") {{ sources.name[i-1] }}
        a(v-else-if="sources.link[i-1] === 'DATASHEET2'" target="_blank" rel="nofollow noopener" :href="entry[0].datasheets[2]") {{ sources.name[i-1] }}
        a(v-else-if="sources.link[i-1] === 'DATABASE'" target="_blank" href="/database") {{ sources.name[i-1] }}
        a(v-else target="_blank" rel="nofollow noopener" :href="sources.link[i-1]") {{ sources.name[i-1] }}
        |
        | -
        |
        | {{ sources.desc[i-1] }}
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import getElement from '@/composables/getElement'

import forceGraph from '@/components/force-graph'
import imagePrev from '@/components/image-prev'
import build from '@/components/build'
import modelsList from '@/components/models'

export default defineComponent({
  name: 'switch-info',
  setup() {
    const route = useRoute()
    const {
      entry,
      photos,
      sources,
      models,
      modelGroups,
      switchName,
      fetchSwitch,
      fetchSwitchPhotos,
      fetchSwitchSources,
      fetchSwitchModels,
    } = getElement()
    console.log(photos)
    switchName.value = route.params.switchname
    fetchSwitch().then(() => {
      document.documentElement.style.setProperty('--foreground', entry.value[0].topC[2])
      document.documentElement.style.setProperty('--accent', entry.value[0].stemC[2])
    })
    fetchSwitchPhotos()
    fetchSwitchSources()
    fetchSwitchModels()
    return {
      entry, photos, sources, models, modelGroups,
    }
  },
  components: {
    forceGraph,
    imagePrev,
    build,
    modelsList,
  },
  computed: {
    monthsNames() {
      return [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ]
    },
    buildImage() { return this.photos[0] ? this.photos.filter((i) => i.type === 1)[0].src : 'NULL' },
    secondColor() {
      let result = ''
      if (this.entry[0].topC[0] === 'black' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        result = getComputedStyle(document.documentElement).getPropertyValue('--foreground-dark')
      } else if (this.entry[0].topC[0] === 'white' && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
        result = getComputedStyle(document.documentElement).getPropertyValue('--foreground')
      } else {
        // eslint-disable-next-line prefer-destructuring
        result = this.entry[0].topC[2]
      }
      return result
    },
    foregroundColor() {
      let result = ''
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        result = getComputedStyle(document.documentElement).getPropertyValue('--foreground-dark')
      } else {
        result = getComputedStyle(document.documentElement).getPropertyValue('--foreground')
      }
      return result
    },
    borderColor() {
      let result = ''
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        result = getComputedStyle(document.documentElement).getPropertyValue('--border-dark')
      } else {
        result = getComputedStyle(document.documentElement).getPropertyValue('--border')
      }
      return result
    },

  },
})
</script>

<style lang="scss">
article {
  margin: auto;
  max-width: calc(1165px + 4*var(--kilo-spacing));
}

#firstpart,
#secondpart {
  display: grid;
  grid-gap: var(--kilo-spacing);
  margin: var(--kilo-spacing) var(--kilo-spacing) 0 var(--kilo-spacing);
}

#firstpart {
  grid-template-columns: auto minmax(min-content, max-content);
  // line below is so long for the purpouse of readability
  grid-template-rows: repeat(2, minmax(100px, calc(2*91px + 2*2px + 2*var(--nano-spacing) + var(--pico-spacing) + 1px + var(--pico-spacing) + 24px)));
  .widget.image {
    max-height: 554px;
    grid-row: 1/-1;
  }
}

#secondpart {
  grid-template-columns: 295px 435px 435px;
  div:nth-child(2) .widget{
      min-width: 399px;
  }
  .sidebar {
    grid-row: 1/5;
    width: 295px;
    .widget:not(:last-child) {
      margin-bottom: var(--nano-spacing);
      height: min-content;
      > div {
        width: fit-content;
      }
    }
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
  margin-bottom: var(--pico-spacing);
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
  // TODO uncomment when metascore is implemented
  // > h1 {
  //   margin-right: var(--giga-spacing);
  // }
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
  margin-right: 0;
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

  &.image {
    border: 2px solid var(--border);
    border-radius: var(--nano-spacing);
    overflow: hidden;
    padding: unset;
  }
  &.stats > div:nth-child(-n+2) {
      border-bottom: 1px solid var(--border);
      padding-bottom: var(--pico-spacing);
  }
  &.stats > div:nth-child(odd) {
      border-right: 1px solid var(--border);
  }
  &.stats > div:nth-child(even) {
      padding-left: var(--pico-spacing);
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

#sources {
  > p {
    font: var(--title3);
    > a {
      font: var(--title3-bold);
    }
  }
}
@media (max-width: 1326px) {
  #firstpart, #secondpart {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  #secondpart{
    > div {
      width: calc(50% - (var(--kilo-spacing)/2));
      &.sidebar{
        display: flex;
        flex-flow: row wrap;
        > h2 {
          width: 100%;
        }
        @media (min-width: 531px){
        > .widget {
          display: grid;
          width: calc(50% - (var(--kilo-spacing)/2) - (var(--nano-spacing)*2) - 4px);
          &:not(:last-child) {
            margin-right: var(--kilo-spacing);
          }
        }}
      }
      &.sidebar, &.reviews, &#sources{
        width: 100%;
      }
    }
  }
  @media(max-width: 530px){
  #secondpart > div.sidebar {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    > .widget {
      width: calc(100% - var(--nano-spacing) * 2 - 4px);
    }
  }
}
}
@media(max-width: 997px) {
  #secondpart{
    > div {
      width: 100%;
      &:nth-child(2) .widget {
        min-width: unset;
      }
    }
  }
}
</style>
