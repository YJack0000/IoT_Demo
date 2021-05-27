<template>
  <div id="home">
    <el-col :span="2" class="menu">
      <el-menu default-active="1">
        <div class="menu-logo">
          <div class="logo">
            <img src="./../assets/img/logo.png" width="59px" height="33px">
          </div>
          <a href="#dashboard" id="dashboard_menu" class="menu-img">
            <img src="./../assets/img/stats.png" width="24px" height="24px" class="unactive">
            <img src="./../assets/img/stats_active.png" width="24px" height="24px" class="active">
          </a>
          <div class="logo-line"></div>
          <a href="#deviceStatus" id="deviceStatus_menu" class="menu-img">
            <img src="./../assets/img/equipment.png" width="24px" height="24px" class="unactive">
            <img
              src="./../assets/img/equipment_active.png"
              width="24px"
              height="24px"
              class="active"
            >
          </a>
          <div class="logo-line"></div>
          <a href="#schedule" id="schedule_menu" class="menu-img">
            <img src="./../assets/img/time.png" width="24px" height="24px" class="unactive">
            <img src="./../assets/img/time_active.png" width="24px" height="24px" class="active">
          </a>
          <div class="logo-line"></div>
          <a href="#conditionSetting" id="conditionSetting_menu" class="menu-img">
            <img src="./../assets/img/settings.png" width="24px" height="24px" class="unactive">
            <img
              src="./../assets/img/settings_active.png"
              width="24px"
              height="24px"
              class="active"
            >
          </a>
          <div class="logo-line"></div>
          <a href="#historicalData" id="historicalData_menu" class="menu-img">
            <img src="./../assets/img/history.png" width="24px" height="24px" class="unactive">
            <img src="./../assets/img/history_active.png" width="24px" height="24px" class="active">
          </a>
        </div>
        <div class="loginOn">
          <el-tooltip class="item" effect="dark" content="ログアウト" placement="right">
            <el-button @click="signOut()"></el-button>
          </el-tooltip>
        </div>
      </el-menu>
    </el-col>

    <el-container>
      <el-main :style="{padding:'5px'}">
        <el-row>
          <el-col :span="24" class="content">
            <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23" :span="23" class="left-message">
              <!-- Dashboard画面 -->
              <Dashboard></Dashboard>
              <!-- 設備狀態画面 -->
              <DeviceStatus></DeviceStatus>
              <!-- Schedule画面 -->
              <Schedule></Schedule>
              <!-- 條件設定画面 -->
              <ConditionSetting></ConditionSetting>
              <!-- 歷史數據画面-->
              <HistoricalData></HistoricalData>
            </el-col>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue'
import DeviceStatus from '../components/DeviceStatus.vue'
import Schedule from '../components/Schedule.vue'
import ConditionSetting from '../components/ConditionSetting.vue'
import HistoricalData from '../components/HistoricalData.vue'
;(function() {})
export default {
  name: 'home',
  data() {
    return {
      menuActionId: '#dashboard_menu',
      scrollTop: -1,
    }
  },
  components: {
    Dashboard,
    DeviceStatus,
    Schedule,
    ConditionSetting,
    HistoricalData,
  },
  mounted() {
    //初期化
    var Jquery = this.$
    var that = this
    if (that.$route.hash) {
      that.menuActionId = that.$route.hash + '_menu'
    }

    Jquery('.menu-img').on('click', function() {
      that.scrollTop = Jquery(Jquery.attr(this, 'href')).offset().top
      Jquery('html,body').animate(
        {
          scrollTop: Jquery(Jquery.attr(this, 'href')).offset().top,
        },
        300
      )
    })
    Jquery(that.menuActionId)
      .addClass('menu-active')
      .click()

    Jquery(window).on('scroll', function() {
      var roll = Jquery(window).scrollTop()
      if (roll != that.scrollTop) {
        Jquery('.menu-img').each(function(index, element) {
          if (Jquery(Jquery(element).attr('href')).offset().top - 45 <= roll) {
            Jquery(that.menuActionId).removeClass('menu-active')
            Jquery(element).addClass('menu-active')
            that.menuActionId = '#' + Jquery(element).attr('id')
          }
        })
      }
    })
  },
  methods: {
    signOut() {
    this.$router.push({ name: 'login' })
    },
  },
}
</script>

<style lang='scss'>
$bg-color: #f5f6fa;

/*
  *commonのスタイル
  */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: auto;
  background-color: $bg-color;
}
ul {
  li {
    list-style-type: none;
  }
}
a {
  cursor: pointer;
}
.el-button,
input[tyle='button'] {
  cursor: pointer;
}
.label-name {
  line-height: 36px;
}
.bg-write {
  min-width: 930px;
  max-width: 945px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 1px 4px 0 #e5e9f2;
  border-radius: 5px;
}
#home {
  .menu-img {
    padding: 23px 8px 23px 29px;
    width: 80px;
    height: 70px;
    box-shadow: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-image: linear-gradient(-180deg, #fff 0%, #fff 0%);
    &.menu-active {
      padding: 23px 29px;
      width: 93px;
      height: 70px;
      box-shadow: 0 5px 20px 0 #c0c7d6;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      background-image: linear-gradient(-180deg, #29cb97 0%, #01be7f 100%);
      .unactive {
        display: none;
      }
      .active {
        display: block;
      }
    }
    .unactive {
      display: block;
    }
    .active {
      display: none;
    }
  }

  .float-left {
    float: left;
  }
  .float-right {
    float: right;
  }
  .text-align-center {
    text-align: center;
  }
  .text-align-left {
    text-align: left;
  }
  .text-align-right {
    text-align: right;
  }
  .bold {
    font-weight: bold;
  }

  .first-title {
    font-family: PingFangSC-Regular;
    font-size: 36px;
    color: #31394d;
    letter-spacing: 0;
    text-align: left;
    margin-top: 34px;
    margin-bottom: 28px;
  }
  .second-title {
    font-size: 20px;
    color: #31394d;
    letter-spacing: 0;
    text-align: left;
    margin-bottom: 20px;
  }
  .bg-on {
    color: #fff;
    background-image: linear-gradient(-180deg, #29cb97 0%, #01be7f 100%);
    box-shadow: 0 5px 20px 0 #c0c7d6;
    .schedule-lines {
      border-right: 1px solid #27cb96;
    }
    .switch-button {
      cursor: pointer;
      color: #fff;
      opacity: 0.8;
      border: 1px solid #ffffff;
    }
  }
  .bg-off {
    color: rgba(0, 0, 0, 0.65);
    background: #e7e9f0;
    .schedule-lines {
      border-right: 1px solid rgba(0, 0, 0, 0.15);
    }
    .switch-button {
      cursor: pointer;
      color: #009966;
      opacity: 0.8;
      border: 1px solid #00cc99;
    }
  }
  .bg-danger {
    color: rgba(0, 0, 0, 0.65);
    background: #ff7463;
  }
  .el-container {
    min-width: 1024px;
    overflow: hidden;
    margin-left: 10%;
    @media (min-width: 469px) {
      margin-left: 10%;
    }
    @media (min-width: 770px) {
      margin-left: 16%;
    }
    @media (min-width: 770px) {
      margin-left: 10%;
    }
    @media (min-width: 1024px) {
      margin-left: 8.33333%;
    }
  }

  .content-block {
    overflow: hidden;
  }
  /*
  *menuのスタイル
  */
  .menu {
    .el-menu {
      z-index: 1;
      position: fixed;
      width: 81px;
      height: 100%;
      background: #ffffff;
      box-shadow: 0 0 5px 0 #e5e9f2;
      .menu-logo {
        @media (min-height: 200px) {
          height: 89%;
        }
        @media (min-height: 500px) {
          height: 92%;
        }
        @media (min-height: 800px) {
          height: 93%;
        }

        .logo {
          height: 20%;
          @media (min-height: 448px) {
            padding: 5px 11px;
            height: 8%;
            margin-bottom: 0;
          }
          @media (min-height: 450px) {
            padding: 5px 11px;
            height: 10%;
            margin-bottom: 5px;
          }
          @media (min-height: 500px) {
            height: 15%;
            padding: 15px 11px 30%;
            margin-bottom: 29px;
          }
          // @media (min-height: 588x) {
          //   height: 35%;
          //   padding: 40px 11px 30%;
          // }
          @media (min-height: 800px) {
            height: 25%;
            padding: 40px 11px 10%;
          }
          width: 81px;
          text-align: center;
        }
      }

      .logo-line {
        margin: auto;
        width: 20px;
        border-bottom: 1px solid #e8f0f8;
      }
      .loginOn {
        .el-button {
          padding: 0;
          width: 39px;
          height: 39px;
          border-radius: 50%;
          background: url('./../assets/img/user.png') no-repeat;
          background-size: 100% 100%;
        }
      }

      .menu-img {
        overflow: hidden;
        display: block;
        text-align: center;
        height: 70px;
        line-height: 85px;
        padding: 23px 8px 23px 29px;
      }

      .el-menu-item {
        text-align: center;
        height: 65px;
        line-height: 65px;
        &.is-active {
          width: 93px;
          height: 70px;
          background-image: linear-gradient(-180deg, #29cb97 0%, #01be7f 100%);
          box-shadow: 0 5px 20px 0 #c0c7d6;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          img {
            &.unactive {
              display: none;
            }
            &.active {
              display: block;
            }
          }
        }
        img {
          &.unactive {
            display: block;
          }
          &.active {
            display: none;
          }
        }
      }
    }
  }

  .content {
    font-family: PingFangSC-Regular;

    .left-message {
      @media (min-width: 768px) {
        float: right;
      }
      @media (min-width: 1280px) {
        float: left;
      }

      /*
      *Schedule画面と條件設定画面
      */
      .setSchedule {
        padding: 31px;
        .schedule-content {
          width: 150px;
          height: 120px;
        }
        .setting-content {
          width: 194px;
          height: 120px;
        }
        .schedule-content,
        .setting-content {
          font-family: PingFangSC-Regular;
          padding: 16px 18px;
          border-radius: 0.5rem;
          line-height: 25px;
          .schedule-stats {
            font-size: 14px;
            letter-spacing: 0;
          }
          .schedule-time {
            font-size: 17px;
            letter-spacing: 0;
          }
          .schedule-meun {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            letter-spacing: 0;
            padding-top: 10px;
            .schedule-edit {
              cursor: pointer;
              display: inline-block;
              padding-right: 10px;
            }
            .schedule-delet {
              cursor: pointer;
              display: inline-block;
              padding-left: 10px;
            }
            .schedule-lines {
              position: relative;
              top: 1px;
              display: inline-block;
              height: 12px;
            }
          }
          .el-button {
            display: block;
            padding: 0;
            color: rgba(0, 0, 0, 0.55);
            &.add-content {
              margin: auto;
              .add-icon {
                width: 24px;
                height: 24.5px;
              }
              .el-icon-add {
                width: 24px;
                height: 24.5px;
                background: url('../assets/img/add_icon.png') no-repeat center;
                background-size: 100%;
              }
              .add-text {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: rgba(0, 0, 0, 0.65);
                letter-spacing: 0;
              }
            }
          }
        }
      }
    }
  }
  .inputMessage {
    .other-content-top {
      .other-first {
        color: #333;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 20px;
      }
      .other-content-first {
        color: #333;
        font-size: 15px;
        margin-bottom: 20px;
      }
    }
    .other-content-body {
      .other-second {
        color: #333;
        font-weight: bold;
        margin-bottom: 5px;
      }
      .interval-date {
        margin-bottom: 20px;
      }
      .radio-content {
        .radio-content-first,
        .radio-content-second,
        .radio-content-three {
          font-size: 14px;
          height: 45px;
          .end-radio {
            width: 110px;
            padding: 9px 0;
          }
        }
        .radio-content-first {
          line-height: 40px;
        }
      }
    }
  }
}
</style>