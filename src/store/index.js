import { createStore } from 'vuex'
import api from '@/api/essay.js'

export default createStore({
  state: {
    navbarList:[
      {
        title:"中文打字",
        link:"/chinese"
      },
      {
        title:"英文打字",
        link:"/english"
      },
    ],
    chineseTabBar:[
      {
        title:"文章",
        icon:"chineseEssay",
        link:"chineseEssay"
      },
      {
        title:"文言文",
        icon:"chinesePoem",
        link:"chinesePoem"
      },
      {
        title:"词组",
        icon:"chinesePhrase",
        link:"chinesePhrase"
      },
      {
        title:"单字",
        icon:"chineseWord",
        link:"chineseWord"
      },
    ],
    essayList:[],
    essay:{
        title:"小蝌蚪找妈妈",
        id:"0123",
        context:"池塘里有一群小蝌蚪，大大的脑袋，黑灰色的身子，甩着长长的尾巴，快活地游来游去。小蝌蚪游哇游，过了几天，长出了两条后腿。他们看见鲤鱼妈妈在教小鲤鱼捕食，就迎上去，问：“鲤鱼阿姨，我们的妈妈在哪里？”鲤鱼妈妈说：“你们的妈妈有四条腿，宽嘴巴。你们到那边去找吧！”小蝌蚪游哇游，过了几天，长出了两条前腿。他们看见一只乌龟摆动着四条腿在水里游，连忙追上去，叫着：“妈妈，妈妈！”乌龟笑着说：“我不是你们的妈妈。你们的妈妈头顶上有两只大眼睛，披着绿衣裳。你们到那边去找吧！”小蝌蚪游哇游，过了几天，尾巴变短了。他们游到荷花旁边，看见荷叶上蹲着一只大青蛙，披着碧绿的衣裳，露着雪白的肚皮，鼓着一对大眼睛。小蝌蚪游过去，叫着：“妈妈，妈妈！”青蛙妈妈低头一看，笑着说：“好孩子，你们已经长成青蛙了，快跳上来吧！”他们后腿一蹬，向前一跳，蹦到了荷叶上。不知什么时候，小青蛙的尾巴已经不见了。他们跟着妈妈，天天去捉害虫。"
    },
    choiceTime:120,
    choiceTitle:2
  },
  getters: {
  },
  mutations: {
    getLinkOfChinese(state,link){
      state.essayList = api.chinese[link]
      state.essay = state.essayList[0]
    },
    changeEssay(state,item){
      state.essay = item
    },
    changeChoiceTime(state,second){
      state.choiceTime = second
    },
    submit(state){
      console.log('文章:',state.essay.title)
      console.log('时间: ',state.choiceTime)
    }
  },
  actions: {
  },
  modules: {
  }
})
