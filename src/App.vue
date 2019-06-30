<template>
  <div id="app">
    <el-tabs v-model="activeName">
      <el-tab-pane label="查询" name="query"><StuQuery></StuQuery></el-tab-pane>
      <el-tab-pane label="添加" name="add"><StuAdd></StuAdd></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabTest from "./components/TabTest";
import StuQuery from "./components/StuQuery";
import StuAdd from "./components/StuAdd";
export default {
  name: "app",
  data() {
    return {
      activeName: "query"
    };
  },
  components: {
    StuAdd,
    TabTest,
    StuQuery
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
