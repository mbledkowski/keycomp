<template lang="pug">
header
  .container
    router-link(to="/")
      img(src='/img/logo/keycomp.svg', alt='logo', height='24')
      .version alpha
    //- nav
    //-   router-link(
    //-     v-for='category in mainCategories',
    //-     :key='category.dir',
    //-     :to='category.dir'
    //-   ) {{ category.name }}
router-view
footer
  .container
    span [
      |
      |
      a(href="https://github.com/mbledkowski/keycomp")
        | GitHub
      |  ]
    span
      | [
      |
      a(href="https://github.com/mbledkowski/keycomp/blob/main/LICENSE")
        | License:
        | GPL-3.0
      |  ]
</template>
<script lang="ts">
// Category Template
class CatTemplate {
  name: string;

  dir: string;

  constructor(name: string, dir?: string) {
    this.name = name
    if (dir === undefined) {
      this.dir = `/${name}`
    } else {
      this.dir = dir
    }
  }
}
export default {
  data() {
    return {
      mainCategories: [
        new CatTemplate('switch', '/'),
        // new CatTemplate('keycap'),
        // new CatTemplate('stabilizer'),
        // new CatTemplate('oring'),
        // new CatTemplate('lube'),
        // new CatTemplate('spring'),
        // new CatTemplate('kit'),
        // new CatTemplate('pcb'),
        // new CatTemplate('case'),
        // new CatTemplate('plate'),
      ],
    }
  },
}
</script>
<style lang="scss">
:root {
  --keycomp-a: #14294B;
  --keycomp-b: #E94560;

  --foreground: black;
  --accent: red;
  --border: #c7c7c7;
  --background: white;

  --foreground-dark: white;
  --accent-dark: red; //TODO
  --border-dark: #7A7A7A;
  --background-dark: #0a0a0f;

  // --pico-spacing: clamp(4px, 0.67vw, 8px);
  // --nano-spacing: clamp(8px, 1.33vw, 16px);
  // --mili-spacing: clamp(12px, 2vw, 24px);
  // --normal-spacing: clamp(16px, 2.67vw, 32px);
  // --kilo-spacing: clamp(20px, 3.33vw, 40px);
  // --giga-spacing: clamp(28px, 4.67vw, 56px);

  --pico-spacing: clamp(6px, 0.67vw, 8px);
  --nano-spacing: clamp(12px, 1.33vw, 16px);
  --mili-spacing: clamp(18px, 2vw, 24px);
  --normal-spacing: clamp(24px, 2.67vw, 32px);
  --kilo-spacing: clamp(30px, 3.33vw, 40px);
  --giga-spacing: clamp(48px, 4.67vw, 56px);

  --font: "Barlow";

  --button: 500 clamp(12px, 1.33vw, 16px) var(--font);
  --title3-bold: 600 clamp(15px, 1.67vw, 20px) var(--font);
  --title3: normal clamp(15px, 1.67vw, 20px) var(--font);
  --title2: normal clamp(16.5px, 1.83vw, 22px) var(--font);
  --xlargetitle: normal clamp(40.5px, 4.5vw, 54px) var(--font);
}
body {
  background: var(--background);
  color: var(--foreground);
}

header {
  width: 100%;
  height: var(--giga-spacing);
  display: flex;
  flex-flow: row nowrap;
  background: white;
  // position: sticky;
  // top:0;
  z-index: 144;
  > .container {
      display: flex;
      margin: auto;
      width: 100%;
      max-width: 1920px;
    > a {
      display: flex;
      flex-flow: row nowrap;
      > img {
      margin: auto auto auto var(--mili-spacing);
      filter: invert(1);
      }
      > .version {
        position: relative;
        height: fit-content;
        top: 12px;
        left: 6px;
        color: var(--background);
        background: var(--foreground);
        padding: 0 4px;
        border-radius: 4px;
        font-size: 12px;
      }
    }
    > *:not(:last-child) {
      margin-right: auto;
    }
    > nav {
      padding: 4px;
      border: var(--accent) solid;
      border-radius: 14px;
      > ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: row nowrap;
      }
      a {
        padding: 4px 6px;
        font-size: 16px;
        font-weight: bold;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        &.router-link-exact-active {
          background: var(--accent);
        }
    }}
  }
}

footer > .container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  font: var(--button);
  > span{
    margin: var(--nano-spacing);
  }
}
@media (prefers-color-scheme: dark) {
  body {
    background: var(--background-dark);
    color: var(--foreground-dark);
  }
  header {
    background: var(--background-dark);
  > .container > a {
  > .version {
    color: var(--background-dark);
    background: var(--foreground-dark);
  }
  > img {
    filter: invert(0);
  }}}
}
</style>
