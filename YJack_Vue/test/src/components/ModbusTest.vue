<template>
<div class="demo-input-size">
  <h3>Modbus測試</h3>
  <el-input
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
  <el-input
    size="medium"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input2">
  </el-input>
  <el-input
    size="small"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input3">
  </el-input>
  <el-input
    size="mini"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input4">
  </el-input>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  name: 'ModbusTest',
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref('')
    }
  }
})
</script>

<style>
h3 {
  margin: 40px 0 0;
}
</style>