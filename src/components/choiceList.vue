<template>
  <div class="choiceList">
      <div class="title diy-background-colorH">{{props.essayTitle}}</div>
      <div class="essayList diy-background-colorH diy-box-shadow">
          <div class="essayContent"  v-for="(item,index) in props.essayList" :key="index" @click="changeTitle(item)">
              {{item.title}}
          </div>
      </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
export default {
    name:"choiceList",
    props:{
        essayTitle:{
            type:String,
            default:""
        },
        essayList:{
            type:Object,
            default:()=>{[]}
        }
    },

    setup(props,ctx) {
        const changeTitle = (item) => {
            ctx.emit('essayItem',item)
        }
        return {
            props,
            changeTitle
        }
    }
}
</script>

<style lang="less" scoped>
.choiceList{
    width: 100%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    .title{
        width: 100%;
        height: 100%;
        padding: 5px 10px;
        box-sizing: border-box;
        border-radius: 5px;
    }
    .essayList{
        width: 200%;
        height: 0px;
        position: absolute;
        overflow: auto;
        top: 35px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 99;
        transition: 0.5s;
        border-radius: 10px;
        padding: 0px ;
        box-sizing: border-box;
        .essayContent{
            float: left;
            padding: 5px 10px ;
            box-sizing: border-box;
            border-radius: 5px;
        }
        .essayContent:hover{
            background-color: #2189ff;
            color: #fff;
        }
    }

}
.choiceList:hover{
    .essayList{
        height: 100px;
        padding: 10px;
    }
}
</style>