
<template>
  <div id="conditionSetting">
    <div class="content-block" id="home4">
      <div class="first-title">{{ $t("Condition_Title") }}</div>
      <div class="bg-write setSchedule">
        <el-row :gutter="30">
          <el-col :span="6">
            <div :class="show_div1">
            <div :class="{ 'setting-content bg-on': Cond1On, 'setting-content bg-off': Cond1Off }">
              <div class="schedule-stats"  >{{ Cond_Enable1 }}</div>
              <div class="schedule-time">{{Condition_Rule_Name1}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit1" @click="doedit($event)" >{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del1" @click="dodel($event)">{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div :class="show_div2">
            <div :class="{ 'setting-content bg-on': Cond2On, 'setting-content bg-off': Cond2Off }">
              <div class="schedule-stats">{{ Cond_Enable2 }}</div>
              <div class="schedule-time">{{Condition_Rule_Name2}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit2" @click="doedit($event)" >{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del2" @click="dodel($event)">{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div :class="show_div3">
            <div :class="{ 'setting-content bg-on': Cond3On, 'setting-content bg-off': Cond3Off }">
              <div class="schedule-stats">{{ Cond_Enable3 }}</div>
              <div class="schedule-time">{{Condition_Rule_Name3}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit3" @click="doedit($event)">{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del3" @click="dodel($event)">{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div
              class="schedule-content bg-off"
              @click="new_rule"
              :style="{cursor:'pointer',width:'194px'}"
            >
              <el-button class="add-content" type="text">
                <div :style="{margin:'19px auto'}">
                  <i class="el-icon-add"></i>
                </div>
                <div class="text-align-center bold add-text">
                  <span>{{ $t("Condition_New_Label") }}</span>
                </div>
              </el-button>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="30" class="mt-27">
          <el-col :span="6">
            <div :class="show_div4">
            <div :class="{ 'setting-content bg-on': Cond4On, 'setting-content bg-off': Cond4Off }">
              <div class="schedule-stats">{{ Cond_Enable4 }}</div>
              <div class="schedule-time">{{Condition_Rule_Name4}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit4" @click="doedit($event)">{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del4" @click="dodel($event)">{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div :class="show_div5">
            <div :class="{ 'setting-content bg-on': Cond5On, 'setting-content bg-off': Cond5Off }">
              <div class="schedule-stats">{{ Cond_Enable5 }}</div>
              <div class="schedule-time">{{Condition_Rule_Name5}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit"  id="edit5" @click="doedit($event)" >{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del5" @click="dodel($event)">{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div :class="show_div6">
            <div :class="{ 'setting-content bg-on': Cond6On, 'setting-content bg-off': Cond6Off }">
              <div class="schedule-stats">{{ Cond_Enable6 }}</div>
              <div class="schedule-time">{{Condition_Rule_Name6}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit6" @click="doedit($event)" >{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del6" @click="dodel($event)">{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
           <el-col :span="6">
            <div :class="show_div7">
            <div :class="{ 'setting-content bg-on': Cond7On, 'setting-content bg-off': Cond7Off }">
              <div class="schedule-stats">{{ Cond_Enable7 }}</div>
              <div class="schedule-time">{{Condition_Rule_Name7}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit7">{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del7" @click="dodel($event)">{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
          </el-row>
          
          <el-row :gutter="30" class="mt-27">
          <el-col :span="6">
            <div :class="show_div8">
            <div :class="{ 'setting-content bg-on': Cond8On, 'setting-content bg-off': Cond8Off }">
              <div class="schedule-stats">{{ Cond_Enable8 }}</div>
              <div class="schedule-time">{{Condition_Rule_Name8}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit8" @click="doedit($event)">{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del8" @click="dodel($event)">{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div :class="show_div9">
            <div :class="{ 'setting-content bg-on': Cond9On, 'setting-content bg-off': Cond9Off }">
              <div class="schedule-stats">{{ Cond_Enable9 }}</div>
              <div class="schedule-time">{{Condition_Rule_Name9}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit"  id="edit9" @click="doedit($event)" >{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del9" @click="dodel($event)">{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div :class="show_div10">
            <div :class="{ 'setting-content bg-on': Cond10On, 'setting-content bg-off': Cond10Off }">
              <div class="schedule-stats">{{ Cond_Enable10 }}</div>
              <div class="schedule-time">{{Condition_Rule_Name10}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit10" @click="doedit($event)" >{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del10" @click="dodel($event)" >{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
           <el-col :span="6">
            <div :class="show_div11">
            <div :class="{ 'setting-content bg-on': Cond11On, 'setting-content bg-off': Cond11Off }">
              <div class="schedule-stats">{{ Cond_Enable11 }}</div>
              <div class="schedule-time">{{Condition_Rule_Name11}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit11" @click="doedit($event)">{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del11" @click="dodel($event)" >{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
          </el-row>
          
        <!-- モダール ——> 新增條件設置 -->
        <el-dialog
          :title="dialog_title"
          :visible.sync="addConditionsVisible"
          class="addConditions"
          :close-on-click-modal="false"
        >
          <el-form ref="dialogForm" :model="dialogForm" class="check-list">
            <div class="padding-border-bottom">
              <el-form-item class="inputMessage">
                <div class="width-left text-align-center">
                  <label for class="label-name">
                    <span :style="{color:'#ff0000'}">*</span>タイトル
                  </label>
                </div>
                 <div class="width-right">
                  <el-col :span="18">
                  <el-input v-model="name" :placeholder="cond_condition1" style="width:250px;"></el-input>
                  </el-col>
                   <el-col :span="6">
                  <el-checkbox v-model="dialogForm.enable">{{ $t("Schedule_Enable_Label") }}</el-checkbox>
                  </el-col>
                </div>
                
              </el-form-item>
              
              <el-form-item class="inputMessage">
                <div class="width-left">
                  <span>{{ $t("New_Schedle_Effective_Date_Label") }}</span>
                </div>
                <div class="width-right history-message">
                  <el-date-picker
                    :style="{width:unaddEndTimeDate}"
                    v-model="startTimeDate"
                    type="date"
                    @change="(value) => YYYYMMchangeHandler(value)"
                    placeholder="..."
                  ></el-date-picker>
                  <span class="input-time-line">-</span>
                  <el-date-picker
                    :style="{width:unaddEndTimeDate}"
                    v-model="stopTimeDate"
                    type="date"
                    :placeholder="schedule_end_time"
                  ></el-date-picker>
                </div>
              </el-form-item>
              <el-form-item class="inputMessage">
                <div class="width-left">
                  <span>{{ $t("New_Schedle_Effective_Time_Label") }}</span>
                </div>
                <div class="width-right history-message">
                  <el-time-picker
                    v-model="startTime"
                    :picker-options="{selectableRange: selectStartTime}"
                    placeholder="..."
                    :style="{width:unaddEndTime,margin:addEndTimeDateLeft}"
                    :class="alldayyesno"
                  ></el-time-picker>
                  <span :class="alldayyesno" >-</span>
                  <el-time-picker
                    v-model="stopTime"
                    :picker-options="{selectableRange: selectStopTime}"
                    :placeholder="schedule_end_time_Point"
                    :style="{width:unaddEndTime,margin:addEndTimeDateLeft}"
                    :class="alldayyesno"
                  ></el-time-picker>
                  <el-checkbox
                    v-model="endDay"
                    :style="{margin:'8px 0',width:'15%'}"
                    @change="addEndTime"
                  >{{ $t("New_Schedle_End_Date_Label") }}</el-checkbox>
                </div>
              </el-form-item>
              
              <el-form-item class="inputMessage">
                <div class="width-left">
                  <span>{{ $t("New_Condition_Priority_Label") }}</span>
                </div>
                <div class="width-right selectList">
                  <el-select v-model="formSelect" placeholder="1" :style="{width: '100%'}">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                    <el-option label="4" value="4"></el-option>
                    <el-option label="5" value="5"></el-option>
                    <el-option label="6" value="6"></el-option>
                    <el-option label="7" value="7"></el-option>
                    <el-option label="8" value="8"></el-option>
                    <el-option label="9" value="9"></el-option>
                  </el-select>
                </div>
              </el-form-item>
            </div>
            
            <div class="padding-border-bottom">
              <el-form-item class="inputMessage">
                <div class="width-left">
                  <span>{{$t("Condition_Sensor_Label") }}</span>
                </div>
                <div class="width-right selectList">
                <ul>
                <li v-for="(item2, index2) in items2" :key="item2.idx">
                 <span>{{ item2.idx }}</span>  
                 
                  <el-select v-model="items2[index2].blacket2" class="hide_div" placeholder="（" :style="{width:'60px'}" size="small">
                    <el-option 
                      v-for="blacketListItem in blacket2ListItems"
                      :key="blacketListItem.class"
                      :label="blacketListItem.name" 
                      :value="blacketListItem.symbol" 
                     >
                     <span>{{blacketListItem.name}}</span>
                     </el-option>
                  </el-select>
                
                <el-select v-model="items2[index2].sensor" :placeholder="schedule_select_device" :style="{width:'110px'}" size="small">
                    <el-option
                      v-for="sensorListItem in sensorListItems"
                      :key="sensorListItem.class"
                      :label="sensorListItem.name" 
                      :value="sensorListItem.param" 
                    >
                    <span>{{sensorListItem.name}}</span>
                    </el-option>
                  </el-select>
                  
                  <el-select v-model="items2[index2].op" placeholder=">" :style="{width:'60px'}" size="small">
                    <el-option
                      v-for="op2ListItem in op2ListItems"
                      :key="op2ListItem.class"
                     :label="op2ListItem.name" 
                      :value="op2ListItem.symbol" 
                    >
                    <span>{{op2ListItem.name}}</span>
                    </el-option>
                  </el-select>
                  
                  <el-input v-model="items2[index2].value" placeholder="0" :style="{width:'60px'}" ></el-input>
                  
                  <el-select v-model="items2[index2].bracket" class="hide_div" placeholder=")" :style="{width:'60px'}" size="small">
                    <el-option 
                      v-for="blacket2ListItem in blacket2ListItems"
                      :key="blacket2ListItem.class"
                      :label="blacket2ListItem.name" 
                      :value="blacket2ListItem.symbol" 
                     >
                     <span>{{blacket2ListItem.name}}</span>
                     </el-option>
                  </el-select>
                  
                  <el-select v-model="items2[index2].next" placeholder="no" :style="{width:'70px'}" size="small">
                    <el-option 
                      v-for="nextListItem in nextListItems"
                      :key="nextListItem.class"
                      :label="nextListItem.name" 
                      :value="nextListItem.symbol" 
                     >
                     <span>{{nextListItem.name}}</span>
                     </el-option>
                  </el-select>
                  
                  <el-button class="item" @click="addDeviceRow2(index2)">{{ item2.btn }}</el-button>
                   </li>
                  </ul>
                  
                </div>
              </el-form-item>
            </div>
            <div class="padding-border-bottom">
              <el-form-item class="inputMessage">
                <div class="width-left">
                  <span>{{ $t("New_Schedle_Device_List_Label") }}</span>
                </div>
                <div class="width-right selectList">
                
                <ul>
                <li v-for="(item, index) in items" :key="item.idx">
                 <span>{{ item.idx }}</span>  
                <el-select v-model="items[index].device" @change="onSelectDevice" :placeholder="schedule_select_device" size="medium">
                    <el-option
                      v-for="deviceListItem in deviceListItems"
                      :key="deviceListItem.class"
                      :label="deviceListItem.name" 
                      :value="deviceListItem.param" 
                    >
                    <span>{{deviceListItem.name}}</span>
                    </el-option>
                  </el-select>
                  
                  <el-select v-model="items[index].op" :class="items[index].hide1" placeholder="オープン" size="medium">
                    <el-option
                      v-for="opListItem in opListItems"
                      :key="opListItem.class"
                     :label="opListItem.name" 
                      :value="opListItem.idx" 
                    >
                    <span>{{opListItem.name}}</span>
                    </el-option>
                  </el-select>
                  
                  <el-select v-model="items[index].op2" @change="onForceClose" :class="items[index].hide2" style="width:150px;" placeholder="オープン" size="medium">
                    <el-option
                      v-for="opListItem2 in opListItems2"
                      :key="opListItem2.class"
                     :label="opListItem2.name" 
                      :value="opListItem2.idx" 
                    >
                    <span>{{opListItem2.name}}</span>
                    </el-option>
                  </el-select>
                  
                  <el-input v-model="items[index].value" :class="items[index].hide3" style="width:80px;" :placeholder="value"></el-input>
                  <span :class="items[index].hide3" >%</span>
                  
                  <el-button class="item" @click="addDeviceRow(index)">{{ item.btn }}</el-button>
                   </li>
                  </ul>
                  
                </div>
              </el-form-item>
            </div>
            <div :style="{padding:'0 30px 23px'}">
              <el-form-item class="inputMessage">
                <div class="width-left">
                  <span>{{ $t("New_Schedle_Mail_Notify_Label") }}</span>
                </div>
                <div class="width-right">
                  <el-input v-model="emailAddress" :placeholder="condition_mailbox"></el-input>
                </div>
              </el-form-item>
              
              <el-form-item class="inputMessage">
                <div class="width-left text-align-center">
                  <label for class="label-name">{{ $t("New_Schedle_Comment_Label") }}</label>
                </div>
                <div class="width-right">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    :placeholder="condition_comment"
                    v-model="examTextarea"
                  ></el-input>
                </div>
              </el-form-item>
            </div>
            <div class="text-align-right" :style="{padding:'0 30px 20px'}">
              <el-button class="cancelBtn" @click="addConditionsVisible= false">{{ $t("New_Schedle_Cancel_Label") }}</el-button>
              <el-button class="successBtn" @click="doConfirm">{{ $t("New_Schedle_Confirm_Label") }}</el-button>
            </div>
          </el-form>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
// const weekOptions = ['週一', '週二', '週三', '週四', '週五', '週六', '週日']
export default {
  name: 'ConditionSetting',
  data() {
    return {
      
      condition_mailbox : this.$t('Schedule_mailbox_placeholder'),
      condition_comment : this.$t('Schedule_comment_placeholder'),
      
      items: [
        { idx: 1, btn:'+', device: '', op: '',op2: '', value: '', hide1:'show_div', hide2:'hide_div', hide3:'hide_div' },
      ],
      items2: [
        { idx: 1, btn:'+', sensor: '', op: '', value: '', next : '', blacket :'', blacket2 :'' },
      ],
      
      alldayyesno :'show_sel3',
      
      show_div1:'hide_div',
      show_div2:'hide_div',
      show_div3:'hide_div',
      show_div4:'hide_div',
      show_div5:'hide_div',
      show_div6:'hide_div',
      show_div7:'hide_div',
      show_div8:'hide_div',
      show_div9:'hide_div',
      show_div10:'hide_div',
      show_div11:'hide_div',
      
      Cond1On : true,
      Cond1Off : false,
      Cond2On : true,
      Cond2Off : false,
      Cond3On : true,
      Cond3Off : false,
      Cond4On : true,
      Cond4Off : false,
      Cond5On : true,
      Cond5Off : false,
      Cond6On : true,
      Cond6Off : false,
      Cond7On : true,
      Cond7Off : false,
      Cond8On : true,
      Cond8Off : false,
      Cond9On : true,
      Cond9Off : false,
      Cond10On : true,
      Cond10Off : false,
      Cond11On : true,
      Cond11Off : false,
      
      Cond_Enable1 : this.$t('Schedule_Enable_Label'),
      Cond_Enable2 : this.$t('Schedule_Enable_Label'),
      Cond_Enable3 : this.$t('Schedule_Enable_Label'),
      Cond_Enable4 : this.$t('Schedule_Enable_Label'),
      Cond_Enable5 : this.$t('Schedule_Enable_Label'),
      Cond_Enable6 : this.$t('Schedule_Enable_Label'),
      Cond_Enable7 : this.$t('Schedule_Enable_Label'),
      Cond_Enable8 : this.$t('Schedule_Enable_Label'),
      Cond_Enable9 : this.$t('Schedule_Enable_Label'),
      Cond_Enable10 : this.$t('Schedule_Enable_Label'),
      Cond_Enable11 : this.$t('Schedule_Enable_Label'),
     
      
      Condition_Rule_Name1 :'LED每日設定OFF161',
      Condition_Rule_Name2 :'LED每日設定OFF161',
      Condition_Rule_Name3 :'LED每日設定OFF161',
      Condition_Rule_Name4 :'LED每日設定OFF161',
      Condition_Rule_Name5 :'LED每日設定OFF161',
      Condition_Rule_Name6 :'LED每日設定OFF161',
      Condition_Rule_Name7 :'LED每日設定OFF161',
      Condition_Rule_Name8 :'LED每日設定OFF161',
      Condition_Rule_Name9 :'LED每日設定OFF161',
      Condition_Rule_Name10 :'LED每日設定OFF161',
      Condition_Rule_Name11 :'LED每日設定OFF161',
      
      dialog_title : this.$t('Condition_Dialog_Title_Label_New'),
      cond_condition1 : this.$t('Schedule_Condition1_Label'),
      
      rrid : '0',
      
      addConditionsVisible: false,
      dialogForm: {
        enable: '',
        time: '',
        time2: '',
        textContent: '',
        selects: '',
        firstNum: '',
        equipment: '',
        email: '',
      },
      name: '',
      startTime: '',
      stopTime: '',
      startTimeDate: '',
      stopTimeDate: '',
      
      rules:[],

      textContent: '',
      formSelect: '',
      isEndInputReturnDisabled: true,
      isEndInputMessageDisabled: true,
      unshowSelectSchedule: 'none',
      unshowMonthMessage: 'none',
      unshowWeekMessage: 'none',
      form: {
        region: '',
      },

      emailAddress: '',
      endDay: false,
      endList: '',
      endItems: [
        {
          name: '繰り返さない',
          class: 'returnNo',
        },
        {
          name: '毎日',
          class: 'everyDay',
        },
        {
          name: '毎週 木曜日',
          class: 'everyWeek',
        },
        {
          name: '毎月 第2木曜日',
          class: 'everyMonth',
        },
        {
          name: '毎年 12月13日',
          class: 'everyYears',
        },
        {
          name: '毎週平日（月～金）',
          class: 'everyWeeks',
        },
        {
          name: 'カスタム...',
          class: 'otherSelect',
        },
      ],
      intervalList: '',
      intervalItems: [
        {
          name: 'か日こど',
          class: 'intervalDay',
        },
        {
          name: 'か週こど',
          class: 'intervalWeek',
        },
        {
          name: 'か月こど',
          class: 'intervalMonth',
        },
        {
          name: 'か年こど',
          class: 'intervalYear',
        },
      ],
      sensorListItems: [
        {
          name: '室内温度',
          param: 'LTMP',
          class: 'sensorLTMP',
        },
        {
          name: '室外温度',
          param: 'OTMP',
          class: 'sensorOTMP',
        },
        {
          name: '室内湿度',
          param: 'LHM',
          class: 'sensorLHM',
        },
        {
          name: '室外湿度',
          param: 'OHM',
          class: 'sensorOHM',
        },
        {
          name: '風向',
          param: 'WDIR',
          class: 'sensorWDIR',
        },
        {
          name: '風速',
          param: 'WIND',
          class: 'sensorWIND',
        },
        {
          name: '瞬間風速',
          param: 'QWIND',
          class: 'sensorQWIND',
        },
        {
          name: '時間雨量',
          param: 'RAIN1',
          class: 'sensorRAIN1',
        },
        {
          name: '日雨量',
          param: 'RAIN2',
          class: 'sensorRAIN2',
        },
        {
          name: '紫外線',
          param: 'UVI',
          class: 'sensorUVI',
        },
        {
          name: '照度',
          param: 'LIGHT',
          class: 'sensorLight',
        },
        {
          name: '10分間平均照度',
          param: 'LIGHT10',
          class: 'sensorLight10',
        },
        {
          name: '日射量累積',
          param: 'LIGHT2',
          class: 'sensorLight2',
        },
        {
          name: '土壌湿度',
          param: 'STMP',
          class: 'sensorSTMP',
        },
        {
          name: 'DI1',
          param: 'DI1',
          class: 'sensorDI1',
        },
        {
          name: 'DI2',
          param: 'DI2',
          class: 'sensorDI2',
        },
         {
          name: 'DI3',
          param: 'DI3',
          class: 'sensorDI3',
        },
        {
          name: 'DI4',
          param: 'DI4',
          class: 'sensorDI4',
        },
         {
          name: 'DI5',
          param: 'DI5',
          class: 'sensorDI5',
        },
        {
          name: 'DI6',
          param: 'DI6',
          class: 'sensorDI6',
        },
         {
          name: 'DI7',
          param: 'DI7',
          class: 'sensorDI7',
        },
        {
          name: 'DI8',
          param: 'DI8',
          class: 'sensorDI8',
        },
      ],
       deviceListItems: [
         {
          name: '冷却デバイス',
          idx: '0',
          param:'FAN',
          class: 'deviceFan',
        },
        {
          name: '照明',
          idx: '1',
          param:'LIGHT',
          class: 'deviceLight',
        },
        {
          name: 'ポンプ',
          idx: '2',
          param:'WATER',
          class: 'devicePump',
        },
        {
          name: '天窓北',
          idx: '3',
          param:'NNSF',
          class: 'deviceNNSF',
        },
        {
          name: '天窓西南',
          idx: '4',
          param:'SWSF',
          class: 'deviceSWSF',
        },
        {
          name: '天窓東南',
          idx: '5',
          param:'SESF',
          class: 'deviceSESF',
        },
        {
          name: '側窓北',
          idx: '6',
          param:'NSWN',
          class: 'deviceNSWD',
        },
        {
          name: '側窓南',
          idx: '7',
          param:'SSWN',
          class: 'deviceSSWD',
        },
      ],
       opListItems:[
        {
          name: 'オープン',
          idx: '1',
          class: 'opOpen',
        },
        {
          name: 'クローズ',
          idx: '2',
          class: 'opClose',
        },
        
      ],
      opListItems2:[
        {
          name: 'オープン',
          idx: '1',
          class: 'opOpen',
        },
        {
          name: '強制クローズ',
          idx: '2',
          class: 'opClose',
        },
       
      ],
      op2ListItems:[
        {
          name: '>',
          symbol: '>',
          class: 'opMore',
        },
        {
          name: '<',
          symbol: '<',
          class: 'opLess',
        },
        {
          name: '=',
          symbol: '=',
          class: 'opEqual',
        },
        {
          name: '>=',
          symbol: '>=',
          class: 'opMoreEqual',
        },
        {
          name: '<=',
          symbol: '<=',
          class: 'opLessEqual',
        },
        {
          name: '!=',
          symbol: '!=',
          class: 'opNot',
        },
      ],
      blacket2ListItems:[
         {
          name: 'none',
          symbol: ' ',
          class: 'bkNone',
        },
        {
          name: '(',
          symbol: '(',
          class: 'bkLeft',
        },
        {
          name: ')',
          symbol: ')',
          class: 'bkRight',
        },
        
      ],
      nextListItems:[
         {
          name: 'no',
          symbol: ' ',
          class: 'bkNone',
        },
        {
          name: 'and',
          symbol: 'and',
          class: 'bkAnd',
        },
        {
          name: 'or',
          symbol: 'or',
          class: 'bkOr',
        },
        
      ],
      valueListItems:[
        {
          name: '2分鍾',
          class: 'value2Mins',
        },
        {
          name: '5分鍾',
          class: 'value5Mins',
        },
        {
          name: '10分鍾',
          class: 'value10Mins',
        },
        {
          name: '0%',
          class: 'op0Per',
        },
        {
          name: '20%',
          class: 'op20Per',
        },
        {
          name: '40%',
          class: 'op40Per',
        },
        {
          name: '60%',
          class: 'op60Per',
        },
        {
          name: '80%',
          class: 'op80Per',
        },
        {
          name: '100%',
          class: 'op100Per',
        },
      ],
      selectOtherList: '毎月 4日',
      selectOtherItems: [
        '毎月 1日',
        '毎月 2日',
        '毎月 3日',
        '毎月 4日',
        '毎月 5日',
        '毎月 6日',
        '毎月 7日',
        '毎月 8日',
        '毎月 9日',
        '毎月 10日',
        '毎月 11日',
        '毎月 12日',
        '毎月 13日',
        '毎月 14日',
        '毎月 15日',
        '毎月 16日',
        '毎月 17日',
        '毎月 18日',
        '毎月 19日',
        '毎月 20日',
        '毎月 21日',
        '毎月 22日',
        '毎月 23日',
        '毎月 24日',
        '毎月 25日',
        '毎月 26日',
        '毎月 27日',
        '毎月 28日',
        '毎月 29日',
        '毎月 30日',
        '毎月 31日',
      ],
      selectOtherWeekList: '月曜日',
      selectOtherWeekItems: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],

      numDate: '',
      numReturn: '',
      radioContent: '',
      inputDate: '',
      examTextarea: '',
      unaddEndTime: '100px',
      unaddEndTimeDate: '125px',
      unaddEndTimeDateShow: 'inline-block',
      addEndTimeDateLeft: '0',
      selectStartTime: '',
      selectStopTime: '',
      // checkAll: false,
      // checkedWeeks: [''],
      // weeks: weekOptions,
      // isIndeterminate: true,
      
      
    }
  },
  created() {
    // this.getDivision()
    this.getRulesData()
    var ip = location.host
    console.log(ip)
  },
  methods: {
    onForceClose(iidx) {
  console.log(iidx)
    if( iidx == '1' ) {
      for( y = 0; y<this.items.length; y++ ) {
            console.log(this.items[y].op2)
            if( this.items[y].op2 == iidx ) {
               this.items[y].hide3 = 'show_sel3'
            }
         }
    }
     if( iidx == '2' ) {
      for( var y = 0; y<this.items.length; y++ ) {
            console.log(this.items[y].op2)
            if( this.items[y].op2 == iidx ) {
               this.items[y].hide3 = 'hide_div'
            }
         }
    }
    
    },
    onSelectDevice(indexx) {
      console.log(indexx)
      if( indexx == 'NNSF' || indexx == 'SESF' || indexx == 'SWSF' || indexx == 'NSWN' || indexx == 'SSWN' ) {
         for( var y = 0; y<this.items.length; y++ ) {
            console.log(this.items[y].device)
            if( this.items[y].device == indexx ) {
               this.items[y].hide1 = 'hide_div'
               this.items[y].hide2 = 'show_sel2'
               this.items[y].hide3 = 'show_sel3'
            }
         }
      }
      
      if( indexx == 'FAN' || indexx == 'LIGHT' || indexx == 'WATER') {
         for( y = 0; y<this.items.length; y++ ) {
            if( this.items[y].device == indexx ) {
               this.items[y].hide1 = 'show_sel1'
               this.items[y].hide2 = 'hide_div'
               this.items[y].hide3 = 'hide_div'
            }
         }
      }
    },
    dodel(event){
    
     var targetId = event.currentTarget.id
     console.log(targetId)
     
     var myrid = parseInt(targetId.substr(3))
     console.log(myrid)
     
     this.rrid = myrid
    
     this.doDelete() 
      
    },
    
   new_rule() {
     this.clearDialog()
     this.rrid = '0'
     this.dialog_title = this.$t('Condition_Dialog_Title_Label_New')
     this.addConditionsVisible = true
     },
     
   findDeviceOp( param ) {
     console.log(param)
       var deviceOp = ''
       for( var ii = 0; ii<this.opListItems.length; ii++ ) {
          if( this.opListItems[ii].idx == param ) {
          deviceOp = this.opListItems[ii].name
          }
       }
       
       return deviceOp
     },
     
     findSensorName( param ) {
      console.log(param)
       console.log(this.sensorListItems.length)
       var sensorName = ''
       for( var ii = 0; ii<this.sensorListItems.length; ii++ ) {
       
          if( this.sensorListItems[ii].param == param ) {
          sensorName = this.sensorListItems[ii].name
          }
       }
       
       return sensorName
     },
     
     findDeviceName( param ) {
       console.log(param)
       console.log(this.deviceListItems.length)
       var deviceName = ''
       for( var ii = 0; ii<this.deviceListItems.length; ii++ ) {
       console.log(this.deviceListItems[ii].param)
          if( this.deviceListItems[ii].param == param ) {
          deviceName = this.deviceListItems[ii].name
          }
       }
       
       return deviceName
     },
  doedit(event){
    
    var targetId = event.currentTarget.id
    console.log(targetId)
    
    this.clearDialog()
    
    this.dialog_title = this.$t('Condition_Dialog_Title_Label_Edit')
    
    for( var j =0; j<this.rules.length; j++){
            var rid = this.rules[j].rid
            
            var edit = 'edit' + rid
            if( edit == targetId ){
               this.rrid = rid
               console.log(this.rrid)
               this.name = this.rules[j].name
               
               if( this.rules[j].enable == '1' ) this.dialogForm.enable = true
             else this.dialogForm.enable = false
             this.formSelect =  this.rules[j].priority
               
               var todayDay = new Date()
               
               console.log(this.rules[j].sdate)
               console.log(this.rules[j].edate)
               
               if( this.rules[j].sdate ) this.startTimeDate = new Date( this.rules[j].sdate )
               if( this.rules[j].edate ) this.stopTimeDate = new Date( this.rules[j].edate )
               
               if( this.rules[j].allday ) {
                  this.endDay = true
                  this.alldayyesno = 'hide_div'
               } else {
                  this.endDay = false
                  this.alldayyesno = 'show_sel3'
                if( this.rules[j].stime ) this.startTime = new Date(this.makeDateStr(todayDay) + ' ' + this.rules[j].stime)
               if( this.rules[j].etime ) this.stopTime = new Date(this.makeDateStr(todayDay) + ' ' + this.rules[j].etime)
               }
               
               
                if( this.rules[j].conditions ) {
                 while(this.items2.length > 0) {
                   this.items2.pop()
                 }
                 
                 for( var t = 0; t< this.rules[j].conditions.length; t++ ) {
                   var myitem2 = {}
                    myitem2.idx = t+1
                    myitem2.btn = '-'
                    if( t == this.rules[j].conditions.length-1 ) myitem2.btn = '+'
                    myitem2.sensor = this.rules[j].conditions[t].param 
                    myitem2.op = this.rules[j].conditions[t].op
                    myitem2.value = this.rules[j].conditions[t].value
                    myitem2.next = this.rules[j].conditions[t].next
                    this.items2.push(myitem2)
                 }
      
       
               }
               
               if( this.rules[j].actions ) {
                 while(this.items.length > 0) {
                   this.items.pop()
                 }
                 
                 for( var k = 0; k< this.rules[j].actions.length; k++ ) {
                   var myitem = {}
                    myitem.idx = k+1
                    myitem.btn = '-'
                    if( k == this.rules[j].actions.length-1 ) myitem.btn = '+'
                    myitem.device = this.rules[j].actions[k].param
                    
                    if( myitem.device == 'NNSF' || myitem.device == 'SESF' || myitem.device == 'SWSF' || myitem.device == 'NSWN' || myitem.device == 'SSWN') {
                       if( this.rules[j].actions[k].value == '999' ) {
                          myitem.op2 = '2'
                         myitem.hide1 = 'hide_div'
                         myitem.hide2 = 'show_sel2'
                         myitem.hide3 = 'hide_div'
                       
                       } else {
                         myitem.value = this.rules[j].actions[k].value
                         myitem.op2 = '1'
                         myitem.hide1 = 'hide_div'
                         myitem.hide2 = 'show_sel2'
                         myitem.hide3 = 'show_sel3'
                       }
                       
                    } else {
                      myitem.op = this.rules[j].actions[k].value
                      myitem.hide1 = 'show_sel1'
                      myitem.hide2 = 'hide_div'
                      myitem.hide3 = 'hide_div'
                    }
                    
                    
                    this.items.push(myitem)
                 }
      
       
               }
               
              
             
             
            }
           
    }
    
    this.addConditionsVisible = true
    
  },
   clearDialog() {
      this.name = '' 
      this.startTime = ''
      this.stopTime = ''
      this.startTimeDate = ''
      this.stopTimeDate = ''
      this.textContent = ''
      this.formSelect = ''
      
      while(this.items.length > 0) {
        this.items.pop()
      }
      
       var newitem = {}
       newitem.idx = 1
       newitem.btn = '+'
       newitem.device = ''
       newitem.op = ''
       newitem.value = ''
       newitem.hide1 = 'show_sel1'
       newitem.hide2 = 'hide_div'
       newitem.hide3 = 'hide_div'
       this.items.push(newitem)
      
       while(this.items2.length > 0) {
        this.items2.pop()
      }
      
      var newitem2 = {}
       newitem2.idx = 1
       newitem2.btn = '+'
       newitem2.device = ''
       newitem2.op = ''
       newitem2.value = ''
       this.items2.push(newitem2)
      
     },
     
  addDeviceRow2(index2) {
       console.log(this.items2[0].device)
      // this.items[0].device = '天窓西南'
      if( index2 ==  this.items2.length - 1 ) { 
       var newitem2 = {}
       newitem2.idx = this.items2.length + 1
       newitem2.btn = '+'
       newitem2.sensor = ''
       newitem2.op = ''
       newitem2.value = ''
       newitem2.blacket = ''
       newitem2.blacket2 = ''
       this.items2[this.items2.length-1].btn = '-'
       this.items2.push(newitem2)
        } else {
         this.items2.splice(index2, 1 )
         console.log(this.items2.length)
         for( var j = 0; j < this.items2.length ; j++ ) {
           this.items2[j].idx = j+1
         }
       }
     },
     addDeviceRow( index ) {
     
       console.log(this.items[0].device)
       if( index ==  this.items.length - 1 ) { 
         var newitem = {}
         newitem.idx = this.items.length + 1
         newitem.btn = '+'
         newitem.device = ''
         newitem.op = ''
         newitem.value = ''
         newitem.hide1 = 'show_sel1'
         newitem.hide2 = 'hide_div'
         newitem.hide3 = 'hide_div'
         this.items[this.items.length-1].btn = '-'
         this.items.push(newitem)
       } else {
         this.items.splice(index, 1 )
         console.log(this.items.length)
         for( var j = 0; j < this.items.length ; j++ ) {
           this.items[j].idx = j+1
         }
       }
     },
     makeDateStr( mydate ) {
       var yyyy = mydate.getFullYear()
       var mm = mydate.getMonth()
       mm = mm + 1
       var mmstr = mm.toString()
       if( mm < 10 ) mmstr = '0' + mmstr
       var dd = mydate.getDate()
       var ddstr = dd.toString()
       if(dd<10) ddstr = '0'+ddstr
       
       return yyyy + '-' + mmstr + '-' + ddstr 
     },
      makeTimeStr( myTime ) {
       var hh = myTime.getHours()
       var hhstr = hh.toString()
       if( hh < 10 ) hhstr = '0' + hhstr
       
       var min = myTime.getMinutes()
       var minstr = min.toString()
       if( min < 10 ) minstr = '0' + minstr
       
       var sec = myTime.getSeconds()
       var secstr = sec.toString()
       if( sec < 10 ) secstr = '0' + secstr
       
       return hhstr + ':' + minstr + ':' + secstr
     },
     
    doDelete() {
        if( this.rrid != '0' ) {
         for( var x = 0; x<this.rules.length; x++ ) {
          var ruobj = this.rules[x]
          
          if( ruobj.rid == this.rrid ) {
            this.rules.splice(x, 1)
            break
          }
         }
       }
       
       this.resolveToCalendar()
       
       this.addConditionsVisible = false
     
     this.$ajax({
         method: 'GET',
         url: 'http://47.74.5.223:7542/condel?gwid=KASO03HM&rid=' + this.rrid
       })
       
       this.getRulesData()
     },
     
     doConfirm() {
       
       var ruleeobj = {}
       
       ruleeobj.rid = this.rrid
       ruleeobj.name = this.name
       
       if( this.dialogForm.enable) ruleeobj.enable = '1'
       else ruleeobj.enable = '0'
       
       ruleeobj.priority = this.formSelect
       
       ruleeobj.sdate = this.makeDateStr(this.startTimeDate)
       ruleeobj.edate = this.makeDateStr(this.stopTimeDate)
       
       if( this.endDay ) {
       
         ruleeobj.allday = '1'
       
       } else {
       
         ruleeobj.stime = this.makeTimeStr(this.startTime)
         ruleeobj.etime = this.makeTimeStr(this.stopTime) 
       }
       
       var conditions = []
      
       for( var q = 0; q< this.items2.length; q++ ){
         var cond = {}
         
         cond.param = this.items2[q].sensor
         cond.op = this.items2[q].op
         cond.value = this.items2[q].value
         cond.next = this.items2[q].next
         
         if( this.items2[q].blacket == '(' || this.items2[q].blacket == ')' ){
            cond.bracket = this.items2[q].blacket
         }
         
         if( this.items2[q].blacket2 == '(' || this.items2[q].blacket2 == ')' ){
            cond.bracket = this.items2[q].blacket2
         }
         
         conditions.push(cond)
       }

       ruleeobj.conditions = conditions
       
       
       var actions = []
       
       for( var k = 0; k< this.items.length; k++ ){
         var action = {}
         
         var devName = this.items[k].device
         
         if( devName == 'NNSF' || devName == 'SESF' || devName == 'SWSF' || devName == 'NSWN' || devName == 'SSWN') {
         
         action.param = this.items[k].device
         if( this.items[k].op2 == '2' ) {
           action.value = '999'        
         } else {
           action.value = this.items[k].value
         }
         
         } else {
         action.param = this.items[k].device
         action.value = this.items[k].op
         }
         
         
        
       //  action.param = this.items[k].device
        // action.value = this.items[k].op
         
         actions.push(action)
       }
       
       ruleeobj.actions = actions
       
       console.log( JSON.stringify(ruleeobj))
       
       if( this.rrid != '0' ) {
         for( var x = 0; x<this.rules.length; x++ ) {
          var ruobj = this.rules[x]
          
          if( ruobj.rid == this.rrid ) {
            this.rules.splice(x, 1)
            break
          }
         }
       }
       
       this.rules.push(ruleeobj)
       
       this.resolveToCalendar()
       
       this.addConditionsVisible = false
     
     this.$ajax({
         method: 'GET',
         url: 'http://47.74.5.223:7542/updaterule?gwid=KASO03HM&ruleobj=' + JSON.stringify(ruleeobj)
       })
       
       this.getRulesData()
     
     },
     
     resolveToCalendar() {
     
     for( var kk =1; kk<12; kk++){
            var divstr2 = 'show_div' + kk
            this[divstr2] = 'hide_div'
      }
     
     for( var j =0; j<this.rules.length; j++){
            var jj = j + 1
            var divstr = 'show_div' + jj
            var namestr = 'Condition_Rule_Name' + jj
            
            this[divstr] = 'show_div'
            this[namestr] = this.rules[j].name.substr(0,10)
            
          var SenableOn = 'Cond'+jj + 'On'
            var SenableOff = 'Cond'+jj + 'Off'
            var SenableLabel = 'Cond_Enable' + jj
          
          if( this.rules[j].enable == '0' ) {
            
            this[SenableOn] = false
          this[SenableOff] = true
           this[SenableLabel] = '無効'
          
            }else{
            this[SenableOn] = true
          this[SenableOff] = false
          this[SenableLabel] = this.$t('Schedule_Enable_Label')
            }
      }
          
     },
     
    getRulesData() {
       this.$ajax({
         method: 'GET',
         url: 'http://47.74.5.223:7542/query2?gwid=KASO03HM'
       })
       .then( res => {
          var objstr = JSON.stringify(res.data)
          console.log(objstr)
          var objres = JSON.parse(objstr)
          
          this.rules = objres.rules
          
          
          this.resolveToCalendar()
          
        })
    },
    /**
     * チェックボックス全て選択
     */
    // handleCheckAllChange(val) {
    //   this.checkedWeeks = val ? weekOptions : []
    //   this.isIndeterminate = false
    // },
    //
    /**
     * チェックボックスの状態
     */
     addEndTime(checked) {
      if (checked === true) {
        console.log('all day')
        this.alldayyesno = 'hide_div'
      //  this.unaddEndTimeDateShow = 'inline-block'
    //    this.unaddEndTimeDate = '125px'
    //    this.unaddEndTime = '100px'
    //    this.addEndTimeDateLeft = 'auto 0 auto 5px'
      } else {
      this.alldayyesno = 'show_sel3'
    //    this.unaddEndTime = '0'
    //    this.unaddEndTimeDate = '230.5px'
       // this.unaddEndTimeDateShow = 'none'
    //   this.unaddEndTimeDateShow = 'inline-block'
    //    this.addEndTimeDateLeft = '0'
      }
    },
    /**
     * ボックス：カスタマイズを選択
     */
    customContent(selection) {
      if (selection === 'カスタム...') {
        this.unshowSelectSchedule = 'block'
      } else {
        this.unshowSelectSchedule = 'none'
      }
    },
    /**
     * ボックス：月を選ぶ
     */
    intervalContent(intervalSelection) {
      // か月こど
      if (intervalSelection === 'か月こど') {
        this.unshowMonthMessage = 'block'
      } else {
        this.unshowMonthMessage = 'none'
      }
      // か週こど
      if (intervalSelection === 'か週こど') {
        this.unshowWeekMessage = 'block'
      } else {
        this.unshowWeekMessage = 'none'
      }
    },
    // なし
    noneMessage(endLabel) {
      console.log(endLabel)
      if (endLabel === 1) {
        this.isEndInputMessageDisabled = true
        this.isEndInputReturnDisabled = true
      }
    },
    // 終了日
    endMessage(endLabel) {
      if (endLabel === 2) {
        this.isEndInputMessageDisabled = false
        this.isEndInputReturnDisabled = true
      }
    },
    // 繰り返し
    endInputReturn(endLabel) {
      if (endLabel === 3) {
        this.isEndInputReturnDisabled = false
        this.isEndInputMessageDisabled = true
      }
    },
  },
}
</script>
<style lang="scss" scoped>
#conditionSetting {
  overflow: hidden;
  text-align: left;
  .padding-border-bottom {
    padding: 0 30px 20px;
    border-bottom: 1px solid #f2f2f2;
  }
}

.mt-27 {
  margin-top: 27px;
}

.show_div{
  display:inline-block;
}

.hide_div{
  display:none;
}

.show_sel1{
  display:inline-block;
  width: 120px;
}

.show_sel2{
  display:inline-block;
  
}

.show_sel3{
  display:inline-block;
  
}


ul {
    margin: 0; 
    padding: 0; 
}
</style>
