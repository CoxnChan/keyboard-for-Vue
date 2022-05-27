<template>
  <div class="choiceTime">
    <div class="title">
      时间
    </div>
    <div class="solid">
      <div class="box">
        <input class="liner diy-background-color" v-model="second" type="range" min="0" max="600">
        
      </div>
    </div>
    <div class="number" >
      {{time}}
    </div>
  </div>
</template>

<script>
import { ref,watch } from 'vue'
export default {
  name:"choiceTime",
  setup(props,ctx) {
    const second = ref(60)
    const time = ref("")
    time.value = String(second.value)+'s'
    watch(second,(newV)=>{
        if(newV < 60) time.value = String(newV) + 's'
        else {
          if(newV%60 == 0){
            let minute = String(parseInt(newV/60)) +'min'
            time.value = minute
          }
          else {
            let minute = String(parseInt(newV/60)) +'min'
            let s = String(parseInt(newV%60)) +'s'
            time.value = minute + s
          }
        }
        ctx.emit('changeSecond',newV)
    })
    return{
      props,
      second,
      time,
    }

  }
}
</script>

<style lang="less" scoped>
.choiceTime{
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  >div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title{
    flex: 2;
  }
  .solid{
    flex: 8;
    height: 5px;
    .box{
      width: 100%;
      height: 100%;
      display: flex;
      position: relative;
      align-items: center;
      z-index: 0;
      cursor: pointer;
      .liner{
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      .button{
        width: 15px;
        height: 15px;  
        position: absolute;
        border-radius: 50%;
        
      }
    }
  }
  .number{
    flex: 2;
  }
}
</style>