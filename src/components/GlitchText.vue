<template>
    <div :class="computedClasses" :style="inlineStyles" :data-text="children">
      {{ children }}
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import type { CSSProperties } from 'vue';
  
  interface GlitchTextProps {
    children: string;
    speed?: number;
    enableShadows?: boolean;
    enableOnHover?: boolean;
    className?: string;
  }
  
  interface CustomCSSProperties extends CSSProperties {
    '--after-duration': string;
    '--before-duration': string;
    '--after-shadow': string;
    '--before-shadow': string;
  }
  
  const props = withDefaults(defineProps<GlitchTextProps>(), {
    speed: 0.5,
    enableShadows: true,
    enableOnHover: false,
    className: ''
  });
  
  const inlineStyles = computed(
    (): CustomCSSProperties => ({
      '--after-duration': `${props.speed * 3}s`,
      '--before-duration': `${props.speed * 2}s`,
      '--after-shadow': props.enableShadows ? '-5px 0 red' : 'none',
      '--before-shadow': props.enableShadows ? '5px 0 cyan' : 'none'
    })
  );
  
  const baseClasses = [
    'text-white',
    'font-black',
    'whitespace-nowrap',
    'relative',
    'mx-auto',
    'select-none',
    'cursor-pointer',
    'text-[clamp(2rem,10vw,8rem)]',
  
    'before:content-[attr(data-text)]',
    'before:absolute',
    'before:top-0',
    'before:text-white',
    'before:bg-[#0b0b0b]',
    'before:overflow-hidden',
    'before:[clip-path:inset(0_0_0_0)]',
  
    'after:content-[attr(data-text)]',
    'after:absolute',
    'after:top-0',
    'after:text-white',
    'after:bg-[#0b0b0b]',
    'after:overflow-hidden',
    'after:[clip-path:inset(0_0_0_0)]'
  ];
  
  const normalGlitchClasses = [
    'after:left-[10px]',
    'after:[text-shadow:var(--after-shadow,-10px_0_red)]',
    'after:[animation:animate-glitch_var(--after-duration,3s)_infinite_linear_alternate-reverse]',
  
    'before:left-[-10px]',
    'before:[text-shadow:var(--before-shadow,10px_0_cyan)]',
    'before:[animation:animate-glitch_var(--before-duration,2s)_infinite_linear_alternate-reverse]'
  ];
  
  const hoverOnlyClasses = [
    'before:content-[""]',
    'before:opacity-0',
    'before:[animation:none]',
    'after:content-[""]',
    'after:opacity-0',
    'after:[animation:none]',

    'active:before:content-[attr(data-text)]',
    'sm:hover:before:content-[attr(data-text)]',
    'active:before:opacity-100',
    'sm:hover:before:opacity-100',
    'active:before:left-[-10px]',
    'sm:hover:before:left-[-10px]',
    'active:before:[text-shadow:var(--before-shadow,10px_0_cyan)]',
    'sm:hover:before:[text-shadow:var(--before-shadow,10px_0_cyan)]',
    'active:before:[animation:animate-glitch_var(--before-duration,2s)_infinite_linear_alternate-reverse]',
    'sm:hover:before:[animation:animate-glitch_var(--before-duration,2s)_infinite_linear_alternate-reverse]',

    'active:after:content-[attr(data-text)]',
    'sm:hover:after:content-[attr(data-text)]',
    'active:after:opacity-100',
    'sm:hover:after:opacity-100',
    'active:after:left-[10px]',
    'sm:hover:after:left-[10px]',
    'active:after:[text-shadow:var(--after-shadow,-10px_0_red)]',
    'sm:hover:after:[text-shadow:var(--after-shadow,-10px_0_red)]',
    'active:after:[animation:animate-glitch_var(--after-duration,3s)_infinite_linear_alternate-reverse]',
    'sm:hover:after:[animation:animate-glitch_var(--after-duration,3s)_infinite_linear_alternate-reverse]'
  ];
  
  const computedClasses = computed(() => {
    const classes = [...baseClasses];
  
    if (props.enableOnHover) {
      classes.push(...hoverOnlyClasses);
    } else {
      classes.push(...normalGlitchClasses);
    }
  
    if (props.className) {
      classes.push(props.className);
    }
  
    return classes.join(' ');
  });
  </script>
  
  <style>
  @keyframes animate-glitch {
    0% {
      clip-path: inset(20% 0 50% 0);
    }
    5% {
      clip-path: inset(10% 0 60% 0);
    }
    10% {
      clip-path: inset(15% 0 55% 0);
    }
    15% {
      clip-path: inset(25% 0 35% 0);
    }
    20% {
      clip-path: inset(30% 0 40% 0);
    }
    25% {
      clip-path: inset(40% 0 20% 0);
    }
    30% {
      clip-path: inset(10% 0 60% 0);
    }
    35% {
      clip-path: inset(15% 0 55% 0);
    }
    40% {
      clip-path: inset(25% 0 35% 0);
    }
    45% {
      clip-path: inset(30% 0 40% 0);
    }
    50% {
      clip-path: inset(20% 0 50% 0);
    }
    55% {
      clip-path: inset(10% 0 60% 0);
    }
    60% {
      clip-path: inset(15% 0 55% 0);
    }
    65% {
      clip-path: inset(25% 0 35% 0);
    }
    70% {
      clip-path: inset(30% 0 40% 0);
    }
    75% {
      clip-path: inset(40% 0 20% 0);
    }
    80% {
      clip-path: inset(20% 0 50% 0);
    }
    85% {
      clip-path: inset(10% 0 60% 0);
    }
    90% {
      clip-path: inset(15% 0 55% 0);
    }
    95% {
      clip-path: inset(25% 0 35% 0);
    }
    100% {
      clip-path: inset(30% 0 40% 0);
    }
  }
  </style>
  