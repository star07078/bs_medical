<template>
  <div class='slidebar'>
    <ul>
      <li :class='{active: active==i}' @click='handleClick(i)' v-for='(item,i) in list' :key='i'>
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            url: '/main/user',
            name: '用户管理'
          },
          {
            url: '/main/account',
            name: '账号应用'
          },
          {
            url: '/main/echarts',
            name: '统计管理'
          }
        ],
        active: 0
      };
    },
    methods: {
      handleClick(i) {
        this.active = i;
        this.$router.push(this.list[i].url)
      }
    }
  }
</script>
<style scoped>
  ul, li {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  li {
    color: #fff;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  li.active {
    background: #fff;
    color: #000;
  }
</style>