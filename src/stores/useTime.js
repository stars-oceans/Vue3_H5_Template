import { ref } from "vue";
import { defineStore } from "pinia";

export const useTime = defineStore("timeData", () => {
  const timeData = ref(null);

 function setTime (timeObj){
    timeData.value = timeObj
 }
  return { timeData, setTime };
},
{
   persist: true,
 },
);
