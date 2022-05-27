<template>
  <div class="_Keyboard">
    <div class="keyCol" v-for="(item,index) in keyList" :key="index">
      <div class="key diy-background-colorW"  v-for="(key,i) in item"  :key="i" :class="'key'+keyIdList[index][i]"
        >
          <Key :keyCode="key" :active="contains(codeList,keyIdList[index][i])" ></Key>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Key from '@/components/key.vue'
export default {
  name:"_Keyboard",
  components:{
    Key
  },
  setup() {
    const keyList = ref([
      ['~`','!1','@2','#3','$4','%5','^6','&7','*8','(9',')0','_-','+=','Backspace'],
      ['Tab','Q','W','E','R','T','Y','U','I','O','P','{[','}]','|\\'],
      ['CapsLock','A','S','D','F','G','H','J','K','L',':;','"\'','Enter'],
      ['Shift','Z','X','C','V','B','N','M','<,','>.','?/','Shift'],
      ['Ctrl','Win','Alt','Space','Alt','Fn','Ctrl']
    ])
    const keyIdList = ref([
      ['192','49','50','51','52','53','54','55','56','57','48','189','187','8'],
      ['9','81','87','69','82','84','89','85','73','79','80','219','221','220'],
      ['20','65','83','68','70','71','72','74','75','76','186','222','13'],
      ['16','90','88','67','86','66','78','77','188','190','191','16'],
      ['17','91','18','32','18','91','','17']
    ])

    const codeList = ref([])  //存储点击按键

    //点击键盘时添加，松开删除
    document.onkeydown = (e) => {
      if(!codeList.value.includes(e.keyCode)) codeList.value.push(e.keyCode)
    }
    document.onkeyup = (e) => {
      for(let i = 0; i <= codeList.value.length; i++ ){
        if(codeList.value[i] == e.keyCode) codeList.value.splice(i,1)
      }
    }

    //判断该按键是否在codeList里面
    const contains = (list,item) => {
      for(let i = 0; i <= list.length; i++ ){
        if(codeList.value[i] == item) {
          return true 
        }
      }
    }

    return {
      keyList,
      keyIdList,
      codeList,
      contains
    }
  }
}
</script>

<style lang="less" scoped>
._Keyboard{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .keyCol{
    display: flex;
    width: 100%;
    height: calc(100% / 5);
    .key{
      display: flex;
      justify-content: center;
      flex: 1;
      margin: 2px;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      cursor: pointer;
      overflow: hidden;
    }
    .key32{
      flex: 8.3 ;
    }
    .key9{
      flex: 1.5;
    }
    .key220{
      flex: 1.5;
    }
    .key13{
      flex: 2;
    }
    .key16{
      flex: 2.5;
    }
    .key20{
      flex: 2;
    }
    .key8{
      flex: 2;
    }

  }
  .key:hover{
    background-color: #e5e5e5;
  }
  
  
}
</style>