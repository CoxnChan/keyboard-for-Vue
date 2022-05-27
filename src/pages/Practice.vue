<template>
  <div class="_Practice">
      <div class="left  scrollbar">
        <PracticeValue :essay="essay"> </PracticeValue>
      </div>
      <div class="right">
        <div class="timeCard">
          <Timing :choiceTime="choiceTime"></Timing>
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { mapState } from 'vuex'
import PracticeValue from '@/components/practiceValue.vue'
import Timing from '@/components/timing.vue'
export default {
    name:"_Practice",
    components:{
      PracticeValue,
      Timing
    },
    computed:{
      ...mapState(['essay']),
      ...mapState(['choiceTime'])
    },
    setup(props) {
      const inputValue = ref("")

      return {
        props,
        inputValue
      }
    }
}
</script>

<style lang="less" scoped>
._Practice{
  width: 80%;
  height: 100%;
  display: flex;
  padding: 20px 80px;
  box-sizing: border-box;
  >div{
    padding: 10px ;
    box-sizing: border-box;
  }
  .left{
    flex: 3;
    overflow: auto;
  }
  .right{
    flex: 1;
    .timeCard{
      width: 100%;
      height: 250px;
      padding: 5px;
      box-sizing: border-box;
    }
  }
  
}

</style>