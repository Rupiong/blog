<template>
  <div
    class="relative flex h-full w-full flex-col gap-10 bg-white transition-colors dark:bg-zinc-900 pb-10"
  >
    <div
      class="mx-auto flex h-full max-w-[1200px] items-center text-black transition-colors dark:text-zinc-100"
    >
      <div class="w-full justify-end flex gap-4 p-6">
        <div class="w-full md:w-3/4 text-lg flex flex-col">
          <div class="text-[48px] font-bold leading-[1]">Hi, I’m Huang Yuping ✨</div>
          <div class="mt-6 md:mt-14 flex flex-col gap-4">
            <div>
              I’m a senior front-end engineer based in Xiamen. Most of my
              day-to-day work is H5, with a strong focus on user-facing
              products. I’ve built solid experience in UI and interaction, and I
              enjoy making pages that work well and look good.
            </div>
            <div>
              I’ve also done graphic design, so I’m a bit more tuned in to
              layout, hierarchy, and visual rhythm—and I try to carry that
              through in code so the experience feels complete and consistent.
            </div>
            <div>
              I believe good front-end isn’t just “it runs”; it should feel
              smooth, trustworthy, and a little pleasant in every scroll, tap,
              and load.
            </div>
            <div>
              When I’m not coding, I like swimming 🏊, walking in the
              park 🌳, and sometimes gaming 🎮 to unwind.
            </div>
          </div>
          <div class="mt-6 md:mt-14 text-[#666] dark:text-[#ccc] text-[15px] leading-[1.5]">
            <div>
              你好，我是黄裕平，👨‍💻 我是一名前端开发工程师，常驻厦门。日常工作以 H5 为主，更偏向
              用户端 场景；在 UI 与交互
              上积累了不少实战经验，喜欢把页面做得既好用又顺眼。
            </div>
            <div>
              我也曾做过
              平面设计，所以对版式、层次和视觉节奏会多一分敏感——写代码时也会尽量让体验更完整、更一致。
            </div>
            <div>
              我相信好的前端不只是「能跑」，更要让用户在滑动、点击、加载之间感到顺畅、可信、有一点愉悦感。
            </div>
            <div>
              不敲代码的时候，我喜欢 游泳 🏊、在 公园散步 🌳，偶尔也会 打打游戏
              🎮 放松一下。
            </div>
          </div>
        </div>
      </div>
    </div>
    <Particles
      :particle-count="400"
      :particle-spread="10"
      :speed="0.1"
      :particle-colors="['#dddddd']"
      :move-particles-on-hover="true"
      :particle-hover-factor="1"
      :alpha-particles="false"
      :particle-base-size="100"
      :size-randomness="1"
      :camera-distance="20"
      :disable-rotation="false"
      class="w-full h-full"
    />
  </div>
</template>
<script setup lang="ts">
import Particles from "@/components/Particles.vue";
import about_bg from "@/assets/images/about_bg.jpg";
definePageMeta({
  layout: "custom-full",
  showSiderBar: false,
  title: "About Me",
  slogan: "黑夜, 總是最安靜的角落。",
  headerBgUrl: about_bg,
});

const technologyList = [
  { name: "Vue.js", icon: "logos:vue" },
  { name: "Pinia", icon: "logos:pinia" },
  { name: "Vite", icon: "logos:vitejs" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "HTML5", icon: "logos:html-5" },
  { name: "webpack", icon: "logos:webpack" },
  { name: "Typescript", icon: "logos:typescript-icon" },
  { name: "Photoshop", icon: "logos:adobe-photoshop" },
  { name: "Illustrator", icon: "logos:adobe-illustrator" },
  { name: "Indesign", icon: "logos:adobe-indesign" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "Php", icon: "logos:php-alt" },
  { name: "Nuxt.js", icon: "logos:nuxt-icon" },
  { name: "axios.js", icon: "logos:axios" },
  { name: "naive UI", icon: "logos:naiveui" },
  { name: "element UI", icon: "logos:element" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "tailwindcss", icon: "logos:tailwindcss-icon" },
  { name: "React.js", icon: "logos:react" },
];

const checked = ref(true);
</script>
