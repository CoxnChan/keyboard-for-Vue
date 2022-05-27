<template>
  <div class="choiceBox">
      <div class="choiceTitle">
          <!-- {{item.title}} -->
          选择{{props.title}}
      </div>
      <div class="choiceList">
          <ChoiceList :essayTitle="props.essay.title" 
          :essayList="essayList" 
          @essayItem="changeEssay"></ChoiceList>
      </div>
      <div class="choiceButton">
          <div class="button diy-background-color diy-text-colorW">
              随机选
          </div>
      </div>
  </div>
</template>

<script>
import ChoiceList from '@/components/choiceList.vue'
export default {
    name:"choiceBox",
    components:{
        ChoiceList
    },
    props:{
        title:{
            type:String,
            default:""
        },
        essay:{
            type:Object,
            default:()=>{}
        },
        essayList:{
            type:Object,
            default:()=>{[]}
        }
    },

    setup(props,ctx) {
        
        const changeEssay = (item) => {
            ctx.emit('changeEssay',item)
        }
        return {
            props,
            changeEssay
        }
    }
}
</script>

<style lang="less" scoped>
.choiceBox{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    >div{
        display: flex;
        justify-content: center;
        padding: 3px 10px ;
        box-sizing: border-box;
        align-items: center;
    }
    .choiceTitle{
        flex: 3;
    }
    .choiceList{
        flex: 6;
    }
    .choiceButton{
        flex: 3;
        .button{
            padding: 5px 20px;
            border-radius: 5px;
            box-sizing: border-box;
        }
    }
}
</style>