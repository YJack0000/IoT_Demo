<template>
  <div id="historicalData">
    <div class="content-block" id="home5">
      <div class="first-title">{{$t("History_Title")}}</div>
      <!-- 環境歷史 -->
      <div class="bg-write history">
        <div class="second-title" :style="{margin:'0 0 16px',padding: '26px 31px 0'}">{{$t("History_Enviroment_Label")}}</div>
        <el-form ref="form" label-width="80px" class="history-message">
          <div class="block text-align-left">
            <el-date-picker
              v-model="historyStartTime"
              type="datetime"
              :placeholder="history_start_time_paceholder"
              prefix-icon="el-icon-date"
            ></el-date-picker>
            <span class="input-time-line">-</span>
            <el-date-picker
              v-model="historyStopTime"
              type="datetime"
              :placeholder="history_end_time_paceholder"
              prefix-icon="el-icon-date"
            ></el-date-picker>
          </div>

          <div class="check-list text-align-left">
            <el-checkbox-group v-model="checkList.historyData">
              <el-checkbox :label="history_param_1" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_2" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_3" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_4" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_5" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_6" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_7" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_8" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_9" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_10" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_11" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_12" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_13" name="historyData"></el-checkbox>
              <el-checkbox :label="history_param_14" name="historyData"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="submit-button">
            <span class="clear-title" :style="{cursor:'pointer'}">{{$t("History_Clear_Label")}}</span>
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
          <div id="myChart" :style="{width:'100%', height: '500px'}">
          </div>
        </div>
      </div>

      <!-- 設備動作記錄 -->
      <div class="bg-write history" :style="{margin:'30px 0 0'}">
        <div class="second-title" :style="{margin:'0 0 16px',padding: '26px 31px 0'}">{{$t("History_Device_Status_Label")}}</div>
        <el-form ref="form" label-width="80px" class="history-message">
          <div class="block text-align-left">
            <el-date-picker
              v-model="recordStartTime"
              type="datetime"
              :placeholder="history_start_time2_paceholder"
              prefix-icon="el-icon-date"
            ></el-date-picker>
            <span class="input-time-line">-</span>
            <el-date-picker
              v-model="recordStopTime"
              type="datetime"
              placeholder="history_end_time2_paceholder"
              prefix-icon="el-icon-date"
            ></el-date-picker>
          </div>

          <div class="check-list text-align-left">
            <el-checkbox-group v-model="checkList.historyData">
              <el-checkbox :label="history_device_select1" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select2" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select3" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select4" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select5" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select6" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select7" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select8" name="historyData"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="submit-button">
            <span class="clear-title" :style="{cursor:'pointer'}">{{$t("History_Clear_Label")}}</span>
            <el-button 
              type="success" 
              :style="{width:'80px',height:'36px',padding:'0'}"
             >{{$t("History_Search_Label")}}</el-button>
          </div>
        </el-form>

        <div class="border-top-gray">
          <div class="second-title" :style="{margin:'0',padding:'30px 31px 28px'}">
            <span>{{between2}}</span>
          </div>
          <div id="recordProflie" :style="{width:'100%', height: '300px',margin:'0 0 30px'}"></div>
        </div>
      </div>
      <!-- 影像記錄 -->
      <div class="bg-write history" :style="{margin:'30px 0 34px'}">
        <div class="second-title" :style="{margin:'0 0 16px',padding: '26px 31px 0'}">{{$t("History_Picture_Label")}}</div>
        <el-form ref="form" label-width="80px" class="history-message">
          <div class="block text-align-left">
            <el-date-picker
              v-model="photographyStartTime"
              type="datetime"
              :placeholder="history_start_time3_paceholder"
              prefix-icon="el-icon-date"
            ></el-date-picker>
            <span class="input-time-line">-</span>
            <el-date-picker
              v-model="photographyStopTime"
              type="datetime"
              :placeholder="history_end_time2_paceholder"
              prefix-icon="el-icon-date"
            ></el-date-picker>

            <div class="submit-button" :style="{display:'inline-block',margin:'auto'}">
              <el-button type="success" :style="{width:'80px',height:'36px',margin:'0 0 0 10px',padding:'0'}">{{$t("History_Search_Label")}}</el-button>
              <el-button type="success" :style="{width:'108px',height:'36px',padding:'0'}">{{$t("History_Picture_Download_Label")}}</el-button>
            </div>
          </div>
        </el-form>

        <div class="border-top-gray">
          <div class="second-title" :style="{padding:'30px 31px 10px'}">
            <span>{{between3}}</span>
          </div>

          <ul id="imagePlayer">
            <li v-for="(img,item) in carouselList" :key="item">
              <img v-bind:src="img.url">
            </li>
          </ul>

          <!-- <el-carousel :interval="5000" arrow="always" class="el-carousel-record">
            <el-carousel-item v-for="(img,item) in carouselList" :key="item" class="carousel-img">
              <img v-bind:src="img.url">
              <div class="carousel-text">
                <span class="img-time">2019/05/12</span>
                <div :style="{display:'inline-block',cursor:'pointer'}">
                  <i class="el-icon-download"></i>
                  <span class="img-load">{{$t("History_Picture_Download_Label")}}</span>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'historicalData',
  
  data() {
    return {
      history_start_time_paceholder: this.$t('History_Start_Time_PlaceHolder'),
      history_end_time_paceholder : this.$t('History_End_Time_PlaceHolder'),
      history_param_1 : this.$t('History_Param1_Label'),
      history_param_2 : this.$t('History_Param2_Label'),
      history_param_3 : this.$t('History_Param3_Label'),
      history_param_4 : this.$t('History_Param4_Label'),
      history_param_5 : this.$t('History_Param5_Label'),
      history_param_6 : this.$t('History_Param6_Label'),
      history_param_7 : this.$t('History_Param7_Label'),
      history_param_8 : this.$t('History_Param8_Label'),
      history_param_9 : this.$t('History_Param9_Label'),
      history_param_10 : this.$t('History_Param10_Label'),
      history_param_11 : this.$t('History_Param11_Label'),
      history_param_12 : this.$t('History_Param12_Label'),
      history_param_13 : this.$t('History_Param13_Label'),
      history_param_14 : this.$t('History_Param14_Label'),
      history_start_time2_paceholder: this.$t('History_Start_Time2_PlaceHolder'),
      history_end_time2_paceholder: this.$t('History_End_Time2_PlaceHolder'),
      history_device_select1 : this.$t('History_Device_Select1'),
      history_device_select2 : this.$t('History_Device_Select2'),
      history_device_select3 : this.$t('History_Device_Select3'),
      history_device_select4 : this.$t('History_Device_Select4'),
      history_device_select5 : this.$t('History_Device_Select5'),
      history_device_select6 : this.$t('History_Device_Select6'),
      history_device_select7 : this.$t('History_Device_Select7'),
      history_device_select8 : this.$t('History_Device_Select8'),
      history_start_time3_paceholder: this.$t('History_Start_Time3_PlaceHolder'),
      history_end_time3_paceholder: this.$t('History_End_Time3_PlaceHolder'),
      
      between:'',
      between2:'',
      between3:'',
      
      historyStartTime:'',
      historyStopTime:'',
      recordStartTime:'',
      recordStopTime:'',
      photographyStartTime:'',
      photographyStopTime:'',
      checkList: {
        historyData: [''],
      },
      carouselList: [
        { url: 'http://47.74.5.223:7542/images/mImage2.jpg'},
        
      ],
    }
  },

  tooltip: {
    trigger: 'axis',
  },
  mounted() {
   // this.environmentalHistoryCurve()
    this.deviceRecordProfile()
    var options = {
      stageWidth: 600 ,
      stageHeight: 350,
      autoStart: false,
      pauseOnHover: true,
      delay: 3,
      loop: true,
    }
    this.$('#imagePlayer').imagePlayer(options)
  },
  methods: {
    environmentalHistoryCVS() {
      var startiso = this.historyStartTime.toISOString()
      var endiso = this.historyStopTime.toISOString()
      
     this.between = '' 
      
        var filedstr = 'F'
        
        for( var i = 0; i<this.checkList.historyData.length ; i++ ) {
        console.log(this.checkList.historyData[i] )
        if( this.checkList.historyData[i] == this.history_param_1 ) filedstr += '-LTMP'
        if( this.checkList.historyData[i] == this.history_param_2 ) filedstr += '-OTMP'
        if( this.checkList.historyData[i] == this.history_param_3 ) filedstr += '-LHM'
        if( this.checkList.historyData[i] == this.history_param_4 ) filedstr += '-OHM'
        if( this.checkList.historyData[i] == this.history_param_5 ) filedstr += '-WDIR'
        if( this.checkList.historyData[i] == this.history_param_6 ) filedstr += '-WIND'
        if( this.checkList.historyData[i] == this.history_param_7 ) filedstr += '-QWIND'
        if( this.checkList.historyData[i] == this.history_param_8 ) filedstr += '-RAIN1'        
        if( this.checkList.historyData[i] == this.history_param_9 ) filedstr += '-RAIN2'
        if( this.checkList.historyData[i] == this.history_param_10 ) filedstr += '-UVI'
        if( this.checkList.historyData[i] == this.history_param_11 ) filedstr += '-LIGHT'
        if( this.checkList.historyData[i] == this.history_param_12 ) filedstr += '-LIGHT10'
        if( this.checkList.historyData[i] == this.history_param_13 ) filedstr += '-LIGHT2'
        if( this.checkList.historyData[i] == this.history_param_14 ) filedstr += '-STMP'
        }
        
        window.open('http://47.74.5.223:7542/sensordata?gwid=KASO05SO&table='+ filedstr + '&start=' +  startiso + '&end=' + endiso + '&csv=1')
    },
    
    environmentalHistoryCurve2() {
      
      var startiso = this.historyStartTime.toISOString()
      var endiso = this.historyStopTime.toISOString()
      
      console.log('Start Time : ' + startiso )
      console.log('End Time : ' + endiso )
      
      var urlstr = 'http://47.74.5.223:7542/sensordata?gwid=KASO05SO&table=LTMP&start='+ startiso + '&end=' + endiso
      
      this.$ajax({
           method: 'GET',
           url: urlstr
          })
      .then( res => {
          var objstr = JSON.stringify(res.data)
          //console.log(objstr)
          var objres = JSON.parse(objstr)
          
          var xdata = []
         // var ydata = []
          
          var ydata1 = []
          var ydata2 = []
          var ydata3 = []
          var ydata4 = []
          var ydata5 = []
          var ydata6 = []
          var ydata7 = []
          var ydata8 = []
          var ydata9 = []
          var ydata10 = []
          var ydata11 = []
          var ydata12 = []
          var ydata13 = []
          var ydata14 = []
           
          
          for( var j = 0; j<objres.length; j++ ){
          
               var dd = new Date(objres[j].datetime)
               
               var hours = dd.getHours()
               var minutes = dd.getMinutes()
               var seconds = dd.getSeconds()
               minutes = minutes < 10 ? '0'+minutes : minutes
               seconds = seconds < 10 ? '0'+seconds : seconds
               hours = hours < 10 ? '0'+hours : hours
    
               var strTime =  hours + ':' + minutes + ':' + seconds
               var mm = dd.getMonth()
               mm = mm+1
  
               mm = mm < 10 ? '0'+mm : mm
    
               var dd3 = dd.getDate()
               dd3 = dd3 < 10 ? '0'+dd3 : dd3
  
               var strdatetime =  dd.getFullYear() + '-' + mm + '-' + dd3 + ' ' + strTime
               
               console.log( strdatetime + '==' + objres[j].LTMP )
               
               xdata.push(strdatetime)
               
               ydata1.push(objres[j].LTMP)
               ydata2.push(objres[j].OTMP)
               ydata3.push(objres[j].LHM)
               ydata4.push(objres[j].OHM)
               ydata5.push(objres[j].WDIR)
               ydata6.push(objres[j].WIND)
               ydata7.push(objres[j].QWIND)
               ydata8.push(objres[j].RAIN1)
               ydata9.push(objres[j].RAIN2)
               ydata10.push(objres[j].UVI)
               ydata11.push(objres[j].LIGHT)
               ydata12.push(objres[j].LIGHT10)
               ydata13.push(objres[j].LIGHT2)
               ydata14.push(objres[j].STMP)
               
          
          }
          
          let myChart = this.$echarts.init(document.getElementById('myChart'))
               
          var option = {}
          option.tooltip = { trigger: 'axis' }
         // option.grid = { x: 0, x2: 0, y: 0, y2: 0}
          
          var xAxis = {
           show: true,
           type: 'category',
           data: [],
          }
          
          xAxis.data = xdata
          
          var yAxis = [{
          type: 'value',
          name: '温度',
          scale: true
          },{
          type: 'value',
          name: '湿度',
          scale: true,
          min:0,
          max:100,
          }]
        
        var series = []
        
        var  legend = {}
        
        legend.data = []
                        
        
        
        for( var i = 0; i<this.checkList.historyData.length ; i++ ) {
        
        if( this.checkList.historyData[i] == this.history_param_1 ) {
          var seris_item1 = {}
          seris_item1.type = 'line'
          seris_item1.smooth = true
          seris_item1.color = ['#66DD00']
          seris_item1.data = ydata1
          seris_item1.name = '室内温度'
          seris_item1.targetAxisIndex = 0
          legend.data.push('室内温度')
          series.push(seris_item1)
          
        }
        
        if( this.checkList.historyData[i] == this.history_param_2 ) {
          var seris_item2 = {}
          seris_item2.type = 'line'
          seris_item2.smooth = true
          seris_item2.color = ['#99FF33']
          seris_item2.data = ydata2
          seris_item2.name = '室外温度'
          seris_item2.targetAxisIndex = 0
          legend.data.push('室外温度')
          series.push(seris_item2)
        }
        
         if( this.checkList.historyData[i] == this.history_param_3 ) {
          var seris_item3 = {}
          seris_item3.type = 'line'
          seris_item3.smooth = true
          seris_item3.color = ['#4169E1']
          seris_item3.data = ydata3
          seris_item3.name = '室内湿度'
          seris_item3.targetAxisIndex = 1
          legend.data.push('室内湿度')
          series.push(seris_item3)
        }
        
         if( this.checkList.historyData[i] == this.history_param_4 ) {
          var seris_item4 = {}
          seris_item4.type = 'line'
          seris_item4.smooth = true
          seris_item4.color = ['#00BFFF']
          seris_item4.data = ydata4
          seris_item4.name = '室外湿度'
          seris_item4.targetAxisIndex = 1
          legend.data.push('室外湿度')
          series.push(seris_item4)
        }
        
        if( this.checkList.historyData[i] == this.history_param_5 ) {
          var seris_item5 = {}
          seris_item5.type = 'line'
          seris_item5.smooth = true
          seris_item5.color = ['#FF8C00']
          seris_item5.data = ydata5
          seris_item5.name = '風向'
          legend.data.push('風向')
          series.push(seris_item5)
        }
        
         if( this.checkList.historyData[i] == this.history_param_6 ) {
          var seris_item6 = {}
          seris_item6.type = 'line'
          seris_item6.smooth = true
          seris_item6.color = ['#CD853F']
          seris_item6.data = ydata6
          seris_item6.name = '風速'
          legend.data.push('風速')
          series.push(seris_item6)
        }
        
         if( this.checkList.historyData[i] == this.history_param_7 ) {
          var seris_item7 = {}
          seris_item7.type = 'line'
          seris_item7.smooth = true
          seris_item7.color = ['#DEB887']
          seris_item7.data = ydata7
          seris_item7.name = '瞬間風速'
          legend.data.push('瞬間風速')
          series.push(seris_item7)
        }
        
         if( this.checkList.historyData[i] == this.history_param_8 ) {
          var seris_item8 = {}
          seris_item8.type = 'line'
          seris_item8.smooth = true
          seris_item8.color = ['#40E0D0']
          seris_item8.data = ydata8
          seris_item8.name = '時間雨量'
          legend.data.push('時間雨量')
          series.push(seris_item8)
        }
        
         if( this.checkList.historyData[i] == this.history_param_9 ) {
          var seris_item9 = {}
          seris_item9.type = 'line'
          seris_item9.smooth = true
          seris_item9.color = ['#87CECB']
          seris_item9.data = ydata9
          seris_item9.name = '日雨量'
          legend.data.push('日雨量')
          series.push(seris_item9)
        }
        
         if( this.checkList.historyData[i] == this.history_param_10 ) {
          var seris_item10 = {}
          seris_item10.type = 'line'
          seris_item10.smooth = true
          seris_item10.color = ['#FFFF00']
          seris_item10.data = ydata10
          seris_item10.name = '紫外線'
          legend.data.push('紫外線')
          series.push(seris_item10)
        }
        
         if( this.checkList.historyData[i] == this.history_param_11 ) {
          var seris_item11 = {}
          seris_item11.type = 'line'
          seris_item11.smooth = true
          seris_item11.color = ['#FFFF00']
          seris_item11.data = ydata11
          seris_item11.name = '照度'
          legend.data.push('照度')
          series.push(seris_item11)
        }
        
         if( this.checkList.historyData[i] == this.history_param_12 ) {
          var seris_item12 = {}
          seris_item12.type = 'line'
          seris_item12.smooth = true
          seris_item12.color = ['#8A2BE2']
          seris_item12.data = ydata12
          seris_item12.name = '10分間平均照度'
          legend.data.push('10分間平均照度')
          series.push(seris_item12)
        }
        
         if( this.checkList.historyData[i] == this.history_param_13 ) {
          var seris_item13 = {}
          seris_item13.type = 'line'
          seris_item13.smooth = true
          seris_item13.color = ['#FFD700']
          seris_item13.data = ydata13
          seris_item13.name = '日射量累積'
          legend.data.push('日射量累積')
          series.push(seris_item13)
        }
        
         if( this.checkList.historyData[i] == this.history_param_14 ) {
          var seris_item14 = {}
          seris_item14.type = 'line'
          seris_item14.smooth = true
          seris_item14.color = ['#B8860B']
          seris_item14.data = ydata14
          seris_item14.name = '土壌湿度'
          legend.data.push('土壌湿度')
          series.push(seris_item14)
        }
        
        }
        
        
          option.xAxis = xAxis
          option.yAxis = yAxis
          option.legend = legend
          option.series = series
          
          myChart.clear()
          myChart.setOption(option)
         
       })
       .catch( error => {
          console.log(error)
       })
      
      
    },
    //環境歷史の曲線図
    environmentalHistoryCurve() {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          x: 0,
          x2: 0,
          y: 0,
          y2: 65,
        },
        xAxis: {
          show: true,
          type: 'category',
          axisTick: 0,
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            margin: 30,
            textStyle: {
              color: '#748AA1',
            },
          },
          data: ['Aug 2018', 'Sep 2018', 'Oct 2018', 'Nov 2018', 'Dec 2018', 'Jan 2019', 'Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019'],
        },
        yAxis: {
          type: 'value',
          show: true,
          axisTick: 0,
          min: 18.0,
          max: 20.5,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#EBEDF4'],
              width: 1,
              type: 'solid',
            },
          },
        },
        series: [
          {
            type: 'line',
            smooth: true,
            color: ['#29CB97'],
            showSymbol: false,
            data: [18.4, 18.8, 18.4, 19.55, 19.05, 19.54, 18.8, 19.5, 20.1, 19.05],
            symbol: 'circle',
            symbolSize: [1, 1],
          },
          {
            type: 'line',
            smooth: true,
            color: ['#4072EE'],
            showSymbol: false,
            data: [18.7, 18.5, 18.85, 18.5, 19.35, 18.9, 19.5, 18.9, 19.1, 18.35],
            symbol: 'circle',
            symbolSize: [1, 1],
          },
        ],
      })
    },
    //設備動作記錄のカスタマイズ線図
    renderItem(params, api) {
      var categoryIndex = api.value(0)
      var start = api.coord([api.value(1), categoryIndex])
      var end = api.coord([api.value(2), categoryIndex])
      var height = 10

      var rectShape = this.$echarts.graphic.clipRectByRect(
        {
          x: start[0],
          y: start[1] - height / 2,
          width: end[0] - start[0],
          height: height,
        },
        {
          x: params.coordSys.x,
          y: params.coordSys.y,
          width: params.coordSys.width,
          height: params.coordSys.height,
        }
      )

      return (
        rectShape && {
          type: 'rect',
          shape: rectShape,
          style: api.style(),
        }
      )
    },
    deviceRecordProfile() {
      var categories = ['側窗南', '側窗北', '天窗西南', '天窗東南', '天窗北', 'pump', '照明', '冷卻']
      let scheduleProflie = this.$echarts.init(document.getElementById('recordProflie'))

      scheduleProflie.setOption({
        tooltip: {
          formatter: function(params) {
            return params.marker + params.name + '：' + params.data[1] + ':00' + ' - ' + params.data[2] + ':00'
          },
        },
        grid: {
          x: 70,
          x2: 50,
          y: 0,
          height: 270,
        },
        xAxis: {
          min: 9,
          max: 19,
          splitNumber: 10,
          axisTick: 0,
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: ['#EBEDF4'],
              width: 1,
              type: 'solid',
            },
          },
          axisLabel: {
            margin: 18,
            textStyle: {
              color: '#748AA1',
            },
            formatter: function(val) {
              return val + ':00'
            },
          },
        },
        yAxis: {
          data: categories,
          axisTick: 0,
          axisLabel: {
            show: true,
            margin: 60,
            textStyle: {
              color: '#748AA1',
              align: 'left',
            },
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#EBEDF4'],
              width: 1,
              type: 'solid',
            },
          },
        },
        dataZoom: {
          show: true,
          left: 30,
          right: 50,
          zoomLock: true,
          xAxisIndex: 0,
          filterMode: 'weakFilter',
          showDataShadow: false,
          top: 400,
          height: 10,
          borderColor: 'transparent',
        },
        series: [
          {
            type: 'custom',
            renderItem: this.renderItem,
            encode: {
              x: [1, 1],
              y: 0,
            },
            itemStyle: {
              normal: {
                color: function(colorItem) {
                  var colorList = ['#29CB97', '#29CB97', '#29CB97', '#29CB97', '#29CB97', '#4072EE', '#FEC400', '#B558F6']
                  return colorList[colorItem.dataIndex]
                },
              },
            },

            data: [[0, 9, 15], [1, 9, 11], [2, 15, 16], [3, 9, 11], [4, 9, 15], [5, 9, 11], [6, 11, 12], [7, 9, 11]],
          },
        ],
      })
    },
  },
}
</script>

<style lang="scss" scoped>
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
}
//===el-carousel===

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
</style>
    

