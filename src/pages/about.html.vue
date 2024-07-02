<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-2 border-b pb-10 border-dashed">
      <!-- <div class="text-[20px] font-bold text-[#33]">自我简介</div> -->
      <div class="text-[14px] text-[#666] flex items-center gap-4">
        <div class="w-32 h-40 bg-[#ccc] shrink-0 rounded-md overflow-hidden">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/about_avatar.jpg"
          />
        </div>
        <div class="mt-2 leading-[2]">
          Hey，我是黄裕平（Rupiong），一个略懂编程和设计的斜杆青年。19年毕业于龙岩学院采矿工程专业,通过自学,先后从事过平面设计、UI设计、编程方面的工作,目前是一名前端开发工程师。
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="text-[20px] font-bold text-[#33]">职业技能</div>
      <div class="text-[14px] text-[#666] flex items-center gap-4 flex-wrap">
        <div
          v-for="(item, index) in technologyList"
          :key="index"
          class="flex items-center gap-2 border w-fit text-white p-1 rounded-full bg-black cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:drop-shadow-lg hover:text-primary"
        >
          <div
            class="w-8 h-8 bg-white p-1.5 rounded-full flex items-center justify-center"
          >
            <Icon class="w-full h-full leading-none" :name="item.icon" />
          </div>
          <div class="font-bold mr-2 leading-none text-[12px]">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="text-[20px] font-bold text-[#33]">兴趣爱好</div>
      <div class="text-[14px] text-[#666] flex items-center gap-4 flex-wrap">
        <ul class="list-decimal ml-3">
          <li>研究最新的前端技术</li>
          <li>打打英雄联盟</li>
          <li>上班摸鱼听音乐</li>
          <li>业余游泳爱好者</li>
          <li>湖人总冠军</li>
          <li>股市的小韭菜</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="text-[20px] font-bold text-[#33]">Todo List (2023年)</div>
      <div class="text-[14px] text-[#666] flex items-center gap-4 flex-wrap">
        <ul class="flex flex-col gap-4 list-decimal ml-3">
          <li>
            <van-checkbox
              shape="square"
              v-model="checked"
              label-position="left"
            >
              研究最新的前端技术。
            </van-checkbox>
          </li>
          <li>
            <van-checkbox
              shape="square"
              v-model="checked"
              label-position="left"
            >
              研究最新的前端技术。
            </van-checkbox>
          </li>
          <li>
            <van-checkbox
              shape="square"
              v-model="checked"
              label-position="left"
            >
              研究最新的前端技术。
            </van-checkbox>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import about_bg from "@/assets/images/about_bg.jpg";
definePageMeta({
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
