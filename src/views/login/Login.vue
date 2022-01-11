<template>
  <div id='login'>
    <section>
      <div class='login-center'>
        <h2>北山医疗</h2>
        <div>
          <!-- <i class='iconfont iconyonghu'></i> -->
          <input type="text" v-model.lazy='username' placeholder="用户名">
        </div>
        <div>
          <!-- <i class='iconfont iconmima1'></i> -->
          <input type="password" @keydown="keydown" v-model='pwd' placeholder="密码">
        </div>
        <button @click='signinFn'>登录</button>
      </div>
    </section>
  </div>
</template>

<script>
  import { login } from '@/network/login.js'
  export default {
    name: 'signin',
    data() {
      return {
        username: 'kai',
        pwd: '123456'
      }
    },
    methods: {
      signinFn() {
        if(!this.username) {
          this.$message.error('用户名不能为空');
          return ;
        }
        if(!this.pwd) {
          this.$message.error('密码不能为空');
          return ;
        }
        this.$router.push('/main');
        window.localStorage.setItem('token', 'token');
        window.localStorage.setItem('username', this.username);
        // login({username: this.username, pwd: this.pwd})
        // .then(data => {
        //   // code == 1 才能登录
        //   if(data.data.code) {
        //     window.localStorage.setItem('token', data.data.token);
        //     window.localStorage.setItem('username', this.username);
        //     this.$router.push('/main');
        //   } else {
        //     this.$message.error(data.data.msg);
        //   }
        // })
        // .catch(() => {
        //   this.$message.error('网络出错，请稍后登录');
        // })
      },
      keydown(ev) {
        if(ev.keyCode == 13) {
          this.signinFn()
        }
      }
    }
  }
</script>

<style scoped>
  #login {
    width: 100%;
    height: 100%;
    background: #34495e;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section {
    width: 360px;
    height: 320px;
    background: #fff;
    position: relative;
    z-index: 10;
  }
  section:after, section:before {
    content: '';
    display: block;
    width: 80px;
    height: 80px;
    position: absolute;
    transition: all .3s ease-in-out;
    z-index: 1;
  }
  section:before {
    border-top: 4px solid #fff;
    border-left: 4px solid #fff;
    top: -14px;
    left: -14px;
  }
  section:after {
    border-bottom: 4px solid #fff;
    border-right: 4px solid #fff;
    bottom: -14px;
    right: -14px;
  }
  section:hover:after, section:hover:before {
    width: 384px;
    height: 344px;
  }
  section:hover .login-center {
    position: relative;
    z-index: 100;
  }
  .login-center {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-center div {
    width: 90%;
    height: 40px;
    background: #ccc;
    position: relative;
    margin-bottom: 36px;
  }
  .login-center h2 {
    font-size: 30px;
    margin: 24px 0;
  }
  input {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 14px;
    transition: all .3s ease-in-out;
  }
  input:focus {
    border: 1px solid #66a6ff;
  }
  .login-center div i {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
  .login-center button {
    width: 90%;
    height: 40px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1em;
    font-size: 20px;
    background: #83a8c9;
    border: none;
    outline: none;
  }
  .login-center button:active {
    background: #8bb0d1;
  }
</style>