<template>
  <div class="navbar">
    <div class="item" v-for="(item,index) in props.navbarList" :key="index" :id="'id'+index" @click="clickButton(item.link,index)">
      {{item.title}}
    </div>
    <div class="back diy-background-color" :style="'width:'+width+'px;left:'+mR+'px;'"></div>
  </div>
</template>

<script>
import { ref,onMounted } from "vue"
export default {
    name:"NavBar",
    props:{
      navbarList:{
        type:Object,
        default:()=>{}
      }
    },

    setup(props,ctx){
      let width = ref(0)
      let mR = ref(0)
      let listw = ref([])
      

      const clickButton = (link,index) =>{
        ctx.emit("routerPush",link)
        width.value = listw.value[index]
        if(index == 0) mR.value = 0
        else {
          let w = 0
          for(let i = 0;i<index;i++){
            w = w + listw.value[i]
          }
          mR.value = w
        }
      }

      onMounted(() => {
        for(let i = 0; i < props.navbarList.length; i++){
          let w = document.getElementById('id'+i).offsetWidth
          listw.value.push(w)
          width.value = listw.value[0]
        }
      })
      
      return {
        props,
        width,
        mR,
        clickButton
      }
    }
}
</script>

<style lang='less' scoped>
.navbar{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  .item{
    padding: 5px 10px;
    cursor: pointer;
  }
  .back{
    position: absolute;
    bottom: 0;
    width: 80px;
    height: 3px;
    transition: 0.5s;
  }
}
</style>