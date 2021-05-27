<template>
  <el-card class="box-card">
    <img src="./../assets/img/logo.png" width="114.6px" :style="{padding:'25px 0'}">
    <el-form :model="ruleLogin" ref="ruleLogin" :style="{width:'90%',margin:'auto'}">
      <el-form-item prop="name" class="inputMessage">
        <el-input
          id="username"
          type="text"
          v-model="ruleLogin.username"
          placeholder="携帯番号/メールアドレスを入力してください"
          @input="inputBlur()"
          @keyup.enter.native="login"
        ></el-input>
      </el-form-item>
      <div
        class="clear"
        :class="{'isDisplay':clearButton.isUsernameClearDisplay}"
        id="closeName"
        @click="clearInput('username')"
      >
        <img src="./../assets/img/close_small.png" alt>
      </div>
      <el-form-item prop="password" class="inputMessage">
        <el-input
          id="password"
          type="password"
          v-model="ruleLogin.password"
          @input="inputBlur()"
          @keyup.enter.native="login"
          placeholder="パスワードを入力してください"
        ></el-input>
      </el-form-item>
      <div
        class="clear"
        :class="{'isDisplay':clearButton.isPasswordClearDisplay}"
        id="closePassword"
        @click="clearInput('password')"
      >
        <img src="./../assets/img/close_small.png" alt>
      </div>
      <el-button type="primary" @click="login()" v-bind:disabled="isDisabled">ログイン</el-button>
      <div class="forget" @click="forgetPasswordClick">
        <a>パスワードを忘れた方はこちら</a>
      </div>
    </el-form>
  </el-card>
</template>
<script>
export default {
  name: 'Login',
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
    }
  },
  methods: {
    login() {
      if (!this.isDisabled) {
         this.$ajax({
           method: 'POST',
           url: 'http://47.74.5.223:7542/login',
           data: {
             name: this.ruleLogin.username,
             password: this.ruleLogin.password,
           },
         })
         .then(res => {
             console.log(res)
             if( res.data.ret_code == 0 ) {
                this.$session.start()
                if( this.ruleLogin.username == 'kaso' ) {
                  this.$session.set( 'loginUser', 'KASO03HM')
                  this.$router.push({ name: 'home' })
                }
                
                 if( this.ruleLogin.username == 'meron' ) {
                  this.$session.set( 'loginUser', 'KASO05SO')
                  this.$router.push({ name: 'home' })
                }
             }
           })
           .catch(error => {
             console.log(error)
           })
        //this.$router.push({ name: 'home' })
      }
    },
    /**
     * クリアボタンの設定
     */
    inputBlur() {
      if (this.ruleLogin.username) {
        this.clearButton.isUsernameClearDisplay = true
      } else {
        this.clearButton.isUsernameClearDisplay = false
      }
      if (this.ruleLogin.password) {
        this.clearButton.isPasswordClearDisplay = true
      } else {
        this.clearButton.isPasswordClearDisplay = false
      }
      this.loginButtionActive()
    },
    /**
     * ログインボタンの活性化
     */
    loginButtionActive() {
      var username = this.ruleLogin.username
      var password = this.ruleLogin.password
      if (username.length > 0 && password.length > 0) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
    },
    /**
     * テキストボックス内の文字をクリアする
     */
    clearInput(id) {
      if (id == 'username') {
        this.ruleLogin.username = ''
      }
      if (id == 'password') {
        this.ruleLogin.password = ''
      }
      this.isDisabled = true
    },
    forgetPasswordClick() {
      this.$router.push({ name: 'forgetpassword' })
    },
  },
}
</script>
<style lang="scss" scoped>
.clear {
  display: none;
  position: relative;
  width: 35px;
  height: 0;
  float: right;
  bottom: 51px;
  cursor: pointer;

  &.isDisplay {
    display: block;
  }
}
</style>


