<template>
  <div>
    <el-autocomplete
      class="inline-input"
      v-model="query"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
    <el-button @click="search" type="text">查询</el-button>
    <h3>班级</h3>
    <el-table :data="classData">
      <el-table-column prop="name" label="班级名称" width="100">
      </el-table-column>
      <el-table-column label="学生列表" width="100">
        <template slot-scope="scope">
          <el-button
            v-for="v in scope.row.stus"
            :key="v"
            @click="showStu(v)"
            type="text"
            size="small"
          >
            {{ v }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <h3>学生</h3>

    <el-table :data="stuData">
      <el-table-column label="学生id" width="100">
        <template slot-scope="scope">
          <el-button @click="stuClick(scope.row.id)" type="text" size="small">
            {{ scope.row.id }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="学生姓名" width="100">
      </el-table-column>
      <el-table-column prop="age" label="学生年龄" width="100">
      </el-table-column>
    </el-table>

    <h3>含有学生的班级</h3>
    <el-table :data="classData2">
      <el-table-column prop="name" label="班级名称" width="100">
      </el-table-column>
      <el-table-column label="学生列表" width="100">
        <template slot-scope="scope">
          <el-button
            v-for="v in scope.row.stus"
            :key="v"
            @click="showStu(v)"
            type="text"
            size="small"
          >
            {{ v }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const classData = [
  {
    name: "班级ab",
    stus: ["stu1", "stu2"]
  },
  {
    name: "班级bc",
    stus: ["stu2", "stu3"]
  },
  {
    name: "班级ac",
    stus: ["stu1", "stu3"]
  }
];
const stuData = [
  {
    id: "stu1",
    name: "学生1",
    age: 11
  },
  {
    id: "stu2",
    name: "学生2",
    age: 12
  },
  {
    id: "stu3",
    name: "学生3",
    age: 13
  }
];
export default {
  methods: {
    querySearch(queryString, cb) {
      console.log("querySearch", queryString);
      const result = classData
        .filter(item => item.name.includes(queryString))
        .map(item => {
          return { value: item.name, ...item };
        });
      console.log("result", result);
      cb(result);
    },
    handleSelect(item) {
      console.log("handleSelect", item);
      this.classData = [item];
    },
    showStu(stu) {
      console.log(stuData.filter(item => item.id.includes(stu)));
      this.stuData = stuData.filter(item => item.id.includes(stu));
    },
    search() {
      this.classData = classData.filter(item => item.name.includes(this.query));
    },
    stuClick(item) {
      console.log("stuClick", item);
      this.classData2 = classData.filter(v => new Set(v.stus).has(item));
    }
  },
  data() {
    return {
      query: "",
      classData: [],
      classData2: [],
      stuData: []
    };
  }
};
</script>
