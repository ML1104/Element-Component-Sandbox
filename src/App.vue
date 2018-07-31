<template>
  <div id="app">
    <el-input placeholder="Please input" v-model="input" class="input"></el-input>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">Search</el-button>
    <el-button class="loader" plain type="primary" v-loading="loading" @click='triggerLoading()'>Load</el-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },

  data() {
    return {
      input: '',
      loading: false
    }
  },

  methods: {
    triggerLoading: function() {
      this.loading = true;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input {
  width: 200px;
}

.loader:hover {
  background-color: #303133;
  color: white;
}
</style>
