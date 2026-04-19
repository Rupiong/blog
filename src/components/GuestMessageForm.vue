<template>
  <section
    class="w-full pt-10 dark:border-zinc-700"
    :class="
      showSectionTopBorder
        ? 'border-t border-[#f1f1f1]'
        : ''
    "
    aria-labelledby="guest-message-form-title"
  >
    <h2
      id="guest-message-form-title"
      class="mb-6 text-[16px] font-bold text-[#333] dark:text-zinc-100"
    >
      {{ sectionTitle }}
    </h2>
    <form
      class="flex w-full max-w-2xl flex-col gap-5"
      @submit.prevent="handleSubmit"
    >
      <div class="flex flex-col gap-2">
        <label
          for="guest-nickname"
          class="text-[13px] font-medium text-[#666] dark:text-zinc-400"
        >
          昵称
        </label>
        <input
          id="guest-nickname"
          v-model.trim="form.userName"
          type="text"
          name="userName"
          maxlength="32"
          autocomplete="nickname"
          placeholder="怎么称呼你"
          class="w-full rounded-lg border border-[#e8e8e8] bg-white px-4 py-2.5 text-[14px] text-[#333] outline-none transition placeholder:text-[#bbb] focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label
          for="guest-email"
          class="text-[13px] font-medium text-[#666] dark:text-zinc-400"
        >
          邮箱（必填）
        </label>
        <div class="flex flex-col gap-2 sm:flex-row sm:items-stretch">
          <input
            id="guest-email"
            v-model.trim="form.email"
            type="email"
            name="email"
            maxlength="128"
            autocomplete="email"
            placeholder="用于接收通知（不会公开展示）"
            class="w-full flex-1 rounded-lg border border-[#e8e8e8] bg-white px-4 py-2.5 text-[14px] text-[#333] outline-none transition placeholder:text-[#bbb] focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          />
          <button
            type="button"
            class="inline-flex shrink-0 items-center justify-center rounded-lg border border-[#e8e8e8] bg-[#fafafa] px-4 py-2.5 text-[13px] font-medium text-[#333] transition hover:bg-[#f0f0f0] disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
            :disabled="!emailLooksValid || sendCodeCooldown > 0"
            @click="openCaptchaModal"
          >
            {{
              sendCodeCooldown > 0
                ? `${sendCodeCooldown}s 后可重发`
                : "发送验证码"
            }}
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label
          for="guest-email-code"
          class="text-[13px] font-medium text-[#666] dark:text-zinc-400"
        >
          邮箱验证码（必填）
        </label>
        <input
          id="guest-email-code"
          v-model.trim="form.emailCode"
          type="text"
          name="emailCode"
          maxlength="12"
          autocomplete="one-time-code"
          inputmode="numeric"
          placeholder="请先通过上方按钮获取验证码"
          class="w-full rounded-lg border border-[#e8e8e8] bg-white px-4 py-2.5 text-[14px] text-[#333] outline-none transition placeholder:text-[#bbb] focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        />
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex items-baseline justify-between gap-2">
          <label
            for="guest-content"
            class="text-[13px] font-medium text-[#666] dark:text-zinc-400"
          >
            留言内容（必填）
          </label>
          <span class="text-[12px] text-[#999] dark:text-zinc-500">
            {{ contentLength }} / {{ maxContentLength }}
          </span>
        </div>
        <textarea
          id="guest-content"
          v-model="form.content"
          name="content"
          rows="5"
          :maxlength="maxContentLength"
          placeholder="想说点什么…"
          class="w-full resize-y rounded-lg border border-[#e8e8e8] bg-white px-4 py-3 text-[14px] leading-relaxed text-[#333] outline-none transition placeholder:text-[#bbb] focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        />
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          class="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-[14px] font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          :disabled="submitting || !canSubmit"
        >
          <span
            v-if="submitting"
            class="inline-block size-4 shrink-0 animate-spin rounded-full border-2 border-white border-t-transparent"
            aria-hidden="true"
          />
          <span>{{ submitting ? "提交中…" : "提交留言" }}</span>
        </button>
        <p class="text-[12px] text-[#999] dark:text-zinc-500">
          {{ footerHint }}
        </p>
      </div>
    </form>

    <a-modal
      v-model:open="captchaModalOpen"
      title="发送邮箱验证码"
      :confirm-loading="captchaModalSending"
      ok-text="确定"
      cancel-text="取消"
      destroy-on-close
      @ok="handleCaptchaModalOk"
      @cancel="resetCaptchaModal"
    >
      <div class="flex flex-col gap-4 pt-1">
        <p class="text-[13px] text-[#666] dark:text-zinc-400">
          将向
          <span class="font-medium text-[#333] dark:text-zinc-200">{{
            form.email
          }}</span>
          发送验证码，请先完成图形验证。
        </p>
        <div class="flex flex-col gap-2">
          <span class="text-[13px] font-medium text-[#666] dark:text-zinc-400"
            >图形验证码</span
          >
          <div
            class="flex min-h-[44px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-[#e8e8e8] bg-[#fafafa] dark:border-zinc-600 dark:bg-zinc-800/80"
            role="button"
            tabindex="0"
            title="点击刷新"
            @click="loadGraphicCaptcha"
            @keydown.enter.prevent="loadGraphicCaptcha"
          >
            <img
              v-if="captchaImageUrl"
              :src="captchaImageUrl"
              alt="图形验证码"
              class="max-h-12 w-auto object-contain"
            />
            <span
              v-else
              class="px-3 py-2 text-center text-[12px] text-[#999] dark:text-zinc-500"
            >
              {{
                captchaLoading
                  ? "加载中…"
                  : "图形验证码接口待接入，点击区域可刷新重试"
              }}
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label
            for="guest-graphic-code"
            class="text-[13px] font-medium text-[#666] dark:text-zinc-400"
            >输入上图验证码</label
          >
          <input
            id="guest-graphic-code"
            v-model.trim="graphicCodeInput"
            type="text"
            name="graphicCaptcha"
            maxlength="8"
            autocomplete="off"
            placeholder="请输入图形中的字符"
            class="w-full rounded-lg border border-[#e8e8e8] bg-white px-4 py-2.5 text-[14px] text-[#333] outline-none transition placeholder:text-[#bbb] focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-100 dark:placeholder:text-zinc-500"
            @keyup.enter="handleCaptchaModalOk"
          />
        </div>
      </div>
    </a-modal>
  </section>
</template>

<script setup lang="ts">
import {
  getGuestMessageGraphicCaptcha,
  sendGuestMessageEmailCode,
  type EmailSendCodePurpose,
  type PostPublicSiteMessageBody,
} from "@/api/guestMessage";

const props = withDefaults(
  defineProps<{
    /** 发信用途：站点留言板 `guestbook`，文章评论 `comment` */
    emailCodePurpose?: EmailSendCodePurpose;
    sectionTitle?: string;
    footerHint?: string;
    successMessage?: string;
    /** 是否与上方区块共用顶部分割线（文章页内嵌时可关） */
    showSectionTopBorder?: boolean;
    submitMessage: (body: PostPublicSiteMessageBody) => Promise<unknown>;
  }>(),
  {
    emailCodePurpose: "guestbook",
    sectionTitle: "发表留言",
    footerHint: "留言经审核后公开展示。",
    successMessage: "留言已提交",
    showSectionTopBorder: true,
  },
);

const emit = defineEmits<{
  success: [];
}>();

const maxContentLength = 800;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = reactive({
  userName: "",
  email: "",
  emailCode: "",
  content: "",
});

const submitting = ref(false);
const captchaModalOpen = ref(false);
const captchaModalSending = ref(false);
const captchaLoading = ref(false);
const captchaImageUrl = ref("");
const captchaToken = ref("");
const graphicCodeInput = ref("");
const sendCodeCooldown = ref(0);
let sendCodeCooldownTimer: ReturnType<typeof setInterval> | undefined;

const contentLength = computed(() => form.content.length);
const emailLooksValid = computed(() => emailPattern.test(form.email));
const canSubmit = computed(
  () =>
    form.userName.length >= 1 &&
    form.userName.length <= 32 &&
    emailLooksValid.value &&
    form.emailCode.trim().length >= 1 &&
    form.content.trim().length >= 1,
);

function startSendCodeCooldown(seconds = 60) {
  sendCodeCooldown.value = seconds;
  if (sendCodeCooldownTimer) clearInterval(sendCodeCooldownTimer);
  sendCodeCooldownTimer = setInterval(() => {
    sendCodeCooldown.value -= 1;
    if (sendCodeCooldown.value <= 0) {
      sendCodeCooldown.value = 0;
      if (sendCodeCooldownTimer) {
        clearInterval(sendCodeCooldownTimer);
        sendCodeCooldownTimer = undefined;
      }
    }
  }, 1000);
}

onUnmounted(() => {
  if (sendCodeCooldownTimer) clearInterval(sendCodeCooldownTimer);
});

function openCaptchaModal() {
  if (!emailLooksValid.value) {
    message.warning("请先填写有效邮箱");
    return;
  }
  captchaModalOpen.value = true;
  nextTick(() => {
    void loadGraphicCaptcha();
  });
}

async function loadGraphicCaptcha() {
  captchaLoading.value = true;
  captchaImageUrl.value = "";
  graphicCodeInput.value = "";
  try {
    const res = await getGuestMessageGraphicCaptcha();
    if (res.ok) {
      captchaToken.value = res.captchaToken;
      captchaImageUrl.value = res.imageUrl;
    } else {
      captchaToken.value = "";
      captchaImageUrl.value = "";
      if (res.reason === "load_failed") {
        message.error("图形验证码加载失败，请稍后重试");
      }
    }
  } finally {
    captchaLoading.value = false;
  }
}

function resetCaptchaModal() {
  graphicCodeInput.value = "";
  captchaImageUrl.value = "";
  captchaToken.value = "";
}

async function handleCaptchaModalOk() {
  if (captchaModalSending.value) return;

  const code = graphicCodeInput.value.trim();
  if (!code) {
    message.warning("请输入图形验证码");
    return;
  }

  captchaModalSending.value = true;
  try {
    const result = await sendGuestMessageEmailCode({
      email: form.email.trim(),
      captchaToken: captchaToken.value,
      captchaCode: code,
      purpose: props.emailCodePurpose,
    });
    if (result.ok) {
      message.success("验证码已发送，请查收邮箱");
      captchaModalOpen.value = false;
      resetCaptchaModal();
      startSendCodeCooldown(60);
      return;
    }
    if (result.reason === "invalid_captcha") {
      message.error("图形验证码错误，请重试");
      void loadGraphicCaptcha();
      return;
    }
    if (result.reason === "too_frequent") {
      message.warning("发送过于频繁，请稍后再试");
      return;
    }
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "发送失败，请稍后重试";
    message.error(msg);
  } finally {
    captchaModalSending.value = false;
  }
}

async function handleSubmit() {
  if (!canSubmit.value || submitting.value) return;

  const userName = form.userName.trim();
  const email = form.email.trim();
  const emailCode = form.emailCode.trim();
  const content = form.content.trim();
  if (!userName || !email || !emailCode || !content) {
    message.warning("请完整填写昵称、邮箱、邮箱验证码与留言内容");
    return;
  }
  if (!emailLooksValid.value) {
    message.warning("请填写有效邮箱");
    return;
  }

  submitting.value = true;
  try {
    await props.submitMessage({
      guest_name: userName,
      email,
      email_code: emailCode,
      content,
    });
    message.success(props.successMessage);
    form.userName = "";
    form.email = "";
    form.emailCode = "";
    form.content = "";
    emit("success");
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "提交失败，请稍后重试";
    message.error(msg);
  } finally {
    submitting.value = false;
  }
}
</script>
