<template>
  <div class="bg-write history">
    <div
      class="second-title"
      :style="{margin:'0 0 16px',padding: '26px 31px 0'}"
    >{{$t("History_Enviroment_Label")}}</div>
    <el-form ref="form" label-width="80px" class="history-message">
      <div class="block text-align-left">
        <el-date-picker
          v-model="historyStartTime"
          type="datetime"
          :placeholder="history_start_time_paceholder"
          prefix-icon="el-icon-date"
          style="width:200px"
          @change="dataTimeChange"
        ></el-date-picker>
        <span class="input-time-line">-</span>
        <el-date-picker
          v-model="historyStopTime"
          type="datetime"
          :placeholder="history_end_time_paceholder"
          prefix-icon="el-icon-date"
          style="width:200px"
          @change="dataTimeChange"
        ></el-date-picker>
      </div>
      <div id="day-error-msg" style="margin-top:10px;" :style="{display:isDayErrorMsg}">
        <el-alert title="開始時刻と終了時刻を選んでください" type="error"></el-alert>
      </div>
      <div class="check-list text-align-left">
        <el-checkbox-group v-model="checkList.historyData">
          <el-checkbox
            v-for="item in checkboxs"
            :key="item.id"
            :label="item.label"
            name="historyData"
            :style="item.style"
            :disabled="item.disabled"
            v-model="item.checked"
            @change="historyDataChange(item)"
          ></el-checkbox>
        </el-checkbox-group>
      </div>
      <div id="day-error-msg" style="margin-top:10px;" :style="{display:isSensorErrorMsg}">
        <el-alert title="センサーデータを選んでください" type="error"></el-alert>
      </div>
      <div class="submit-button">
        <el-button
          type="success"
          @click="environmentalHistoryCurve2"
          :style="{width:'80px',height:'36px',padding:'0'}"
        >{{$t("History_Search_Label")}}</el-button>

        <el-button
          type="success"
          @click="environmentalHistoryCVS"
          :style="{width:'140px',height:'36px',padding:'0'}"
        >{{$t("History_CSV_Label")}}</el-button>
      </div>
    </el-form>

    <div class="border-top-gray">
      <div class="second-title">
        <span>{{between}}</span>
      </div>
      <div id="environmentalHistoryChart" :style="{width:'100%', height: '500px','margin-bottom':'30px'}"></div>
    </div>
  </div>
</template>
<script>
const sensorFlag = false
export default {
  sensorFlag,
  name: 'EnvironmentalHistory',
  data() {
    return {
      checkList: {
        historyData: [],
        typeTotal: [],
      },
      checkListType: {
        temperature: false, //温度
        humidity: false, //濕度
        windSpeed: false, //风速
        rainfall: false, //雨量
        illumination: false, //照度
        concentration: false, //浓度
      },
      //type: 1:温度,2:濕度,3:風向,4:風速,5:雨量,6:照度,7:浓度
      checkboxs: [
        {
          id: '1',
          label: this.$t('History_Param1_Label'),
          type: 1,
          disabled: false,
          checked: false,
          dataStr: 'LTMP',
        },
        {
          id: '2',
          label: this.$t('History_Param2_Label'),
          type: 1,
          disabled: false,
          checked: false,
          dataStr: 'OTMP',
        },
        {
          id: '3',
          label: this.$t('History_Param3_Label'),
          type: 2,
          disabled: false,
          checked: false,
          dataStr: 'LHM',
        },
        {
          id: '4',
          label: this.$t('History_Param4_Label'),
          type: 2,
          disabled: false,
          checked: false,
          dataStr: 'OHM',
        },
        {
          id: '5',
          label: this.$t('History_Param5_Label'),
          type: 3,
          style: { width: '150px' },
          disabled: false,
          checked: false,
          dataStr: 'WDIR',
        },
        {
          id: '6',
          label: this.$t('History_Param6_Label'),
          type: 4,
          disabled: false,
          checked: false,
          dataStr: 'WIND',
        },
        {
          id: '7',
          label: this.$t('History_Param7_Label'),
          type: 4,
          disabled: false,
          checked: false,
          dataStr: 'QWIND',
        },
        {
          id: '8',
          label: this.$t('History_Param8_Label'),
          type: 5,
          disabled: false,
          checked: false,
          dataStr: 'UVI',
        },
        {
          id: '9',
          label: this.$t('History_Param9_Label'),
          type: 5,
          disabled: false,
          checked: false,
          dataStr: 'RAIN1',
        },
        {
          id: '10',
          label: this.$t('History_Param10_Label'),
          type: 6,
          disabled: false,
          checked: false,
          dataStr: 'RAIN2',
        },
        {
          id: '11',
          label: this.$t('History_Param11_Label'),
          type: 7,
          disabled: false,
          checked: false,
          dataStr: 'LIGHT',
        },
        {
          id: '12',
          label: this.$t('History_Param12_Label'),
          type: 7,
          style: { width: '150px' },
          disabled: false,
          checked: false,
          dataStr: 'LIGHT10',
        },
        {
          id: '13',
          label: this.$t('History_Param13_Label'),
          type: 7,
          disabled: false,
          checked: false,
          dataStr: 'LIGHT2',
        },
        {
          id: '14',
          label: this.$t('History_Param14_Label'),
          type: 2,
          disabled: false,
          checked: false,
          dataStr: 'STMP',
        },
      ],
      historyStartTime: '',
      historyStopTime: '',
      history_start_time_paceholder: this.$t('History_Start_Time_PlaceHolder'),
      history_end_time_paceholder: this.$t('History_End_Time_PlaceHolder'),
      between: '',
      isDayErrorMsg: 'none',
      isSensorErrorMsg: 'none',
    }
  },

  methods: {
    historyDataChange(item) {
      var arr = this.checkList.typeTotal
      item.checked = !item.checked
      //選択する
      if (item.checked) {
        //判断是否选择センサーデータを判断するかどうかを判断する
       this.sensorFlagData()

        arr.push(item.type)
        var newArr = this.arrUnique(arr)
        if (newArr.length == 2) {
          for (var index in this.checkboxs) {
            if (newArr.indexOf(this.checkboxs[index].type) < 0) {
              this.checkboxs[index].disabled = true
            }
          }
        }
      } else {
        //判断是否选择センサーデータを判断するかどうかを判断する
       this.sensorFlagData()

        var j = arr.indexOf(item.type)

        if (j > -1) {
          arr.splice(j, 1)
        }
        var setArr = this.arrUnique(arr)
        if (setArr.length < 2) {
          for (var i in this.checkboxs) {
            this.checkboxs[i].disabled = false
          }
        }
      }
    },
    /**
     * 繰り返しデータを削除
     * @param {Array} array
     */
    arrUnique(array) {
      var r = []
      for (var i = 0, l = array.length; i < l; i++) {
        for (var j = i + 1; j < l; j++) if (array[i] == array[j]) j == ++i
        r.push(array[i])
      }
      return r
    },
    dataTimeChange() {
      this.isDayErrorMsg = 'none'
    },
    environmentalHistoryCVS() {
      var startiso = this.historyStartTime.toISOString()
      var endiso = this.historyStopTime.toISOString()

      this.between = ''

      var filedstr = 'F'

      for (var i = 0; i < this.checkList.historyData.length; i++) {
        // console.log(this.checkList.historyData[i])
        if (this.checkList.historyData[i] == this.history_param_1) filedstr += '-LTMP'
        if (this.checkList.historyData[i] == this.history_param_2) filedstr += '-OTMP'
        if (this.checkList.historyData[i] == this.history_param_3) filedstr += '-LHM'
        if (this.checkList.historyData[i] == this.history_param_4) filedstr += '-OHM'
        if (this.checkList.historyData[i] == this.history_param_5) filedstr += '-WDIR'
        if (this.checkList.historyData[i] == this.history_param_6) filedstr += '-WIND'
        if (this.checkList.historyData[i] == this.history_param_7) filedstr += '-QWIND'
        if (this.checkList.historyData[i] == this.history_param_8) filedstr += '-RAIN1'
        if (this.checkList.historyData[i] == this.history_param_9) filedstr += '-RAIN2'
        if (this.checkList.historyData[i] == this.history_param_10) filedstr += '-UVI'
        if (this.checkList.historyData[i] == this.history_param_11) filedstr += '-LIGHT'
        if (this.checkList.historyData[i] == this.history_param_12) filedstr += '-LIGHT10'
        if (this.checkList.historyData[i] == this.history_param_13) filedstr += '-LIGHT2'
        if (this.checkList.historyData[i] == this.history_param_14) filedstr += '-STMP'
      }

      window.open('http://47.74.5.223:7542/sensordata?gwid=KASO03HM&table=' + filedstr + '&start=' + startiso + '&end=' + endiso + '&csv=1')
    },
    getChartsYaxis() {
      var arr = this.arrUnique(this.checkList.typeTotal)
      var yAxis = []
      for (var i in arr) {
        switch (arr[i]) {
          case 1:
            yAxis.push({
              type: 'value',
              name: '温度 °C',
              custype: 1,
              scale: true,
            })
            break
          case 2:
            yAxis.push({
              type: 'value',
              name: '濕度 %',
              custype: 2,
              scale: true,
            })
            break
          case 3:
            yAxis.push({
              type: 'value',
              name: '方位(°)',
              custype: 3,
              scale: true,
            })
            break
          case 4:
            yAxis.push({
              type: 'value',
              name: '風速(m/s)',
              custype: 4,
              scale: true,
            })

            break

          case 5:
            yAxis.push({
              type: 'value',
              name: '雨量(mm)',
              custype: 5,
              scale: true,
            })

            break
          case 6:
            yAxis.push({
              type: 'value',
              name: '紫外線(μw/cm²)',
              custype: 6,
              scale: true,
            })
            break
          case 7:
            yAxis.push({
              type: 'value',
              custype: 7,
              name: '照度(lux)',
              scale: true,
            })
            break
        }
      }

      return yAxis
    },
    
    sensorDayData() {
      //判断时刻是否选择時刻を判断するかどうかを判断する
      if (
        this.historyStartTime == null ||
        this.historyStartTime == undefined ||
        this.historyStartTime == '' ||
        this.historyStopTime == null ||
        this.historyStopTime == undefined ||
        this.historyStopTime == ''
      ) {
        this.isDayErrorMsg = 'block'
        this.sensorFlag = false
      } else {
        this.sensorFlag = true
      }
     
    },
     sensorFlagData(){
     //判断是否选择センサーデータを判断するかどうかを判断する
      if (this.checkList.historyData.length == 0) {
        this.isSensorErrorMsg = 'block'
        this.sensorFlag = false
      } else {
        this.isSensorErrorMsg = 'none'
        this.sensorFlag = true
      }
    },
    //判断是否选择「时刻」と「センサーデータ」を判断するかどうかを判断する
    sensorData(){
      this.sensorDayData()
      this.sensorFlagData()
    },
    environmentalHistoryCurve2() {
      this.sensorData()
      if (this.sensorFlag == false) {
        return
      }

      var startiso = this.historyStartTime.toISOString()
      var endiso = this.historyStopTime.toISOString()
      var urlstr = 'http://47.74.5.223:7542/sensordata?gwid=KASO03HM&table=LTMP&start=' + startiso + '&end=' + endiso
      this.$ajax({
        method: 'GET',
        url: urlstr,
      })
        .then(res => {
          var dataZoom=[{
            show:true,
          }]
          var xAxis = [
            {
              type: 'category',
              show: true,
              axisLine: { onZero: false },
              data: [],
            },
          ]
          var legend = {
            data: [],
          }
          var yAxis = this.getChartsYaxis()

          var series = []
          if (res.data) {
            var resData = res.data
            var hisData = this.checkList.historyData
            for (var j in hisData) {
              legend.data.push(hisData[j])
              for (var m in this.checkboxs) {
                if (hisData[j] === this.checkboxs[m].label) {
                  var yIndex = 0
                  if (yAxis[1] && yAxis[1].custype == this.checkboxs[m].type) {
                    yIndex = 1
                  }
                  var seriesJosn = {
                    type: 'line',
                    yAxisIndex: yIndex,
                    data: [],
                  }
                  var arr = this.arrUnique(this.checkList.typeTotal)
                  arr.indexOf(this.checkboxs[m])
                  xAxis[0].data = []
                  for (var i = 0; i < resData.length; i++) {
                    xAxis[0].data.push(resData[i].showdate)
                    seriesJosn.name = hisData[j]
                    seriesJosn.data.push(resData[i][this.checkboxs[m].dataStr] || 0)
                  }
                  series.push(seriesJosn)
                }
              }
            }
          }
          let myChart = this.$echarts.init(document.getElementById('environmentalHistoryChart'))
          var option = {}

          option.xAxis = xAxis
          option.yAxis = yAxis
          option.legend = legend
          option.series = series
          option.dataZoom=dataZoom

          option.tooltip = {
            trigger: 'axis',
          }

          myChart.clear()
          myChart.setOption(option)
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
}
</script>

<style  lang="scss" scoped>
#HistoricalData {
  overflow: hidden;
  text-align: left;
}
.border-top-gray {
  border-top: 1px solid #ebedf4;
  .second-title {
    padding: 30px 31px 8px;
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: #31394d;
    letter-spacing: 0;
    &.echartsTime {
      border-bottom: 1px solid #ebedf4;
    }
  }
}
.history {
  .history-message {
    padding: 0 31px 26px;
    .input-time-line {
      padding: 15px;
    }
  }
  .check-list {
    overflow: hidden;
    display: block;
  }
  .submit-button {
    display: block;
    text-align: center;
    margin: 26px auto 10px;
    .clear-title {
      padding-right: 20px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      letter-spacing: 0;
    }
    .el-button--success {
      border-color: #00cc99;
      background-color: #00cc99;
    }
  }

  .el-carousel-record {
    &.el-carousel {
      @media (min-width: 998px) {
        margin: 20px 74px 71px;
        width: 82%;
      }
      @media (min-width: 1024px) {
        margin: 20px 84px 71px;
        width: 80.5%;
      }
      @media (min-width: 1050px) {
        margin: 20px 96px 71px;
        width: 78%;
      }
      @media (min-width: 1070px) {
        margin: 20px 105px 71px;
        width: 75%;
      }
      @media (min-width: 1280px) {
        margin: 20px 115px 71px;
        width: 75%;
      }
      .carousel-text {
        position: relative;
        top: -28px;
        left: -5px;
        text-align: right;
        .img-time {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0;
          padding-right: 10px;
        }
        .img-load {
          opacity: 0.8;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #ffffff;
          text-align: left;
        }
        .el-icon-download {
          color: rgba(255, 255, 255, 0.8);
          border-radius: 1px;
        }
      }
    }
  }

  .ipcam_slide_show {
    width: 640px;
    height: 360px;
  }
}
</style>


