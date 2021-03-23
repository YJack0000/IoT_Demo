<template>
  <div>
    <el-card class="box-card">
      <div class="text-align-left returnBack">
        <a @click="returnButton">
          <i class="el-icon-arrow-left"></i>返回
        </a>
      </div>
      <div class="returnLine"></div>

      <el-form id="sendmail" :style="{width:'90%',margin:'auto'}" :class="{hidden: !isOK}">
        <div class="text-align-left" :style="{padding:'15px 0 10px 0'}">找回密碼請輸入註冊郵箱地址</div>
        <el-form-item prop="find" class="inputMessage">
          <el-input :v-model="email" type="text" placeholder="chenbin2010@gamil.com"></el-input>
        </el-form-item>

        <el-button type="primary" @click="sendmail">找回</el-button>
      </el-form>

      <div
        id="sendmailOK"
        class="findContent"
        :class="{hidden: isOK}"
        :style="{width:'90%',margin:'auto'}"
      >
        <div class="text-align-center" :style="{padding:'25px 0 15px'}">
          <img src="./../assets/img/group.png" alt>
        </div>
        <div class="text-align-center">找回鏈接已發送到chenbin2010@gmail.com的郵箱
          <br>請跳轉到郵箱
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'ForgetPassword',
  data() {
    return {
      isOK: true,
      email: '',
    }
  },
  methods: {
    /**
     * メールを送る
     */
    sendmail() {
      this.isOK = false
      //TODO
    },
    returnButton(){
      this.$router.push({name:'login'})
    }
  },
}
</script>
<style lang="scss" scoped>
.hidden {
  display: none;
}
</style>

