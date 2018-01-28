<template>
  <el-row>
    <el-col :span="menuLength"
      v-for="(menu,index) in menus" :key="index">
      <router-link :to="'/' + menu.label">
        <el-button type="primary" plain
          :class="{'menu-active':activeState == menu.label}"
        >
          {{menu.name}}
        </el-button>
      </router-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'menuFooter',
  data () {
    return {
      menus: [
        {
          name: '电影',
          label: 'movie'
        },
        {
          name: '音乐',
          label: 'music'
        },
        {
          name: '图书',
          label: 'book'
        }
      ],
      activeState: 'movie'
    }
  },
  computed: {
    menuLength () {
      return 24 / this.menus.length
    }
  },
  watch: {
    '$route' (to, from) {
      this.activeState = to.path.substring(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-button--primary.is-plain{
  width: 100%;
  background: #fff;
  border: none;
  border-radius: 0;
}
.el-button--primary.is-plain:focus,
.el-button--primary.is-plain:hover{
  background: #409EFF;
  border-color: #409EFF;
  color: #fff;
}
.el-button--primary.menu-active{
  background: #409EFF;
  border-color: #409EFF;
  color: #fff;
}
</style>
