<template>
  <div
    class="flex h-full w-full justify-center bg-white transition-colors dark:bg-zinc-900"
  >
    <ContentInner class="">
      <div
        class="mx-auto flex flex-col items-center justify-center gap-10 bg-white p-3 transition-colors dark:bg-zinc-900"
      >
        <div class="text-[48px] font-bold dark:text-zinc-100">感谢支持 💖</div>
        <section class="flex flex-col gap-4 border-b border-dashed border-zinc-200 pb-10 dark:border-zinc-700">
          <div
            class="space-y-3 text-center text-[14px] leading-[2] text-[#666] dark:text-zinc-400"
          >
            <p>
              维护这个博客需要时间与服务器、域名等成本。如果你在这里读到了对你有用的文字，愿意用一杯咖啡的价格表示支持，我会非常感激。
            </p>
            <p>
              赞助完全自愿，金额随意；所有心意都会用于站点的稳定运行与内容更新。无法提供发票或商业回报，只是一份对独立创作的鼓励。
            </p>
            <p class="text-[13px] text-[#999] dark:text-zinc-500">
              扫码后请核对收款方信息，谨防诈骗。感谢你的信任。
            </p>
          </div>
        </section>

        <section class="flex flex-col gap-6">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto w-full"
          >
            <div
              class="flex flex-col items-center gap-4 rounded-lg bg-[#fafafa] p-6 dark:bg-zinc-800/50"
            >
              <div
                class="flex items-center gap-2 text-[15px] font-semibold text-[#333] dark:text-zinc-200"
              >
                <Icon
                  name="ic:baseline-wechat"
                  class="text-[#07c160] text-xl"
                />
                微信支付
              </div>
              <div
                class="h-100 w-100 shrink-0 overflow-hidden rounded-md bg-white p-2 ring-1 ring-[#eee] dark:bg-zinc-900 dark:ring-zinc-700"
              >
                <img
                  :src="wechatQr"
                  alt="微信收款码"
                  class="w-full h-full object-contain"
                />
              </div>
              <p class="text-center text-[12px] text-[#999] dark:text-zinc-500">
                打开微信扫一扫
              </p>
            </div>

            <div
              class="flex flex-col items-center gap-4 rounded-lg bg-[#fafafa] p-6 dark:bg-zinc-800/50"
            >
              <div
                class="flex items-center gap-2 text-[15px] font-semibold text-[#333] dark:text-zinc-200"
              >
                <Icon
                  name="simple-icons:alipay"
                  class="text-[#1677ff] text-xl"
                />
                支付宝
              </div>
              <div
                class="h-100 w-100 shrink-0 overflow-hidden rounded-md bg-white p-2 ring-1 ring-[#eee] dark:bg-zinc-900 dark:ring-zinc-700"
              >
                <img
                  :src="wechatQr"
                  alt="支付宝收款码"
                  class="w-full h-full object-contain"
                />
              </div>
              <p class="text-center text-[12px] text-[#999] dark:text-zinc-500">
                打开支付宝扫一扫
              </p>
            </div>
          </div>
        </section>
      </div>
    </ContentInner>
  </div>
</template>

<script setup lang="ts">
import sponsorBg from "@/assets/images/about_bg.jpg";
import wechatQr from "@/assets/images/common/wechat.jpg";
// 替换为你的支付宝收款码图片后，将下一行改为: import alipayQr from "@/assets/images/common/alipay.jpg"
import alipayQr from "@/assets/images/common/alipay-qrcode-placeholder.svg";

definePageMeta({
  layout: "custom-full",
  showSiderBar: false,
  title: "赞助支持",
  slogan: "一点心意，已是最好的鼓励",
  headerBgUrl: sponsorBg,
});

useHead({
  title: "赞助支持 | copyman blog",
  description: "通过微信或支付宝赞助本站，支持独立博客与内容创作。",
});
</script>
