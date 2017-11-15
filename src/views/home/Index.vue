<template>
    <div>
        <div>
            <el-button @click="open">默认按钮</el-button>
            <el-button type="primary" @click="open">主要按钮</el-button>
            <el-button type="success" @click="open">成功按钮</el-button>
            <el-button type="info" @click="open">信息按钮</el-button>
            <el-button type="warning" @click="open">警告按钮</el-button>
            <el-button type="danger" @click="open">危险按钮</el-button>
        </div>

        <div style="margin: 20px 0">
            <el-button plain @click="open">朴素按钮</el-button>
            <el-button type="primary" plain @click="open">主要按钮</el-button>
            <el-button type="success" plain @click="open">成功按钮</el-button>
            <el-button type="info" plain @click="open">  信息按钮</el-button>
            <el-button type="warning" plain @click="open">警告按钮</el-button>
            <el-button type="danger" plain @click="open"> 危险按钮</el-button>
        </div>
        <br><br>
    </div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    },
    mounted: function () {

    }
  }
</script>