<template>
    <div>
    <img alt="Vue logo" src="src/assets/logo.png">
    <Login/>
    </div>
  </template>
  
  <script>
  import Login from './Login.vue';
  
  export default {
    name: 'App',
    components: {
      Login
    },
    props: {
      msg: String
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  