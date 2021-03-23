<template>
  <div id="deviceStatus">
    <div class="content-block" id="home2">
      <div class="first-title">{{ $t("DeviceStatus_Title") }}</div>
      <div class="bg-write switch">
        <el-row :gutter="30">
          <el-col :span="6">
            <div id="fan_div" class="switch-content" :class="{ 'bg-on': fanisOn, 'bg-off': fanisOff, 'bg-danger': fanisDanger }">
              <div class="switch-first">{{ $t("DeviceStatus_Fan_Label")}}</div>
              <div class="switch-state">{{fan_enable}}</div>
              <div class="text-align-center">
                <input 
                  class="switch-button" 
                  type="button" 
                  :value="fan_action" 
                  @click="openDialogVisible1 = true"
                >
              </div>
            </div>
          </el-col>
          <el-col :span="6">
             <div id="light_div" class="switch-content" :class="{ 'bg-on': lightisOn, 'bg-off': lightisOff, 'bg-danger': lightisDanger }">
              <div class="switch-first">{{ $t("DeviceStatus_Light_Label")}}</div>
              <div class="switch-state">{{light_enable}}</div>
              <div class="text-align-center">
                <input
                  class="switch-button"
                  type="button"
                  :value="light_action"
                  @click="openDialogVisible = true"
                >
              </div>
            </div>
          </el-col>
          <el-col :span="6">
             <div id="pump_div" class="switch-content" :class="{ 'bg-on': pumpisOn, 'bg-off': pumpisOff, 'bg-danger': pumpisDanger }" >
              <div class="switch-first">{{ $t("DeviceStatus_Pump_Label")}}</div>
              <div class="switch-state">{{pump_enable}}</div>
              <div class="text-align-center">
                 <input 
                  class="switch-button" 
                  type="button" 
                  :value="pump_action" 
                  @click="openDialogVisible2 = true"
                >
              </div>
            </div>
          </el-col>
          <el-col :span="6">
             <div id="nnsf_div" class="switch-content" :class="{ 'bg-on': nnsfisOn, 'bg-off': nnsfisOff, 'bg-danger': nnsfisDanger }">
              <div class="switch-first">{{ $t("DeviceStatus_NNSF_Label")}}</div>
              <div class="switch-state">
                 {{ xdata1 }}%
              </div>
              <div class="text-align-center">
                <el-slider v-model="data1" :disabled="nnsf_disable" show-input :value="data1" @change="moveNNSF" ></el-slider>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="30" class="mt-27">
          <el-col :span="6">
             <div id="sesf_div" class="switch-content" :class="{ 'bg-on': sesfisOn, 'bg-off': sesfisOff, 'bg-danger': sesfisDanger }">
              <div class="switch-first">{{ $t("DeviceStatus_SESF_Label")}}</div>
              <div class="switch-state">
                {{ xdata2 }}%
              </div>
              <div class="text-align-center">
                <el-slider v-model="data2" :disabled="sesf_disable" show-input :value="data2" @change="moveSESF" ></el-slider>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
             <div id="swsf_div" class="switch-content bg-on" :class="{ 'bg-on': swsfisOn, 'bg-off': swsfisOff, 'bg-danger': swsfisDanger }">
              <div class="switch-first">{{ $t("DeviceStatus_SWSF_Label")}}</div>
              <div class="switch-state">
              {{ xdata3 }}%
              </div>
              <div class="text-align-center">
                <el-slider v-model="data3" :disabled="swsf_disable" show-input :value="data3" @change="moveSWSF"  ></el-slider>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
             <div id="nswn_div" class="switch-content" :class="{ 'bg-on': nswnisOn, 'bg-off': nswnisOff, 'bg-danger': nswnisDanger }">
              <div class="switch-first">{{ $t("DeviceStatus_NSWD_Label")}}</div>
              <div class="switch-state">{{ xdata4 }}%</div>
              <div class="text-align-center">
                <el-slider v-model="data4" :disabled="nswn_disable" show-input :value="data4" @change="moveNSWN"></el-slider>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
           <div id="sswn_div" class="switch-content" :class="{ 'bg-on': sswnisOn, 'bg-off': sswnisOff, 'bg-danger': sswnisDanger }">
              <div class="switch-first">{{ $t("DeviceStatus_SSWD_Label")}}</div>
              <div class="switch-state">{{ xdata5 }}%</div>
              <div class="text-align-center">
                <el-slider v-model="data5" :disabled="sswn_disable" show-input :value="data5" @change="moveSSWN" ></el-slider>
                <a class="switch-retry">{{ $t("DeviceStatus_Retry_Action")}}</a>
              </div>
            </div>
          </el-col>
        </el-row>
         <el-row :gutter="30" class="mt-27">
          <el-col :span="6">
            <div class="switch-content bg-off">
              <div class="switch-first">サンバイザー</div>
              <div class="switch-state">{{ xdata6 }}%</div>
              <div class="text-align-center">
                <el-slider v-model="data6" show-input></el-slider>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- モダール ——> ヒント -->
        <el-dialog :visible.sync="openDialogVisible" class="openDialog" >
          <div class="message-content">{{$t("DeviceStatus_Light_Label")}}{{ $t("DeviceStatus_On_Message")}}</div>
          <div class="text-align-right">
            <el-button class="cancelText" @click="openDialogVisible = false">{{ $t("DeviceStatus_Cancel_Action")}}</el-button>
            <el-button class="successBtn" @click="tunOnOffLight" >{{ $t("DeviceStatus_Confirm_Action")}}</el-button>
          </div>
        </el-dialog>
         <el-dialog :visible.sync="openDialogVisible1" class="openDialog" > 
          <div class="message-content" >{{$t("DeviceStatus_Fan_Label")}}{{ $t("DeviceStatus_On_Message")}}</div>
          <div class="text-align-right">
            <el-button class="cancelText" @click="openDialogVisible1 = false">{{ $t("DeviceStatus_Cancel_Action")}}</el-button>
            <el-button class="successBtn" @click="tunOnOffFan" >{{ $t("DeviceStatus_Confirm_Action")}}</el-button>
          </div>
        </el-dialog>
         <el-dialog :visible.sync="openDialogVisible2" class="openDialog">
          <div class="message-content">{{$t("DeviceStatus_Pump_Label")}}{{ $t("DeviceStatus_On_Message")}}</div>
          <div class="text-align-right">
            <el-button class="cancelText" @click="openDialogVisible2 = false">{{ $t("DeviceStatus_Cancel_Action")}}</el-button>
            <el-button class="successBtn" @click="tunOnOffPump">{{ $t("DeviceStatus_Confirm_Action")}}</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'deviceStatus',
  data() {
    return {
      gwid: '',
      fanisOn: true,
      fanisOff: false,
      fanisDanger: false,
      
      lightisOn: true,
      lightisOff: false,
      lightisDanger: false,
      
      pumpisOn: true,
      pumpisOff: false,
      pumpisDanger: false,
      
      nnsfisOn: true,
      nnsfisOff: false,
      nnsfisDanger: false,
      
      sesfisOn: true,
      sesfisOff: false,
      sesfisDanger: false,
      
      swsfisOn: true,
      swsfisOff: false,
      swsfisDanger: false,
      
      nswnisOn: true,
      nswnisOff: false,
      nswnisDanger: false,
      
      sswnisOn: true,
      sswnisOff: false,
      sswnisDanger: false,
      
      
      fan_enable: '啟用中',
      fan_action: this.$t('DeviceStatus_Off_Action'),
      
      light_enable: '啟用中',
      light_action: this.$t('DeviceStatus_Off_Action'),
      
      pump_enable: '啟用中',
      pump_action: this.$t('DeviceStatus_On_Action'),
      
      fan_doing : 0,
      light_doing : 0,
      pump_doing : 0,
      
      first_time : 0,
      
      nnsf_doing : 0,
      sesf_doing : 0,
      swsf_doing : 0,
      nswn_doing : 0,
      sswn_doing : 0,
      
      nnsf_data : 0,
      sesf_data : 0,
      swsf_data : 0,
      nswn_data : 0,
      sswn_data : 0,
      
      nnsf_target : 0,
      sesf_target : 0,
      swsf_target : 0,
      nswn_target : 0,
      sswn_target : 0,
      
      nnsf_disable : false,
      sesf_disable : false,
      swsf_disable : false,
      nswn_disable : false,
      sswn_disable : false,
      
      
      data1: 5,
      data2: 42,
      data3: 0,
      data4: 42,
      data5: 0,
      data6: 0,
      
      xdata1: 5,
      xdata2: 42,
      xdata3: 0,
      xdata4: 42,
      xdata5: 0,
      xdata6: 0,
      
      openDialogVisible: false,
      openDialogVisible1: false,
      openDialogVisible2: false,
    }
  },
  created() {
    setInterval( this.getSensorsData, 1000 )
    this.first_time = 1
    this.gwid = this.$session.get( 'loginUser')
    console.log('DeviceStatus gwid=' + this.gwid )
   // console.log( this.$session.get( 'loginUser') )
    
  },
  methods: {
     moveNNSF() {
        if( this.nnsf_doing == 0 || this.data1 == 0 ) {
        alert('Move 天窓北 ' + this.data1 + '%' )
       // var urlstr = 'http://47.74.5.223:7542/do?gwid=KASO03HM&sfid=NNSF&sfvalue=' + this.data1.toString()
       var urlstr = 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&sfid=NNSF&sfvalue=' + this.data1.toString()
        
     //   if( this.data1 == 0 ) urlstr = 'http://47.74.5.223:7542/do?gwid=KASO03HM&sfid=NNSF&sfvalue=999'
        if( this.data1 == 0 ) urlstr = 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&sfid=NNSF&sfvalue=999'
        
        this.$ajax({
           method: 'GET',
           url: urlstr
          })
        this.nnsf_doing = parseInt( (this.data1 - this.nnsf_data)*60/100 )
        if( this.nnsf_doing < 0 ) this.nnsf_doing = this.nnsf_doing *-1
        
         if( this.data1 > 0 ) {
          
             this.nnsfisOn = true
             this.nnsfisOff = false
             this.nnsfisDanger = false
             
          } else {
          
             this.nnsfisOn = false
             this.nnsfisOff = true
             this.nnsfisDanger = false
          
          }
          
        //  this.nnsf_data = this.data1
            this.nnsf_target = this.data1
            this.nnsf_disable = true
          
        
        } else {
          alert('天窓北 is busy' )
          this.data1 = this.nnsf_target
          
          
        }
        
        //this.getSensorsData()
          
     },
     
     moveSESF() {
     if( this.sesf_doing == 0 || this.data2 == 0 ) {
         alert('Move 天窓東南' + this.data2 + '%' )
       //  var urlstr = 'http://47.74.5.223:7542/do?gwid=KASO03HM&sfid=SESF&sfvalue=' + this.data2.toString()
        // if( this.data2 == 0 ) urlstr = 'http://47.74.5.223:7542/do?gwid=KASO03HM&sfid=SESF&sfvalue=999'
        
         var urlstr = 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&sfid=SESF&sfvalue=' + this.data2.toString()
         if( this.data2 == 0 ) urlstr = 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&sfid=SESF&sfvalue=999'
         
         
        this.$ajax({
           method: 'GET',
           url: urlstr
          })
          
          this.sesf_doing = parseInt( (this.data2 - this.sesf_data)*60/100 )
        if( this.sesf_doing < 0 ) this.sesf_doing = this.sesf_doing *-1
        if( this.data2 > 0 ) {
          
             this.sesfisOn = true
             this.sesfisOff = false
             this.sesfisDanger = false
             
          } else {
          
             this.sesfisOn = false
             this.sesfisOff = true
             this.sesfisDanger = false
          
          }
          
        //  this.sesf_data = this.data2
          this.sesf_target = this.data2
          this.sesf_disable = true
          
      } else {
        alert('天窓東南 is busy' )
          this.data2 = this.sesf_target
      }
          
         // this.getSensorsData()
     },
     
     moveSWSF() {
      if( this.swsf_doing == 0 || this.data3 == 0 ) {
       alert('Move 天窓西南' + this.data3 + '%' )
       
      //  var urlstr = 'http://47.74.5.223:7542/do?gwid=KASO03HM&sfid=SWSF&sfvalue=' + this.data3.toString()
    //     if( this.data3 == 0 ) urlstr = 'http://47.74.5.223:7542/do?gwid=KASO03HM&sfid=SWSF&sfvalue=999'
         
          var urlstr = 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&sfid=SWSF&sfvalue=' + this.data3.toString()
         if( this.data3 == 0 ) urlstr = 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&sfid=SWSF&sfvalue=999'
         
        this.$ajax({
           method: 'GET',
           url: urlstr
          })
          
          this.swsf_doing = parseInt( (this.data3 - this.swsf_data)*60/100 )
        if( this.swsf_doing < 0 ) this.swsf_doing = this.swsf_doing *-1
        
         if( this.data3 > 0 ) {
          
             this.swsfisOn = true
             this.swsfisOff = false
             this.swsfisDanger = false
             
          } else {
          
             this.swsfisOn = false
             this.swsfisOff = true
             this.swsfisDanger = false
          
          }
          
        // this.swsf_data = this.data3 
         this.swsf_target = this.data3
         this.swsf_disable = true
         
       } else {
         alert('天窓西南 is busy' )
          this.data3 = this.swsf_target
       }
      //    this.getSensorsData()
     },
     
     
     
     moveNSWN() {
     if( this.nswn_doing == 0 || this.data4 == 0 ) {
         alert('Move 側窓北' + this.data4 + '%' )
         
    //      var urlstr = 'http://47.74.5.223:7542/do?gwid=KASO03HM&sfid=NSWN&sfvalue=' + this.data4.toString()
    //     if( this.data4 == 0 ) urlstr = 'http://47.74.5.223:7542/do?gwid=KASO03HM&sfid=NSWN&sfvalue=999'
         
          var urlstr = 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&sfid=NSWN&sfvalue=' + this.data4.toString()
         if( this.data4 == 0 ) urlstr = 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&sfid=NSWN&sfvalue=999'
         
        this.$ajax({
           method: 'GET',
           url: urlstr
          })
          this.nswn_doing = parseInt( (this.data4 - this.nswn_data)*60/100 )
        if( this.nswn_doing < 0 ) this.nswn_doing = this.nswn_doing *-1
          
          if( this.data4 > 0 ) {
          
             this.nswnisOn = true
             this.nswnisOff = false
             this.nswnisDanger = false
             
          } else {
          
             this.nswnisOn = false
             this.nswnisOff = true
             this.nswnisDanger = false
          
          }
          
         //  this.nswn_data = this.data4
         this.nswn_target = this.data4
         this.nswn_disable = true
           
      } else {
         alert('側窓北 is busy' )
          this.data4 = this.nswn_target
       }    
      //    this.getSensorsData()
     },
     
     moveSSWN() {
     if( this.sswn_doing == 0 || this.data5 == 0 ) {
        alert('Move 側窓南' + this.data5 + '%' )
     //    var urlstr = 'http://47.74.5.223:7542/do?gwid=KASO03HM&sfid=SSWN&sfvalue=' + this.data5.toString()
    //     if( this.data5 == 0 ) urlstr = 'http://47.74.5.223:7542/do?gwid=KASO03HM&sfid=SSWN&sfvalue=999'
         
         var urlstr = 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&sfid=SSWN&sfvalue=' + this.data5.toString()
         if( this.data5 == 0 ) urlstr = 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&sfid=SSWN&sfvalue=999'
         
        this.$ajax({
           method: 'GET',
           url: urlstr
          })
          
          this.sswn_doing = parseInt( (this.data5 - this.sswn_data)*60/100 )
        if( this.sswn_doing < 0 ) this.sswn_doing = this.sswn_doing *-1
          
           if( this.data5 > 0 ) {
          
             this.sswnisOn = true
             this.sswnisOff = false
             this.sswnisDanger = false
             
          } else {
          
             this.sswnisOn = false
             this.sswnisOff = true
             this.sswnisDanger = false
          
          }
          
          // this.sswn_data = this.data5
           this.sswn_target = this.data5
           this.sswn_disable = true
           
       } else {
         alert('側窓南 is busy' )
          this.data5 = this.sswn_target
       }    
       //   this.getSensorsData()
     },
     
     moveXXXX() {
        alert('Move XXX' + this.data6)
     },
     
     tunOnOffFan() {
     
       // alert('tunOnOffFan')
        if( this.fanisOff ) {
        console.log('Turn On Fan')
        
        this.fan_enable = 'オン'
        this.fan_action = 'オフ'
             
       this.fanisOn = true
       this.fanisOff = false
      this.fanisDanger = false
             
         this.$ajax({
           method: 'GET',
         //  url: 'http://47.74.5.223:7542/do?gwid=KASO03HM&ofid=FAN&ofvalue=1'
           url: 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&ofid=FAN&ofvalue=1'
          })
          
          this.openDialogVisible1 = false
          
          this.fan_doing = 10
          
          return
       }
       
       if( this.fanisOn ) {
        console.log('Turn Off Fan')
         this.fan_enable = 'オフ'
         this.fan_action = 'オン'
             
         this.fanisOn = false
         this.fanisOff = true
         this.fanisDanger = false
             
         this.$ajax({
           method: 'GET',
      //     url: 'http://47.74.5.223:7542/do?gwid=KASO03HM&ofid=FAN&ofvalue=2'
           url: 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&ofid=FAN&ofvalue=2'
          })
          
         this.openDialogVisible1 = false
         
         this.fan_doing = 10
         
         return
       }
       
     
     },
     
     
     
      tunOnOffLight() {
     
       //alert('tunOnOffLight')
       
       if( this.lightisOff ) {
       this.light_enable = 'オン'
             this.light_action = 'オフ'
             
             this.lightisOn = true
             this.lightisOff = false
             this.lightisDanger = false
             
      
         this.$ajax({
           method: 'GET',
      //     url: 'http://47.74.5.223:7542/do?gwid=KASO03HM&ofid=LIGHT&ofvalue=1'
           url: 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&ofid=LIGHT&ofvalue=1'
          })
          
          this.openDialogVisible = false
          
          this.light_doing = 10
          
          return
       }
       
       if( this.lightisOn ) {
       
        this.light_enable = 'オフ'
             this.light_action = 'オン'
             
             this.lightisOn = false
             this.lightisOff = true
             this.lightisDanger = false
             
         this.$ajax({
           method: 'GET',
     //      url: 'http://47.74.5.223:7542/do?gwid=KASO03HM&ofid=LIGHT&ofvalue=2'
           url: 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&ofid=LIGHT&ofvalue=2'
          })
          
          this.openDialogVisible = false
          
          this.light_doing = 10
          
          return
       }
       
        
        
     },
     
      tunOnOffPump() {
     
       // alert('tunOnOffPump')
       
      if( this.pumpisOff ) {
      this.pump_enable = 'オン'
             this.pump_action = 'オフ'
             
             this.pumpisOn = true
             this.pumpisOff = false
             this.pumpisDanger = false   
         this.$ajax({
           method: 'GET',
        //   url: 'http://47.74.5.223:7542/do?gwid=KASO03HM&ofid=WATER&ofvalue=1'
           url: 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&ofid=WATER&ofvalue=1'
          })
          
          this.openDialogVisible2 = false
          
          this.pump_doing = 10
          
          return
       }
       
       if( this.pumpisOn ) {
        this.pump_enable = 'オフ'
             this.pump_action = 'オン'
             
             this.pumpisOn = false
             this.pumpisOff = true
             this.pumpisDanger = false
         this.$ajax({
           method: 'GET',
         //  url: 'http://47.74.5.223:7542/do?gwid=KASO03HM&ofid=WATER&ofvalue=2'
           url: 'http://47.74.5.223:7542/do?gwid=' + this.gwid + '&ofid=WATER&ofvalue=2'
          })
          
          this.openDialogVisible2 = false
          
          this.pump_doing = 10
          
          return
       }

        
     },
     
      getSensorsData() {
       this.$ajax({
         method: 'GET',
      //   url: 'http://47.74.5.223:7542/query?gwid=KASO03HM'
         url: 'http://47.74.5.223:7542/query?gwid=' + this.gwid
       })
       .then( res => {
          var objstr = JSON.stringify(res.data)
        //  console.log(objstr)
          var objres = JSON.parse(objstr)
          
          if( this.nnsf_doing == 0 ) { 
          this.nnsf_disable = false
          this.xdata1 = parseInt( objres.NNSF )
          if( this.first_time == 1 ) this.data1 = parseInt( objres.NNSF )
          this.nnsf_data = parseInt( objres.NNSF )
          
          if( this.xdata1 > 0 ) {
          
             this.nnsfisOn = true
             this.nnsfisOff = false
             this.nnsfisDanger = false
             
          } else {
          
             this.nnsfisOn = false
             this.nnsfisOff = true
             this.nnsfisDanger = false
          
          }
          } else {
            this.nnsf_doing--
            
            var nnsf_now_postion = 0
            
            if( this.nnsf_target > this.nnsf_data ) nnsf_now_postion = this.nnsf_target - 100/60*this.nnsf_doing
            else nnsf_now_postion = this.nnsf_target + 100/60*this.nnsf_doing
            
           // this.xdata1 = nnsf_now_postion.toFixed(0) + '% -->' + this.nnsf_target
           this.xdata1 = nnsf_now_postion.toFixed(0)
            
          }
          
          if( this.sesf_doing == 0 ){
          this.sesf_disable = false
          this.xdata2 = parseInt( objres.SESF )
          if( this.first_time == 1 ) this.data2 = parseInt( objres.SESF )
          this.sesf_data = parseInt( objres.SESF )
          
          
           if( this.data2 > 0 ) {
          
             this.sesfisOn = true
             this.sesfisOff = false
             this.sesfisDanger = false
             
          } else {
          
             this.sesfisOn = false
             this.sesfisOff = true
             this.sesfisDanger = false
          
          }
          } else {
          this.sesf_doing--
          
          var sesf_now_postion = 0
            
          if( this.sesf_target > this.sesf_data ) sesf_now_postion = this.sesf_target - 100/60*this.sesf_doing
          else sesf_now_postion = this.sesf_target + 100/60*this.sesf_doing
            
          //this.xdata2 = sesf_now_postion.toFixed(0) + '% -->' + this.sesf_target
            this.xdata2 = sesf_now_postion.toFixed(0)
          }
          
          if( this.swsf_doing == 0 ){
          this.swsf_disable = false
          this.xdata3 = parseInt( objres.SWSF )
          if( this.first_time == 1 ) this.data3 = parseInt( objres.SWSF )
          this.swsf_data = parseInt( objres.SWSF )
           if( this.data3 > 0 ) {
          
             this.swsfisOn = true
             this.swsfisOff = false
             this.swsfisDanger = false
             
          } else {
          
             this.swsfisOn = false
             this.swsfisOff = true
             this.swsfisDanger = false
          
          }
          
           } else {
          this.swsf_doing--
          
          var swsf_now_postion = 0
            
            if( this.swsf_target > this.swsf_data ) swsf_now_postion = this.swsf_target - 100/60*this.swsf_doing
            else swsf_now_postion = this.swsf_target + 100/60*this.swsf_doing
            
           // this.xdata3 = swsf_now_postion.toFixed(0) + '% -->' + this.swsf_target
            this.xdata3 = swsf_now_postion.toFixed(0)
          }
          
          if( this.nswn_doing == 0 ){
          this.nswn_disable = false
          if( this.first_time == 1 ) this.data4 = parseInt( objres.NSWN )
          this.xdata4 = parseInt( objres.NSWN )
          this.nswn_data = parseInt( objres.NSWN )
          
          if( this.data4 > 0 ) {
          
             this.nswnisOn = true
             this.nswnisOff = false
             this.nswnisDanger = false
             
          } else {
          
             this.nswnisOn = false
             this.nswnisOff = true
             this.nswnisDanger = false
          
          }
          
           } else {
          this.nswn_doing--
          
          var nswn_now_postion = 0
            
            if( this.nswn_target > this.nswn_data ) nswn_now_postion = this.nswn_target - 100/60*this.nswn_doing
            else nswn_now_postion = this.nswn_target + 100/60*this.nswn_doing
            
           // this.xdata4 = nswn_now_postion.toFixed(0) + '% -->' + this.nswn_target
            this.xdata4 = nswn_now_postion.toFixed(0)
            
          }
          
          if( this.sswn_doing == 0 ){
          this.sswn_disable = false
          if( this.first_time == 1 ) this.data5 = parseInt( objres.SSWN )
          this.xdata5 = parseInt( objres.SSWN )
          
          this.sswn_data = parseInt( objres.SSWN )
          
           if( this.data5 > 0 ) {
          
             this.sswnisOn = true
             this.sswnisOff = false
             this.sswnisDanger = false
             
          } else {
          
             this.sswnisOn = false
             this.sswnisOff = true
             this.sswnisDanger = false
          
          }
          
           } else {
          this.sswn_doing--
          
          var sswn_now_postion = 0
            
            if( this.sswn_target > this.sswn_data ) sswn_now_postion = this.sswn_target - 100/60*this.sswn_doing
            else sswn_now_postion = this.sswn_target + 100/60*this.sswn_doing
            
          //  this.xdata5 = sswn_now_postion.toFixed(0) + '% -->' + this.sswn_target
            this.xdata5 = sswn_now_postion.toFixed(0)
          }
          
          this.first_time = 0
          
          
          if( this.fan_doing == 0) {
          
           if( objres.FAN == 'Off' ) {
             this.fan_enable = 'オフ'
             this.fan_action = 'オン'
             
             this.fanisOn = false
             this.fanisOff = true
             this.fanisDanger = false
             
          } else {
             this.fan_enable = 'オン'
             this.fan_action = 'オフ'
             
             this.fanisOn = true
             this.fanisOff = false
             this.fanisDanger = false
            
          }
          }else {
            this.fan_doing--
          }
          
          if( this.light_doing == 0) {
          
          if( objres.LIGHTING == 'Off' ) {
             this.light_enable = 'オフ'
             this.light_action = 'オン'
             
             this.lightisOn = false
             this.lightisOff = true
             this.lightisDanger = false
            
          } else {
             this.light_enable = 'オン'
             this.light_action = 'オフ'
             
             this.lightisOn = true
             this.lightisOff = false
             this.lightisDanger = false
          }
          
          } else {
            this.light_doing--
          }
          
          if( this.pump_doing == 0 ){
          
           if( objres.WATER == 'Off' ) {
             this.pump_enable = 'オフ'
             this.pump_action = 'オン'
             
             this.pumpisOn = false
             this.pumpisOff = true
             this.pumpisDanger = false
            
          } else {
             this.pump_enable = 'オン'
             this.pump_action = 'オフ'
             
             this.pumpisOn = true
             this.pumpisOff = false
             this.pumpisDanger = false   
          }
          
          } else {
            this.pump_doing--
          }
          
          
          
          
       })
       .catch( error => {
          console.log(error)
       })

       
    },
     
     
     
    openDevice() {
      this.$confirm('照明設備即將開啟請確認，如有預設條件將被取消', null, {
        confirmButtonText: '確認',
        cancelButtonText: '取消',
        class: 'openDevice',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '成功を開啟!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '成功を取消',
          })
        })
    },
  },
}
</script>
<style lang="scss" scoped>
#deviceStatus {
  overflow: hidden;
  text-align: left;
}
.mt-27 {
  margin-top: 27px;
}

.switch {
  padding: 40px 30px;
  .switch-content {
    width: 176px;
    height: 120px;
    padding: 16px 18px;
    line-height: 25px;

    border-radius: 5px;
    .switch-first {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      letter-spacing: 0;
    }
    .switch-stats {
      font-family: PingFangSC-Regular;
      font-size: 18px;
      letter-spacing: 0;
    }
    .switch-retry {
      display:none;
      width: 65%;
      position: relative;
      top: -18px;
      opacity: 0.8;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: right;
    }
    .switch-button {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      letter-spacing: 0;
      border-radius: 2px;
      margin: 14px 0 0;
      padding: 2px 30px;
      background-color: transparent;
    }
  }
}
</style>
