<template lang="pug">
header
  .container
    a(href="/")
      img(src='/img/logo/keycomp.svg', alt='logo', height='24')
      .version alpha
    //- nav
    //-   router-link(
    //-     v-for='category in mainCategories',
    //-     :key='category.dir',
    //-     :to='category.dir'
    //-   ) {{ category.name }}
router-view
</template>
<script lang="ts">
class CatTemplate {
  name: string;

  dir: string;

  constructor(name: string, dir?: string) {
    this.name = name;
    if (dir === undefined) {
      this.dir = `/${name}`;
    } else {
      this.dir = dir;
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
    };
  },
};
</script>
<style lang="scss">
:root {
  --foreground: black;
  --accent: red;
  --border: #c7c7c7;
  --background: white;

  --foreground-dark: white;
  --accent-dark: red; //TODO
  --border-dark: #c7c7c7;
  --background-dark: #0a0a0f;

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
    > img {
    margin: auto auto auto var(--mili-spacing);
    filter: invert(1);
    }
    > .version {
      position:absolute;
      top: 26px;
      left: 152px;
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
    border: #5f2400 solid;
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
        background: #5f2400;
      }
    }  }
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
