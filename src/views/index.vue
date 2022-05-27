<template>
  <div class="content">
      <div class="header diy-box-shadow diy-background-colorW">
          <Navbar :navbarList="navbarList" @routerPush="routerPush"></Navbar>
      </div>
      <div class="main">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Navbar from '@/components/navbar.vue'
import router from '../router';
export default {
    name:"KeyBoard",
    components:{
        Navbar
    },
    computed:{
        ...mapState(['navbarList'])
    },
    setup(){
        const routerPush = (link) =>{
            router.push({
                path:link
            })
        };
        return{
            routerPush,
        }
    }
}
</script>

<style lang="less" scoped>

.content{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .header{
        width: 100%;
        height: 60px;
        
    }
    .main{
        flex: 1;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

}
</style>