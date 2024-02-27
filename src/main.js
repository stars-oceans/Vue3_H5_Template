import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Button, Loading, Empty } from 'vant'
import 'vant/lib/index.css';

// 引入 echarts
import ECharts from 'vue-echarts'
// 导入 ECharts 核心组件和渲染器
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
// 导入需要的图例
import { LineChart } from 'echarts/charts';

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LegendComponent
} from 'echarts/components';

// 注册必要的组件
echarts.use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LegendComponent
]);


const app = createApp(App)

app.component('v-chart', ECharts)

app.use(createPinia())
app.use(router)

app.use(Button)
.use(Loading)
.use(Empty).mount('#app')
