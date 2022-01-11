<template>
  <div class="main">
    <HeaderBar />
    <div class="container">
      <div class="side-bar">
        <side-bar />
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>

  </div>

</template>
<script>
  import HeaderBar from '../components/HeaderBar/HeaderBar.vue'
  import SideBar from '../components/SideBar/SideBar.vue'
  export default {
    data() {
      return {};
    },
    components: { HeaderBar, SideBar }
  }
</script>
<style scoped>
  .main {
    min-height: 100%;
  }

  .container {
    display: flex;
    height: 100vh;
  }

  .side-bar {
    flex-grow: 0;
    flex-shrink: 0;
    width: 200px;
    height: 100vh;
    box-shadow: 0 2px 8px #f0f1f2;
    background: #1d3f6c;
  }

  .content {
    flex: 0 1 auto;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 20px;
  }
</style>