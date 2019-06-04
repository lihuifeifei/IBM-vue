<template>
  <div id="app">
      <el-container v-if="$route.meta.keepAlive" direction="vertical">
          <keep-alive>
              <el-menu
                  :default-active="this.$route.path"
                  router
                  class="el-menu-demo"
                  mode="horizontal"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                  <el-menu-item
                      v-for="(item,i) in navList"
                      :key="i"
                      :index="item.name">
                      {{item.navItem}}
                  </el-menu-item>
              </el-menu>
          </keep-alive>
              <el-main>
                    <router-view/>
              </el-main>
      </el-container>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>


<script>
    export default {
        data() {
            return {
                navList:[
                    {name:'/home',navItem:'问答中心'},
                    {name:'/history',navItem:'历史记录'},
                    {name:'/about',navItem:'项目介绍'},

                ]
            };
        },
        methods: {

        }
    }
</script>

<style>

</style>
