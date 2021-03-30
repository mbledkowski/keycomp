<template lang="pug">
header
  img(src='/img/logo/keycomp.svg', alt='logo', height='24')
  nav
    router-link(
      v-for='category in mainCategories',
      :key='category.dir',
      :to='category.dir'
    ) {{ category.name }}
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
body {
  background: black;
  color: white;
}
header {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  background: black;
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
    }
  }
}
</style>
