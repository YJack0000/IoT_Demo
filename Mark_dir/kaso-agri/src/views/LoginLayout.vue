<template>
  <div id="login">
    <el-container direction="vertical">
      <el-main id="loginContent">
        <el-row>
          <div :style="{width:'400px',margin:'150px auto'}">
            <div class="logo-title">スマート農業システム</div>
            <router-view/>
            <!-- </el-col> -->
          </div>
        </el-row>
      </el-main>
      <el-footer>
        <div class="presonal">
          <span
            class="presonalTitle"
            :style="{padding:'5px',position:'relative',bottom:'6px'}"
          >個人情報保護方針</span>
          <img src="../assets/img/company_logo.png" width="26px" height="26px">
        </div>
        <div class="address">Copyright © 2010-{{year}} Ka-So Co., Ltd. All rights reserved.</div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'LoginLayout',

  data() {
    return {
      ruleLogin: {
        username: '',
        password: '',
      },
      isDisabled: true,
      clearButton: {
        isUsernameClearDisplay: false,
        isPasswordClearDisplay: false,
      },
      rules: {
        name: [{ required: true, message: 'アカウント入力エラー', trigger: 'blur' }],
        password: [{ required: true, message: 'パスワード入力エラー', trigger: 'blur' }],
      },
      year:'2018'
    }
  },
  mounted() {
    this.year = new Date().getFullYear()
  },
  methods: {
    find() {
      var login = document.getElementById('loginContent')
      var forget = document.getElementById('forgetContent')
      var find = document.getElementById('findContent')
      login.style.display = 'none'
      forget.style.display = 'none'
      find.style.display = 'block'
    },
  },
}
</script>

<style lang="scss" >
#login {
  font-family: PingFangSC-Regular;
height: auto;
  .el-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('./../assets/img/background.png') no-repeat;
    background-size: 100% 100%;
  }
  .logo-title {
    margin: 25px auto;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.65);
  }
  .text-align-left {
    text-align: left;
  }
  
  .el-button,
  .el-button:active,
  .el-button:focus,
  .el-button:hover {
    width: 100%;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    line-height: 16px;
    border-radius: 2px;
    background: #00cc99;
    border: #00cc99;

    &.hoverBtn {
      background: rgba(0, 204, 153, 0.85);
      border: rgba(0, 204, 153, 0.85);
    }
    &.is-disabled,
    &.is-disabled:active,
    &.is-disabled:focus,
    &.is-disabled:hover {
      background: rgba(0, 204, 153, 0.5);
      border: rgba(0, 204, 153, 0.5);
    }
    &.pressBtn {
      background: #04b98c;
      border: #04b98c;
    }
  }
  .el-footer {
    padding: 7px 0 0;
    background: rgba(255, 255, 255, 0.6);
    .presonal {
      letter-spacing: 0;
      .presonalTitle {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.65);
        letter-spacing: 0;
        text-align: left;
      }
    }
    .address {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.35);
      letter-spacing: 0;
      text-align: center;
      line-height: 18px;
    }
  }
  .returnLine {
    width: 90%;
    margin: auto;
    border-top: 1px solid #eee;
  }
  .returnBack {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    padding: 0 15px 10px;
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.54);
      cursor: pointer;
    }
  }
}

.findContent {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  line-height: 14px;
  padding-bottom: 30px;
}

.forget {
  margin: 20px auto;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #29cb97;
  line-height: 14px;
  cursor: pointer;
}
</style>