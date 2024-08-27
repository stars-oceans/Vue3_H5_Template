import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore(
  "user",
  () => {
    const userToken = ref(null);
    const userId = ref(null);
    function setToken(token) {
      userToken.value = token || null;
    }
    function setUserId(id) {
      userId.value = id || null;
    }
    return { setToken, userToken, setUserId, userId };
  },
  {
    persist: true,
  }
);
