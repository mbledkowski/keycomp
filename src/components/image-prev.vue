<template lang="pug">
#image-prev(:style="{ transform: 'translate(-' + activeImage * 100 + '%)' }")
  .image(v-for="(item, i) in photos", :key="i")
    img(:src="item.src")
#image-bar
  .image(
    v-for="(item, i) in photos",
    :key="i",
    :class="{ active: i === activeImage }",
    v-on:click="activeImage = i"
  )
    img(:src="item.src")
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    photos: Object,
  },
  data() {
    return {
      activeImage: 0,
    }
  },
})
</script>
<style lang="scss" scoped>
#image-prev {
  transition: transform 0.1s ease-in-out 0s;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  & > .image {
    width: calc(100% - 2 * var(--nano-spacing));
    height: calc(100% - 2 * var(--nano-spacing));
    display: flex;
    flex: 0 0 auto;
    margin: var(--nano-spacing);
    & > img {
      margin: auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
}
#image-bar {
  position: sticky;
  bottom: var(--nano-spacing);
  display: flex;
  flex-flow: row nowrap;
  overflow-x: auto;
  padding: 0 var(--nano-spacing);
  & > .image {
    display: flex;
    justify-content: center;
    min-width: 100px;
    height: 79px;
    border: 2px solid var(--border);
    margin-right: var(--pico-spacing);
    background: var(--background);
    border-radius: var(--nano-spacing);
    & > img {
      margin: auto;
      height: 100%;
      max-height: 100%;
      max-width: 100%;
    }
  }
  .image.active {
    border: 2px solid var(--accent);
  }
}
</style>
