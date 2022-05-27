<template>
  <div class="tabBarContent diy-box-shadow diy-background-colorH" >
      <div class="tab">
          <div class="tabBox" v-for="(item,index) in props.list" :key="index" @click="change(index)">
              <div class="icon">
                  <Icon :iconTitle="item.icon"></Icon>
              </div>
              <div class="title">
                  {{item.title}}
              </div>
          </div>
          <div class="active diy-background-colorW" :style="'left:calc(25% *'+left+');'"></div>
      </div>
      <div class="setup diy-background-colorW">
        <ChoiceBox :title="props.list[left].title" 
        :essay="props.essay" 
        :essayList="props.essayList"
         @changeEssay="changeEssay"></ChoiceBox>
        <ChoiceTime  @changeSecond="changeSecond"></ChoiceTime>
        <div class="submit diy-background-color diy-text-colorW" @click="submit">
            开始
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ChoiceBox from '@/components/choiceBox.vue'
import ChoiceTime from '@/components/choiceTime.vue'
import Icon from '@/components/icon.vue'
export default {
    name:"tabBar",
    components:{
        ChoiceBox,
        ChoiceTime,
        Icon
    },
    props:{
        list:{
            type:Object,
            default:()=>{[]}
        },
        essay:{
            type:Object,
            default:()=>{}
        },
        essayList:{
            type:Object,
            default:()=>{[]}
        },
    },
    setup(props,ctx) {
        const left = ref(0)

        const change = (index) => {
            left.value = index
            ctx.emit('tabBarLink',props.list[left.value].link)
        }

        const changeEssay = (item) => {
            ctx.emit('changeEssay',item)
        }
        const changeSecond = (second) =>{
            ctx.emit('changeSecond',second)
        }
        const submit = () =>{
            ctx.emit('submit')
        }
        return {
            props, 
            left,
            change,
            changeEssay,
            changeSecond,
            submit
        }
    }
}
</script>

<style lang="less" scoped>
.tabBarContent{
    width: 100%;
    height: 100%;
    // border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    .tab{
        flex: 1;
        display: flex;
        position: relative;
        .tabBox{
            flex: 1;
            aspect-ratio: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 99;
            .icon{
                width: 50px;
                height: 50px;
            }
        }
        .active{
            width: 25%;
            height: 100%;
            position: absolute;
            transition: 0.5s;
            border-radius: 10px 10px 0 0;
        }
    }
    .setup{
        flex:1;
        padding: 15px 20px ;
        box-sizing: border-box;
        border-radius: 0 0 10px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >div{
            margin: 5px 0;
        }
        .submit{
            padding: 5px 20px;
            box-sizing: border-box;
            border-radius: 5PX;
            cursor: pointer;
        }
    }
}
</style>