<template>
  <el-table
          :data="tableData3"
          height="650"
          border
          style="width: 100%">
    <el-table-column
            prop="date"
            label="日期"
            width="180">
    </el-table-column>
    <el-table-column
            prop="name"
            label="标题"
            width="180">
    </el-table-column>
    <el-table-column
            prop="address"
            label="摘要">
    </el-table-column>
    <el-table-column
            label="操作"
            width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-02',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-04',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-01',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-08',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-06',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }, {
          date: '2016-05-07',
          name: 'Lorem ipsum dolor sit amet,',
          address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
        }]
      }
    },
    methods: {
      handleClick(row) {
        this.$alert(row, '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
          }
        });
      }
    },
  }
</script>