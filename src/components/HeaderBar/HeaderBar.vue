<template>
  <div>
    <div class="header">
      <div class="site-info">
        <div class="site-name">
          北山医疗
        </div>
      </div>
      <div class='user-container'>
        <!-- <div class="warning">
          <a-icon type="bell" />
        </div> -->
        <div class='user-name' v-if='isLogin'>
          您好，{{user}}
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div>
          <span v-if='isLogin' @click='signout'>退出登录</span>
          <span v-else @click='signin'>请登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: '',
        isLogin: false
      };
    },
    created() {
      let username = window.localStorage.getItem('username');
      if (username) {
        this.user = username;
        this.isLogin = true;
      }
    },
    methods: {
      signout() {
        let _this = this;
        this.$confirm({
          title: "确定要退出吗",
          okText: "确认",
          cancelText: "取消",
          onOk() {
            window.localStorage.setItem('username', '');
            window.localStorage.setItem('token', '');
            _this.$router.push('/login');
          }
        })
      },
      signin() {
        this.$router.push('/login')
      }
    },
  }
</script>
<style lang="less" scoped>
  .header {
    width: 100%;
    height: 80px;
    background: #1d3f6c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    color: #fff;
    padding: 0 20px;
  }

  .site-info {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
  }

  .site-name {
    font-weight: 400;
    font-size: 16px;
    margin-left: 30px;
  }

  .user-container {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  .user-name {
    margin-left: 18px;

  }
</style>