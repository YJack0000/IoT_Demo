<template>
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
</template>