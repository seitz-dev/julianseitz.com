<template>
  <div class="relative isolate bg-[#0c0d0e]">

    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg class="blob-svg absolute inset-0 h-full w-full" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="blob-gradient-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#152f46" />
            <stop offset="100%" stop-color="#7ba8d1" />
          </linearGradient>

          <linearGradient id="blob-gradient-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2a84dc" />
            <stop offset="100%" stop-color="#1462ae" />
          </linearGradient>
        </defs>

        <g>
          <path id="contact-blob-left" class="blob-left"
            d="M-220 -120 C60 -170 290 -80 430 90 C575 265 555 510 430 700 C300 895 95 980 -140 900 C-330 835 -450 640 -460 430 C-470 210 -390 -40 -220 -120 Z" />
          <path id="contact-blob-right" class="blob-right"
            d="M1260 160 C1500 40 1820 90 1970 300 L1970 1120 L900 1120 C960 850 1020 610 1120 390 C1170 280 1210 200 1260 160 Z" />
        </g>
      </svg>
    </div>

    <div id="contact" class="min-h-fit flex flex-col select-none gap-12 items-center justify-between">
      <div class="flex flex-col mt-32 w-full justify-center items-center gap-4">
        <SectionTitle>Let's connect.</SectionTitle>
        <p class="text-xl tracking-tighter text-gray-400 font-semibold max-w-2xl text-center hover px-4 sm:px-0">
          If you have a question, want to collaborate, or just
          want to say hi, feel free to reach out. I'm always open to new
          opportunities or conversations.
        </p>

        <div class="flex gap-4 font-black max-w-2xl flex-wrap justify-center">
          <div class="hover hover:scale-110!">
            <NuxtLink to="mailto:me@julianseitz.com"
              class="px-6 py-3 bg-white text-gray-700 font-semibold rounded-md hover:bg-gray-200/80 transition-colors flex justify-center items-center gap-4">
              <Icon name="material-symbols:mail" size="20" class="text-red-900" />
              Email
            </NuxtLink>
          </div>

          <div class="hover hover:scale-110!">
            <NuxtLink to="https://www.linkedin.com/in/julianseitz/" target="_blank"
              class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors flex justify-center items-center gap-4">
              <Icon name="custom:linkedin" size="20" class="text-white" />
              LinkedIn
            </NuxtLink>
          </div>

          <div class="hover hover:scale-110!">
            <NuxtLink to="https://github.com/julianseitz" target="_blank"
              class="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors flex justify-center items-center gap-4">
              <Icon name="custom:github" size="20" class="text-white" />
              GitHub
            </NuxtLink>
          </div>

          <div class="hover hover:scale-110!">
            <NuxtLink to="https://www.youtube.com/@average-dev" target="_blank"
              class="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors flex justify-center items-center gap-4">
              <Icon name="custom:youtube" size="20" class="text-white youtube-icon" />
              YouTube
            </NuxtLink>
          </div>
        </div>

      </div>

      <div class="px-6 bg-transparent py-3 flex rounded-md max-w-fit items-center justify-center gap-4">
        <div class="relative">
          <div class="discord-card flex items-center gap-4 px-5 py-3 rounded-lg max-w-md cursor-pointer select-none"
            role="button" aria-label="Copy Discord handle to clipboard" @click="copyHandle" @keyup.enter="copyHandle"
            tabindex="0">
            <Icon name="custom:discord" size="28" class="text-white" />

            <div class="flex-1 min-w-0">
              <div class="text-white font-semibold truncate">{{ handle }}</div>
              <div class="text-xs text-gray-300">DM me on Discord</div>
            </div>

            <button
              class="copy-btn inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-3 py-1.5 rounded-md transition-all"
              type="button" @click.stop="copyHandle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                <rect x="8" y="8" width="12" height="12" rx="2" ry="2" stroke-width="2" />
              </svg>
              Copy
            </button>
          </div>

          <transition name="fade">
            <div v-if="copied"
              class="copied-badge absolute -top-3 right-0 bg-emerald-500 text-white text-xs px-2 py-1 rounded-md shadow-lg"
              aria-live="polite">
              Copied!
            </div>
          </transition>
        </div>
      </div>

      <NuxtImg loading="lazy" alt="Discord Avatar" class="hover hover:scale-110! drop-shadow-lg" width="512"
        height="512" src="/transparent.webp" />

      <p class="text-sm tracking-tight text-gray-400 h-full select-none hover flex items-end p-4">
        Julian Seitz © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import MorphSVGPlugin from 'gsap/MorphSVGPlugin'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const handle = '@rageave'
const copied = ref(false)

function copyHandle() {
  try {
    void navigator.clipboard.writeText(handle.replace('@', ''))
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch (e) {
    const el = document.createElement('textarea')
    el.value = handle
    document.body.appendChild(el)
    el.select()
    try {
      document.execCommand('copy')
      copied.value = true
      setTimeout(() => (copied.value = false), 1600)
    } finally {
      document.body.removeChild(el)
    }
  }
}

gsap.registerPlugin(MorphSVGPlugin)
let context: gsap.Context | undefined

onMounted(() => {
  context = gsap.context(() => {
    gsap
      .timeline({
        repeat: -1,
        yoyo: true,
        defaults: {
          ease: 'sine.inOut',
        },
      })
      .to('#contact-blob-left', {
        morphSVG: '#contact-blob-left-two',
        x: 120,
        y: 80,
        rotation: 15,
        transformOrigin: 'center center',
        duration: 8,
      })
      .to('#contact-blob-left', {
        morphSVG: '#contact-blob-left-three',
        x: -80,
        y: 140,
        rotation: -10,
        duration: 9,
      })

    gsap
      .timeline({
        repeat: -1,
        yoyo: true,
        delay: 1,
        defaults: {
          ease: 'sine.inOut',
        },
      })
      .to('#contact-blob-right', {
        morphSVG: '#contact-blob-right-two',
        x: -140,
        y: 90,
        rotation: -12,
        transformOrigin: 'center center',
        duration: 7,
      })
      .to('#contact-blob-right', {
        morphSVG: '#contact-blob-right-three',
        x: 90,
        y: -60,
        rotation: 8,
        duration: 8.5,
      })
  })
})

onBeforeUnmount(() => {
  context?.revert()
})
</script>

<style scoped>
.blob-svg {
  overflow: visible;
}

.blob-left {
  fill: url(#blob-gradient-left);
  opacity: 0.33;
}

.blob-right {
  fill: url(#blob-gradient-right);
  opacity: 0.33;
}

.discord-card {
  background: linear-gradient(90deg, rgba(114, 137, 218, 1) 0%, rgba(80, 103, 196, 1) 50%, rgba(72, 88, 204, 1) 100%);
  box-shadow: 0 6px 18px rgba(72, 88, 204, 0.28), 0 2px 6px rgba(0, 0, 0, 0.5) inset;
  transition: transform .22s cubic-bezier(.2, .9, .2, 1), box-shadow .22s;
}

.discord-card:focus,
.discord-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 10px 30px rgba(72, 88, 204, 0.35), 0 4px 10px rgba(72, 88, 204, 0.25) inset;
}

.discord-card .text-white {
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.6);
}

.copy-btn svg {
  stroke-width: 1.5;
}

.copied-badge {
  transform: translateY(-6px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease, transform .2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.youtube-icon {
  transform: scale(1.5);
  color: #fff;
  filter: brightness(0) invert(1);
}
</style>