<template>
  <div class="_icon" :style="'background-image:url('+icon+');'">
      <!-- <img :src="icon" alt="" > -->
  </div>
</template>

<script>
import { ref,onMounted } from 'vue'
export default {
    name:"_Icon",
    props:{
        iconTitle:{
            type:String,
            default:""
        }
    },

    setup(props) {
        const iconList = ref({
            chineseEssay:require("../assets/chinese_essay.png"),
            chinesePoem:require("../assets/chinese_poem.png"),
            chineseWord:require("../assets/chinese_word.png"),
            chinesePhrase:require("../assets/chinese_phrase.png")
        })
        const icon = ref("")
        const choiceIcon = () =>{
            icon.value = iconList.value[props.iconTitle]
        }
        onMounted(()=>{
            choiceIcon()
        })
        return {
            props,
            iconList,
            icon,
            choiceIcon
        }
    }
}
</script>

<style lang="less" scoped>
._icon{
    width: 100%;
    height: 100%;
    // background-image: url('../assets/chinese_essay.png');
    background-size: cover;
}
</style>