<template>
  <router-view/>
</template>

<style>
body{
  padding: 0;
  margin: 0;
  background-color: #f4f4f4;
}
::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
  background-color: #fff;
  box-shadow: 2px 2px 4px #e5e5e5;
  padding: 1px;
  box-sizing: border-box;
  border-radius: 15px;
}
::-webkit-scrollbar-thumb{
  background-color: #2189ff;
  
  border-radius: 15px;
}
.diy-box-shadow{
  box-shadow: 2px 2px 4px #e6e6e6;
}

.diy-background-color{
  background-color: #2189ff;
}
.diy-background-colorH{
  background-color: #e5e5e5;
}
.diy-background-colorW{
  background-color: #FFF;
}
.diy-text-colorW{
  color: #fff;
}
.diy-text-colorH{
  color:#c4c4c4;
}
.diy-text-colorR{
  color: rgb(183, 0, 0);
}
</style>
