 <template> 
  <el-container style="height: 100%; border: 1px solid #eee">
    <!-- left side menu for different pages-->
    <el-aside width="15%" style="background-color: rgb(238, 241, 246) ">
      <el-container style="height: 100%; border : 1px ">
        <el-menu  @select="handleSelect" style="width: 100%">
          <nav id="app" style = "padding: 12px" >
            <a href="/" >
              <div style="width: 100%">  
                <img src="../assets/img/logo.png" 
                width="59px" height="33px">
              </div>
            </a>
          </nav>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-document"></i>Navigator One</template>
            <el-menu-item-group title="Group 1">
              <el-menu-item index="table">table</el-menu-item>
              <el-menu-item index="dashboard">dashboard</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="deviceStatus">Device Status</el-menu-item>
          <el-menu-item index="3" class="el-icon-notebook-1">Option5</el-menu-item>       
        </el-menu>
      </el-container>       
    </el-aside>
    <!--header containing different tag and main-->
    <el-container style = "height: 100%">
      <!--tage header-->
      <el-header style="text-align: right; font-size: 12px; background-color: #545c64 ">
        <div class="line"></div>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          text-align="left"
          style = "width: 100%">
          <el-menu-item index="1" >Processing Center</el-menu-item>
          <el-submenu index="2">
            <template slot="title">Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
          <el-dropdown background-color="#545c64"
            text-color="#fff">
            <i class="el-icon-setting" style="margin-right: 15px; font-size: 30px; color: white"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>          
        </el-menu>

        
      </el-header>
      <!--main pages-->
      <el-main>
        <el-table :data="tableData" v-show="pages === 'table'" >
          <el-table-column prop="date" label="Date" width="140">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="120">
          </el-table-column>
          <el-table-column prop="address" label="Address">
          </el-table-column>
        </el-table>
        
        <el-row>
          <el-col :span="24" class="content">
            <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23" :span="23" class="left-message">
              <!-- Dashboard画面 -->
              <Dashboard v-show="pages === 'dashboard'"></Dashboard>
              <DeviceStatus v-show="pages === 'deviceStatus'"></DeviceStatus>
            </el-col>
          </el-col>
        </el-row>
        
        
      </el-main>
      
      <el-footer height="100px" class = "footer">
        emergency message
      </el-footer>
    </el-container>


  </el-container>
</template>


<script>
  import Dashboard from '../components/Dashboard.vue'
  import DeviceStatus from '../components/DeviceStatus.vue'
  export default {
    name : 'markHome',
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
      return {
        tableData: Array(10).fill(item),
        pages: 'table',
      }
    },
    components: {
      Dashboard,
      DeviceStatus

    },
    methods: {
      handleSelect(key) {
        console.log(key)
        this.pages = key
        console.log(this.pages === '1-1')
      },
    }
  }
</script>



<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    background-color:#f1f5f7;
     
  }

  .el-main {
    position: relative;
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

  .bg-write {
  min-width: 930px;
  max-width: 945px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 1px 4px 0 #e5e9f2;
  border-radius: 5px;
  }

  .left-message {
      @media (min-width: 768px) {
        float: right;
      }
      @media (min-width: 1280px) {
        float: left;
      }
  }

  .float-left {
    float: left;
  }

  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }


  
</style>