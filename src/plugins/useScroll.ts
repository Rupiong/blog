import { useScroll } from "@vueuse/core";
export default defineNuxtPlugin(() => {
  return {
    provide: {
      onReachBottom: (fn: Function) => {
        onMounted(() => {
          const el = document.querySelector("#__nuxt");
          const { arrivedState } = useScroll(el, {
            offset: { bottom: 50 },
            throttle: 500,
            // onScroll: (e) => {
            //   if (arrivedState.bottom) {
            //     console.log(arrivedState, "arrivedState");
            //   }
            // },
          });
          // console.log(arrivedState, "arrivedState");
          watchEffect(() => {
            if (arrivedState.bottom) {
              typeof fn === "function" && fn();
            }
          });
        });
      },
    },
  };
});
