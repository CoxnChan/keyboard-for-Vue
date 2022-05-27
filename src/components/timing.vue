<template>
  <div class="_timing diy-background-colorW">
      <div class="speed">
          <div class="typewriting">
              打字速度:
          </div>
          <div class="error">
              错字数:
          </div>
      </div>
      <div class="time">
          {{Shour}}:{{Sminute}}:{{Ssecond}}
      </div>
      <div class="buttons">
          <div class="start " @click="start()">
              开始
          </div>
          <div class="pause" @click="pause()">
              暂停
          </div>
          <div class="over" @click="theEnd()">
              结束
          </div>
      </div>
  </div>
</template>

<script>
import { ref,onMounted } from "vue";
export default {
    name:"_Timing",
    props:{
        choiceTime:{
            type:Number,
            default:120
        }
    },
    setup(props) {
        const second = ref(0)
        const minute = ref(0)
        const hour = ref(0)
        
        const Ssecond = ref("00")
        const Sminute = ref("00")
        const Shour = ref("00")

        let setTime = {}
        const timing = () =>{
            minute.value = parseInt(props.choiceTime/60%60)
            second.value = parseInt(props.choiceTime%60)
            hour.value = parseInt(props.choiceTime/60/60)
            Stiming()
        }

        const Stiming = () =>{
            String(hour.value).length == 1? Shour.value = '0'+ hour.value:Shour.value = hour.value
            String(minute.value).length == 1? Sminute.value = '0'+ minute.value:Sminute.value = minute.value
            String(second.value).length == 1? Ssecond.value = '0'+ second.value:Ssecond.value = second.value
        }

        const start = () =>{
            setTime = setInterval(() => {
                if(second.value==0){
                    if(minute.value==0){
                        if(hour.value==0){
                            theEnd()
                        }else{
                            hour.value -= 1
                            minute.value == 59
                            second.value == 59
                        }
                    }else{
                        minute.value -= 1
                        second.value = 59
                    }
                }else{
                    second.value -= 1
                }
                Stiming()
            }, 1000);
        }
        const pause = () =>{
            clearInterval(setTime)
        }
        const theEnd = () =>{
            
        }
        
        onMounted(() => {
          timing()
          console.log(props.choiceTime)
        })
        return{
            props,
            hour,minute,second,
            Shour,Sminute,Ssecond,
            timing,Stiming,
            start,pause,theEnd,
            setTime
        }
    }
}
</script>

<style lang="less" scoped>
._timing{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    >div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .speed{
        flex: 2;
        flex-direction: column;
        align-items: flex-start;
        
    }
    .time{
        flex: 3;
        font-size: 2em;
    }
    .buttons{
        flex: 1;
        display: flex;
        >div{
            flex:1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3px 8px;
            box-sizing: border-box;
            background-color: #c4c4c4;
            font-size: 0.5em;
            margin: 0 2px;
            border-radius: 5px;
            cursor: pointer;
        }
    }
}
</style>