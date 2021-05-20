<template>
  <div class="weather-content-border">
    <div class="float-left">
      <i class="el-icon el-icon-temperature"></i>
      <span class="weather-text">ranNum: {{ranNum}}</span>
    </div>
    <span class="float-right weather-text-math"></span>
  </div>
</template>

<script>
export default {
  name: 'mark123',
  data(){
    return {
      ranNum: 0
    }
  },

  created() {
    setInterval(this.getData, 2000)
  },

  methods: {
    getData(){
      this.$ajax({
        method: 'GET',
        url: 'http://127.0.0.1:8081/getRandomNumber'
      })
      .then(res => {
        var objstr = JSON.stringify(res.data)
        var objres = JSON.parse(objstr)

        this.ranNum = objres.num
      })

      console.log('request')

      
    }
  }
}
</script>