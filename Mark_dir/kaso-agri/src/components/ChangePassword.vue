<template>
  <div>
    <el-card class="box-card">
      <div class="text-align-left returnBack">
        <a @click="returnButton">
          <i class="el-icon-arrow-left"></i>返回
        </a>
      </div>
      <div class="returnLine"></div>
      <img src="./../assets/img/logo.png" width="114.6px"  :style="{padding:'25px 0'}">
      <el-form :model="changePassword" :rules="rules" :style="{width:'90%',margin:'auto'}">
        <el-form-item prop="password" class="inputMessage">
          <el-input
            type="password"
            v-model="changePassword.password"
            placeholder="請輸入新密碼"
            @input="loginButtionActive"
            @keyup.enter.native="change"
          ></el-input>
        </el-form-item>

        <el-form-item prop="passwordConfirm" class="inputMessage">
          <el-input
            type="password"
            v-model="changePassword.passwordConfirm"
            @input="loginButtionActive"
            @keyup.enter.native="change"
            placeholder="請再次確認新密碼"
          ></el-input>
        </el-form-item>

        <el-button type="primary" @click="change()" v-bind:disabled="isDisabled">确认</el-button>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'ChangePassword',
  data() {
    return {
      changePassword: {
        password: '',
        passwordConfirm: '',
      },
      rules: {
        password: [{ min: 6, message: '密碼不能少於6位', trigger: 'blur' }],
        passwordConfirm: [
          {
            validator: (rules, value, callback) => {
              if (value !== this.changePassword.password) {
                callback(new Error('再次輸入密碼必須相同'))
              }
            },
            trigger: 'blur',
          },
        ],
      },
      isDisabled: true,
    }
  },
  methods: {
    change() {
      if (!this.isDisabled) {
        this.$router.push({ name: 'login' })
      }
    },
    /**
     * ログインボタンの活性化
     */
    loginButtionActive() {
      var password = this.changePassword.password
      var passwordConfirm = this.changePassword.passwordConfirm
      if (password.length > 5 && passwordConfirm.length > 5) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
    },
    returnButton() {
      this.$router.push({ name: 'login' })
    },
  },
}
</script>
