<template>
  <div class="content">
      <div class="values">
          <div class="valueItem diy-box-shadow diy-background-colorW" v-for="(item,index) in valueList" :key="index">
              <div class="value">
                  <div class="word" v-for="(word,i) in item" :key="i"
                    :class="(inputValue[index][i] == word?'diy-text-colorH':
                    (typeof(inputValue[index][i]) == 'undefined'?'wordB':'diy-text-colorR'))">
                      {{word}}
                  </div>
              </div>
              <input class="inputValue" type="text" v-model="inputValue[index]">
          </div>
      </div>
    
  </div>
</template>

<script>
import { ref,onMounted} from "vue";
export default {
    name:"practiceValue",
    props:{
        essay:{
            type:Object,
            default:()=>{}
        },
    },

    setup(props) {
        const valueList = ref([])
        const inputValue = ref([])

        const sortList = () => {
            let start = 0
            let out = props.essay.context.length
            let length = 35
            let end = length
            while (start <= out) {
                valueList.value.push(props.essay.context.slice(start,end))
                inputValue.value.push("")
                start += length
                end += length
            }
        }


        onMounted(() => {
            sortList()
        })
        return{
            props,
            inputValue,
            valueList
        }
    }
}
</script>

<style lang="less" scoped>
.content{
    width: 100%;
    
    overflow: auto;
    .valueItem{
        padding: 5px 15px ; 
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        border-radius: 10px;
        >div,>input{
            
            padding: 10px;
            box-sizing: border-box;
            font-size: 1.1em;
        }
        .value{
            .word{
                float: left;
            }
            border-bottom: 1px dashed #e5e5e5;
        }
        .inputValue{
            border: none;
            margin: 5px;
            padding: 5px;
            box-sizing: border-box;
            font-size: 1.1em;
            outline-style: none ;
        }
    }
    
}
</style>