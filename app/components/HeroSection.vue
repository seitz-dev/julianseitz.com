<template>
  <main class="flex flex-col gap-8 min-h-svh pt-32 select-none relative isolate overflow-hidden bg-neutral-900">
    <div id="main-section" class="hero-bg-filter absolute inset-0 pointer-events-none" aria-hidden="true" />
    <div class="flex justify-center items-center p-8 rounded-sm flex-col gap-8 h-full grow relative z-10">
      <div class="liquid-glass flex flex-col gap-4 p-20 rounded-[3rem] items-center relative backdrop-blur-[0.5px]">
        <div class="flex flex-col gap-2">
          <div class="hover">
            <p class="text-6xl md:text-8xl text-blue-300 font-black transition-color hover:text-blue-400 text-center">
              Julian Seitz
            </p>
          </div>

          <div class="hover mt-2">
            <p
              class="text-lg sm:text-2xl tracking-tighter transition-color text-slate-300 hover:text-slate-400 font-normal text-center">
              Software Developer, Computer Enthusiast
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex m-4 gap-4 items-center justify-between relative z-10">
      <div class="flex gap-4">
        <NuxtLink to="https://github.com/renderbr" target="_blank" class="hover hover:scale-110!">
          <Icon name="custom:github" size="32" class="select-auto" />
        </NuxtLink>

        <NuxtLink to="https://www.linkedin.com/in/julianseitz/" target="_blank" class="hover hover:scale-110!">
          <Icon name="custom:linkedin" size="32" class="select-auto" />
        </NuxtLink>
      </div>

      <ClientOnly>
        <div
          class="scroll-indicator absolute left-1/2 bottom-0 transform -translate-x-1/2 flex justify-center items-center w-auto transition-opacity duration-500 z-10"
          :class="{ 'opacity-0': hasScrolled }">
          <a href="#about" class="no-underline">
            <div
              class="animate-bounce duration-500 p-4 bg-neutral-800/20 backdrop-blur-[1px] shadow-lg rounded-full flex hover hover:scale-110!">
              <Icon name="material-symbols:arrow-downward" size="32" class="text-gray-400" />
            </div>
          </a>
        </div>
      </ClientOnly>

      <NuxtLink
        class="p-4 hover hover:scale-110! hover:brightness-80 bg-background/20 backdrop-blur-[1px] shadow-lg rounded-full flex items-center absolute right-0 bottom-0"
        to="mailto:me@julianseitz.com" target="_blank">
        <Icon name="material-symbols:mail" size="32" class="select-auto text-white" />
      </NuxtLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from '@tsparticles/slim';

const hasScrolled = ref(false);

(async () => {
  await loadSlim(tsParticles);

  await tsParticles.load({
    id: 'main-section',
    options: {
      fullScreen: {
        enable: false,
      },
      background: {
        color: { value: "transparent" }
      },
      fpsLimit: 240,
      particles: {
        number: {
          value: 80,
          density: { enable: true, width: 1920, height: 1080 },
        },
        color: {
          value: ["#8ec5ff", "#c084fc", "#e879f9"]
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: { min: 0.1, max: 0.8 },
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 0.1,
            sync: false,
          }
        },
        size: {
          value: { min: 1, max: 4 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
            sync: false
          }
        },
        links: {
          enable: true,
          distance: 140,
          color: {
            value: ["#8ec5ff"]
          },
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          random: true,
          straight: false,
          outModes: 'out',
        },
        shadow: {
          enable: true,
          color: '#8ec5ff',
          blur: 5,
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ["grab", "bubble"]
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.8,
            }
          },
          bubble: {
            distance: 250,
            size: 6,
            duration: 2,
            opacity: 1
          },
          push: {
            quantity: 4,
          },
        },
      },
      detectRetina: true,
    }
  })
})();

onMounted(() => {
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          hasScrolled.value = window.scrollY > 50;
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
});
</script>

<style scoped>
.hero-bg-filter {
  overflow: hidden;
  background:
    radial-gradient(ellipse 70% 55% at 50% 42%,
      rgba(54, 109, 255, 0.14),
      transparent 68%),
    radial-gradient(ellipse 45% 40% at 15% 15%,
      rgba(86, 57, 180, 0.11),
      transparent 72%),
    radial-gradient(ellipse 45% 45% at 88% 78%,
      rgba(19, 126, 164, 0.1),
      transparent 72%),
    linear-gradient(145deg,
      #07080d 0%,
      #0a0d16 45%,
      #080a11 100%);
}

.hero-bg-filter::before {
  content: "";
  position: absolute;
  inset: -35%;
  background:
    radial-gradient(circle at 34% 45%,
      rgba(96, 165, 250, 0.16),
      transparent 25%),
    radial-gradient(circle at 68% 52%,
      rgba(167, 139, 250, 0.12),
      transparent 24%);
  filter: blur(90px);
  opacity: 0.8;
  animation: ambient-drift 18s ease-in-out infinite alternate;
}

.hero-bg-filter::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.035) 1px, transparent 1px),
    radial-gradient(ellipse at center,
      transparent 25%,
      rgba(7, 8, 13, 0.3) 70%,
      rgba(7, 8, 13, 0.9) 100%);
  background-size:
    72px 72px,
    72px 72px,
    100% 100%;
  mask-image: linear-gradient(to bottom,
      transparent,
      black 15%,
      black 80%,
      transparent);
  opacity: 0.65;
}

@keyframes ambient-drift {
  from {
    transform: translate3d(-2%, -1%, 0) rotate(-3deg) scale(1);
  }

  to {
    transform: translate3d(3%, 2%, 0) rotate(3deg) scale(1.08);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-bg-filter::before {
    animation: none;
  }
}
</style>
