<template>
  <m-calendar 
  :events="events" 
  :eventContent="eventContent" 
  displayEventEnd
  @dateClick="dateClick"
  @eventClick="eventClick"
  ></m-calendar>
</template>

<script lang='ts' setup>
import { EventClickArg, EventContentArg } from "@fullcalendar/core";
import { DateClickArg } from "@fullcalendar/interaction";
import {ref} from "vue"
import { EventItem } from "../../components/calendar/src/types";

let events =ref<EventItem []>(
  [
  {
    title:'购物',
    start:'2023-4-11 08:00',
    end:'2023-4-11 09:00',
    editTable: true, //日历上的备注可以拖到其他日期
  },
  {
    title:'敲代码',
    start:'2023-4-4 08:00',
    end:'2023-4-4 09:00'
  },
]
)
 // 点击日历上的某一天
let dateClick = (info:DateClickArg) =>{
  events.value.push({
    start: info.dateStr + ' 12:00',
    end: info.dateStr + ' 18:00',
    title:'学习'
  })
  console.log('events.value: ', events.value);

}
// 日历上事件的点击
let eventClick = (info: EventClickArg)=>{
  console.log('EventClickArginfo: ', info);

}

let eventContent= (arg:EventContentArg)=>{
          console.log('arg: ', arg);
          let el = document.createElement('div')
          let timeTextArr = arg.timeText.split('-')
          let start = timeTextArr[0].replace('上午','').replace('下午','').replace('时','')
          let end = timeTextArr[1].replace('上午','').replace('下午','').replace('时','')
          el.innerHTML=`
          <div>开始时间:${start}</div>
          <div>结束时间:${end}</div>
          <div>标题:${arg.event._def.title}</div>
          `
          return {
            domNodes:[el]
          }
        }
</script>

<style lang="scss" scoped></style>
