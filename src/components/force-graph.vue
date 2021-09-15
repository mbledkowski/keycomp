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
    chartdata: Object,
    firstColor: String,
    secondColor: String
  },
  mounted() {
    if (!this.chartdata) {
      console.error("No graph data!");
      return null;
    }
    const canvas = <HTMLCanvasElement>document.getElementById("myChart");
    const ctx = canvas.getContext("2d");

    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("Failed to get 2D context");
    }

    let pressurePointRadius: number[] = [];
    let resetPointRadius: number[] = [];

    for (let i = 0; i < this.chartdata.pressure.data.length; i++) {
      if (i === this.chartdata.pressure.point) {
        pressurePointRadius[i] = 6;
      } else {
        pressurePointRadius[i] = 0;
      }
    }

    for (let i = 0; i < this.chartdata.reset.data.length; i++) {
      if (i === this.chartdata.reset.point) {
        resetPointRadius[i] = 6;
      } else {
        resetPointRadius[i] = 0;
      }
    }

    new Chart(ctx, {
      type: "scatter",
      data: {
        labels: ["Black", "Red"],
        datasets: [
          {
            label: "pressure",
            data: this.chartdata.pressure.data,
            pointRadius: pressurePointRadius,
            backgroundColor: this.firstColor,
            borderColor: this.firstColor
          },
          {
            label: "reset",
            data: this.chartdata.reset.data,
            pointRadius: resetPointRadius,
            backgroundColor: this.secondColor,
            borderColor: this.secondColor
          }
        ]
      },
      options: {
        showLine: true,
        elements: {
          line: { tension: 0.2 },
          point: { radius: 0, hitRadius: 6 }
        },
        scales: {
          x: { type: "linear", position: "bottom", min: 0, max: 4 },
          y: { min: 0, suggestedMax: 35 }
        },
        plugins: { legend: { position: "bottom" } }
      }
    });
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