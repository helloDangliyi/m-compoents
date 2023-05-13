import { ref, computed } from "vue";

// 倒计时
export const useTimeLeft = (timeCount = 60)=>{

    const timerLeft = ref(timeCount)

    const timeText = ref('发送验证码')

    const beginTimer = () =>{
        const timer = setTnterver(()=>{
            timerLeft.value--
            timeText.value = `${timeText}s`
            if(timerLeft.value === 0){
                clearInterval(timer)
                timerLeft.value = timeCount
                timeText.value = '发送验证码'
            }
        },1000)
    }
    
    const isBegin = computed(()=> timerLeft.value !== timeCount)

    return {timeText,beginTimer, isBegin}

}