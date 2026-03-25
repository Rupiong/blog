<template>
  <div class="flex flex-col gap-10 p-3 bg-white">
    <section class="flex flex-col gap-4 border-b border-dashed pb-10">
      <h2 class="text-[20px] font-bold text-[#333]">为什么赞助</h2>
      <div class="text-[14px] text-[#666] leading-[2] space-y-3">
        <p>
          维护这个博客需要时间与服务器、域名等成本。如果你在这里读到了对你有用的文字，愿意用一杯咖啡的价格表示支持，我会非常感激。
        </p>
        <p>
          赞助完全自愿，金额随意；所有心意都会用于站点的稳定运行与内容更新。无法提供发票或商业回报，只是一份对独立创作的鼓励。
        </p>
        <p class="text-[13px] text-[#999]">
          扫码后请核对收款方信息，谨防诈骗。感谢你的信任。
        </p>
      </div>
    </section>

    <section class="flex flex-col gap-6">
      <h2 class="text-[20px] font-bold text-[#333]">收款方式</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto w-full"
      >
        <div
          class="flex flex-col items-center gap-4 p-6 rounded-lg  bg-[#fafafa]"
        >
          <div class="flex items-center gap-2 text-[15px] font-semibold text-[#333]">
            <Icon name="ic:baseline-wechat" class="text-[#07c160] text-xl" />
            微信支付
          </div>
          <div
            class="w-100 h-100 shrink-0 rounded-md overflow-hidden bg-white ring-1 ring-[#eee] p-2"
          >
            <img
              :src="wechatQr"
              alt="微信收款码"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="text-[12px] text-[#999] text-center">打开微信扫一扫</p>
        </div>

        <div
          class="flex flex-col items-center gap-4 p-6 rounded-lg bg-[#fafafa]"
        >
          <div class="flex items-center gap-2 text-[15px] font-semibold text-[#333]">
            <Icon name="simple-icons:alipay" class="text-[#1677ff] text-xl" />
            支付宝
          </div>
          <div
            class="w-100 h-100 shrink-0 rounded-md overflow-hidden bg-white ring-1 ring-[#eee] p-2"
          >
            <img
              :src="wechatQr"
              alt="支付宝收款码"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="text-[12px] text-[#999] text-center">打开支付宝扫一扫</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import sponsorBg from "@/assets/images/about_bg.jpg";
import wechatQr from "@/assets/images/common/wechat.jpg";
// 替换为你的支付宝收款码图片后，将下一行改为: import alipayQr from "@/assets/images/common/alipay.jpg"
import alipayQr from "@/assets/images/common/alipay-qrcode-placeholder.svg";

definePageMeta({
  layout: "custom",
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
