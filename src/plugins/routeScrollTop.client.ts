export default defineNuxtPlugin(() => {
  const router = useRouter();

  router.afterEach(() => {
    requestAnimationFrame(() => {
      const appRoot = document.querySelector("#__nuxt");
      if (appRoot instanceof HTMLElement) {
        appRoot.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  });
});
