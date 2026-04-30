export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  let shouldScrollToTop = false;

  router.afterEach(() => {
    shouldScrollToTop = true;
  });

  nuxtApp.hook("page:finish", () => {
    if (!shouldScrollToTop) {
      return;
    }
    shouldScrollToTop = false;

    requestAnimationFrame(() => {
      const appRoot = document.querySelector("#__nuxt");
      if (appRoot instanceof HTMLElement) {
        appRoot.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  });
});
