<template>
  <!-- 使用 vue-echarts 组件并绑定 option -->
  <v-chart
    class="chart"
    :option="option"
    :style="{ width: chartWidth, height: chartHeight }"
  />
  <button @click="updateChartData">更新数据</button>
</template>

<script setup>
// 使用一个特殊的注释来定义组件名
defineOptions({
  name: 'home'
})
import { ref, onMounted, onUnmounted } from "vue";
// 你不需要在组件中直接引入 echarts，因为 vue-echarts 已经处理了初始化
import * as echarts from "echarts";

// 定义图表容器的响应式尺寸
const chartWidth = ref("100%");
const chartHeight = ref("400px"); // 你可以根据需要调整这个高度

// 定义图表配置作为响应式数据
const option = ref({
  title: {
    text: "Referer of a Website",
    subtext: "Fake Data",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});

// 更新数据的方法
function updateChartData() {
  // 这里是新的数据，可以根据实际需要来设置
  option.value.series[0].data = [
    { value: Math.random() * 1000, name: "Search Engine" },
    { value: Math.random() * 1000, name: "Direct" },
    { value: Math.random() * 1000, name: "Email" },
    // 添加或更新数据
  ];
}

const chartRef = ref(null);
</script>

<style>
/* 定义图表的大小 */
.chart {
  /* width: 600px;
  height: 400px; */
  background-color: pink;
}
</style>
