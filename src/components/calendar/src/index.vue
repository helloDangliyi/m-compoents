<template>
  <div id='calendar'></div>
</template>

<script lang='ts' setup>
import {onMounted, PropType, ref,watch} from "vue"
import { Calendar, EventClickArg, EventContentArg } from '@fullcalendar/core'
import daygrid from '@fullcalendar/daygrid'
import interaction, { DateClickArg } from '@fullcalendar/interaction'
import { EventItem } from "./types";

let props = defineProps({
  // 语言
  locale :{
    type:String,
    default:'zh-cn'
  },
  // 视图模式
  initialView:{
    type: String,
    default:'dayGridMonth'
  },
  // 按钮文字
  buttonText :{
    type: Object,
    default:()=>{
      return {
        today:'今天',
        month:'月',
        week:'周',
        day:'日',
        prevYear:'上一年',
        nextYear:'上一年',
        prev:'上一月',
        next:'下一月',

      }
    }
  },
  // 头部工具栏
  headerToolbar:{
    type: Object,
    default:()=>{
      return {
        start:'title',
        center:'',
        end:'prev today next'
      }
    }
  },
   // 底部工具栏
   footerToolbar:{
    type: Object,
    default:()=>{}
  },
  // 事件源
  events:{
    type: Array as PropType<EventItem []>,
    default: ()=>[]
  },
  // 日历显示事件结束时间
  displayEventEnd:{
    type: Boolean,
    default: false
  },
  // 自定义渲染日历内容
  eventContent:{
    type: Function
  }
})

let emits = defineEmits(['dateClick','eventClick'])

// 日历实例
let calendar = ref<Calendar>()

watch(() => props.events,val=>{
  renderCalender()
},{deep:true})

// 渲染日历的方法
let renderCalender = () =>{
  let el = document.getElementById('calendar');
  if(el) {
     calendar.value = new Calendar(el, {
        // 日历插件
        plugins:[daygrid,interaction],
        initialView: props.initialView,
        locale: props.locale,
        buttonText: props.buttonText,
        headerToolbar: props.headerToolbar,
        footerToolbar: props.footerToolbar,
        eventSources: [
          {
            // 渲染日历事件
            events(e,callback){
              if(props.events.length) {
                // console.log('props.events.length: ', props.events);
                // callback(props.events) //可以显示在日历上
              }else {
                callback([])
              }
            }
          }
        ],
        // 点击日历上的某一天
        dateClick(info: DateClickArg) {
          emits('dateClick',info)
        },
        // 日历上事件的点击
        eventClick(info:EventClickArg) {
          emits('eventClick',info)
        },
        // 显示结束事件时间
        displayEventEnd: props.displayEventEnd,
        eventContent:props.eventContent

      });
      calendar.value.render();
  }
}

onMounted(()=>{
  renderCalender()
})
</script>

<style lang="scss" scoped></style>
