<template>
  <div class="keyCode" :class="(active?'diy-background-color diy-text-colorW':'')">
      {{keyCode}}
  </div>
</template>

<script>
export default {
    name:"keyCode",
    props:{
        keyCode:{
            type:String,
            default:""
        },
        active:{
            type:Boolean,
            default:false
        }
    },
    setup(props) {
        

        return {
            props,
        }
    }
}
</script>

<style lang="less" scoped>
.keyCode{
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
}
</style>