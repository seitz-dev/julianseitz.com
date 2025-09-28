<template>
  <div
    id="contact"
    class="h-[calc(100dvh-50rem)] min-h-fit flex flex-col select-none gap-12 items-center justify-between"
  >
    <div class="flex flex-col mt-32 w-full justify-center items-center gap-4">
      <SectionTitle>Let's connect.</SectionTitle>
      <p
        class="text-xl tracking-tighter text-gray-400 font-semibold max-w-2xl text-center hover px-4 sm:px-0"
      >
        Whether you have a question, want to collaborate on a project, or just
        want to say hi, feel free to reach out. I'm always open to new
        opportunities and connections.
      </p>


      <div class="px-6 bg-transparent py-3 flex rounded-md max-w-fit items-center justify-center gap-4">
        <!-- Discord card: gradient, glow, copy-to-clipboard -->
        <div class="relative">
          <div
            class="discord-card flex items-center gap-4 px-5 py-3 rounded-lg max-w-md cursor-pointer select-none"
            role="button"
            aria-label="Copy Discord handle to clipboard"
            @click="copyHandle"
            @keyup.enter="copyHandle"
            tabindex="0"
          >
            <Icon name="custom:discord" size="28" class="text-white" />

            <div class="flex-1 min-w-0">
              <div class="text-white font-semibold truncate">{{ handle }}</div>
              <div class="text-xs text-gray-300">Reach me on Discord</div>
            </div>

            <button
              class="copy-btn inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-3 py-1.5 rounded-md transition-all"
              type="button"
              @click.stop="copyHandle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                <rect x="8" y="8" width="12" height="12" rx="2" ry="2" stroke-width="2" />
              </svg>
              Copy
            </button>
          </div>

          <transition name="fade">
            <div
              v-if="copied"
              class="copied-badge absolute -top-3 right-0 bg-emerald-500 text-white text-xs px-2 py-1 rounded-md shadow-lg"
              aria-live="polite"
            >
              Copied!
            </div>
          </transition>
        </div>
      </div>

      <div class="flex gap-4 font-black max-w-2xl flex-wrap justify-center">
        <div class="hover hover:scale-110!">
          <NuxtLink
            to="mailto:julian.seitz@example.com"
            class="px-6 py-3 bg-white text-gray-700 font-semibold rounded-md hover:bg-gray-200/80 transition-colors flex justify-center items-center gap-4"
          >
            <Icon name="material-symbols:mail" size="20" class="text-red-900" />
            Email
          </NuxtLink>
        </div>

        <div class="hover hover:scale-110!">
          <NuxtLink
            to="https://www.linkedin.com/in/julianseitz/"
            target="_blank"
            class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors flex justify-center items-center gap-4"
          >
            <Icon name="custom:linkedin" size="20" class="text-white" />
            LinkedIn
          </NuxtLink>
        </div>

        <div class="hover hover:scale-110!">
          <NuxtLink
            to="https://github.com/julianseitz"
            target="_blank"
            class="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors flex justify-center items-center gap-4"
          >
            <Icon name="custom:github" size="20" class="text-white" />
            GitHub
          </NuxtLink>
        </div>
      </div>

    </div>

    <p
      class="text-sm tracking-tight text-gray-400 h-full select-none hover flex items-end p-4"
    >
      Julian Seitz © {{ new Date().getFullYear() }}. All rights reserved.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const handle = '@rageave'
const copied = ref(false)

function copyHandle() {
  try {
    void navigator.clipboard.writeText(handle.replace('@', ''))
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch (e) {
    // fallback for older browsers
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
</script>

<style scoped>
.discord-card {
  background: linear-gradient(90deg, rgba(114,137,218,1) 0%, rgba(80,103,196,1) 50%, rgba(72,88,204,1) 100%);
  box-shadow: 0 6px 18px rgba(72,88,204,0.28), 0 2px 6px rgba(0,0,0,0.5) inset;
  transition: transform .22s cubic-bezier(.2,.9,.2,1), box-shadow .22s;
}
.discord-card:focus,
.discord-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 10px 30px rgba(72,88,204,0.35), 0 4px 10px rgba(72,88,204,0.25) inset;
}
.discord-card .text-white {
  text-shadow: 0 1px 0 rgba(0,0,0,0.6);
}
.copy-btn svg {
  stroke-width: 1.5;
}
.copied-badge {
  transform: translateY(-6px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease, transform .2s ease;
}
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-6px); }

</style>
