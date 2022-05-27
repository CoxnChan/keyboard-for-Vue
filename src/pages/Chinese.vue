<template>
  <div class="_Chinese ">
      <div class="tabBar">
          <tabBar :list="chineseTabBar"
           @tabBarLink="getLinkContent" 
           :essay="essay"
           :essayList="essayList"
           @changeEssay="changeEssay"
           @changeSecond="changeSecond"
           @submit="submit"
           ></tabBar>
      </div>
      <div class="keyboard">
          <KeyBoard></KeyBoard>
      </div>
  </div>
</template>

<script>
import { mapState,useStore } from 'vuex'
import KeyBoard from '@/components/keyboard.vue'
import tabBar from '@/components/tabbar.vue'
import router from '../router'
export default {
    name:"_Chinese",
    components:{
        KeyBoard,
        tabBar
    },
    computed:{
        ...mapState(['chineseTabBar']),
        ...mapState(['essayList']),
        ...mapState(['essay']),
        ...mapState(['choiceTime'])
    },
    setup() {
      const store = useStore()
      const getLinkContent = (link) =>{
          store.commit('getLinkOfChinese',link)
      }
      const changeEssay = (item) =>{
          store.commit('changeEssay',item)
      }
      const changeSecond = (second) =>{
          store.commit('changeChoiceTime',second)
      }
      const submit = () =>{
        store.commit('submit')
        router.push({
            path:"/practice"
        })
      }
      getLinkContent(store.state.chineseTabBar[0].link)
      return{
          getLinkContent,
          changeEssay,
          changeSecond,
          submit
      }
    }
}
</script>

<style lang="less" scoped>
._Chinese{
    width: 100%;
    height: 100%;
    // display: flex;
    // justify-content: center;
    position: relative;
    .keyboard{
        width: 70%;
        height: 40%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
    }
    .tabBar{
        width: 600px;
        margin: 0 auto;
        padding: 10px;
        box-sizing: border-box;
    }
}
</style>