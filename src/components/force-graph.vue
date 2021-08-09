<template lang="pug">
canvas#myChart
//- canvas#myChart(width="400", height="300")
</template>
<script lang="ts">
import { defineComponent, onMounted, PropType } from "vue";

import {
  Chart,
  LineElement,
  PointElement,
  ScatterController,
  LinearScale,
  Decimation,
  Legend,
  Tooltip
} from "chart.js";

Chart.register(
  LineElement,
  PointElement,
  ScatterController,
  LinearScale,
  Decimation,
  Legend,
  Tooltip
);

export default defineComponent({
  props: {
    chartdata: Object
  },
  data() {
    return {
      data: this.chartdata
    };
  },
  mounted() {
    console.log(this.chartdata);
    const canvas = <HTMLCanvasElement>document.getElementById("myChart");
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

    new Chart(ctx, this.chartdata);
  }
});
</script>

<style lang="scss">
#myChart {
  width: 100% !important;
  height: 100% !important;
  aspect-ratio: unset !important;
}
</style>