<template>
  <div>
    <div class="head">
      <div class="head-item">
        <span class="head-item-name">时间：</span>
        <div class="head-item-input time">
          <a-date-picker style="width: 200px; margin-right: 20px" />
          <a-date-picker style="width: 200px" />
        </div>
      </div>
      <div class="head-item">
        <button>查询</button>
      </div>
    </div>
    <div >
      <div style='height: 300px;' ref="echarts"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart, BarChart, PieChart } from "echarts/charts";
import { UniversalTransition, LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  PieChart,
  LabelLayout,
  BarChart,
]);
export default {
  data() {
    return {
      value: 0,
    };
  },
  mounted() {
    this.echartsView();
  },
  methods: {
    echartsView() {
      let myChart1 = echarts.init(this.$refs.echarts);
      console.log(myChart1);
      let option = {
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],

        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            smooth: true,
            emphasis: {
              focus: "series",
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(85,75,252,.6)",
                    },
                    {
                      offset: 1,
                      color: "rgba(143,40,253,.2)",
                    },
                  ],
                  false
                ),
              },
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            smooth: true,
            emphasis: {
              focus: "series",
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(247,91,37,.6)",
                    },
                    {
                      offset: 1,
                      color: "rgba(248,138,30,.1)",
                    },
                  ],
                  false
                ),
              },
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      };
      option && myChart1.setOption(option);
    },
  },
};
</script>

<style>
.head {
  padding: 20px 20px 0;
  border: 1px solid #ccc;
  background: #fff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.head .head-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  margin-right: 30px;
  margin-bottom: 20px;
}
.head .head-item .head-item-name {
  margin-right: 6px;
}
.head .head-item .head-item-input {
  width: 200px;
  display: flex;
}
.head .head-item .head-item-input .ant-input-number {
  width: 100%;
}
.head .head-item button {
  height: 32px;
  width: 70px;
  border: none;
  outline: none;
  background: #1d3f6c;
  color: #fff;
  border-radius: 4px;
}
.head .head-item div.time {
  width: 400px;
}

.middle {
  width: 100%;
  margin-bottom: 30px;
  text-align: right;
}
.middle button {
  height: 32px;
  width: 70px;
  outline: none;
  border: 1px solid #1d3f6c;
  color: #1d3f6c;
  border-radius: 4px;
  background: #fff;
}
</style>