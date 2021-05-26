<template>
<el-container>
    <el-header>
    </el-header>
    <el-container>
        <el-aside width="20%" style="min-width: 150px; max-width: 250px;">
            <el-menu
            :router="true"
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <template #title>主頁</template>
            </el-menu-item>
            <el-menu-item index="/modbus">
                <i class="el-icon-menu"></i>
                <template #title>Modbus測試</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <template #title>開發中</template>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
          <!--<el-header style="background-color: white">-->
            <el-tag
            v-for="tag in tags"
            :key="tag.name"
            closable
            :type="tag.type">
            {{tag.name}}
          </el-tag>
          <!--</el-header>-->
          
            <el-main>
                <router-view/>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
  </el-container>
</template>

<script>
//import Home from '../components/Home.vue'
//import ModbusTest from '../components/ModbusTest.vue'

  export default {
    components:{
      //Home,
      //ModbusTest
    },data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      };
    }
  };
</script>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
.el-tag + .el-tag {
    margin-left: 10px;
  }

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
