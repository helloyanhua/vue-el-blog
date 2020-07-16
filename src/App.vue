<template>
  <div id="app">
    <router-view />
    <el-backtop :bottom="100"></el-backtop>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
