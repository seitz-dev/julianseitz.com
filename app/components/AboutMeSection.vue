<template>
  <div class="relative isolate">
    <ClientOnly>
      <div id="about-overlay" class="absolute inset-0 pointer-events-none" aria-hidden="true" />
    </ClientOnly>
    <div id="about" class="min-h-fit flex flex-col pb-24 select-none gap-12 relative z-10">
      <div class="flex justify-center mt-32 flex-col items-center gap-8">
        <SectionTitle>Who am I?</SectionTitle>

        <p class="text-xl tracking-tighter text-neutral-400 font-normal max-w-4xl text-center hover px-4 sm:px-0">
          Hi, I'm Julian, a software developer, who's been programming since eight years old.
          It's one of my all-time favorite hobbies, and something I'm super passionate about.
        </p>

        <p class="text-xl tracking-tighter text-neutral-400 font-normal max-w-2xl text-center hover px-4 sm:px-0">
          Since forever, I've been fascinated by technology and naturally
          gravitated towards <span class="text-blue-300">computers</span> and <span
            class="text-blue-300">programming</span>.
        </p>

        <p class="text-xl tracking-tighter text-neutral-400 font-normal max-w-3xl text-center hover px-4 sm:px-0">
          The reason I love software development is the logical, creative problem solving side.
          I also like designing architecture and trying out new technologies. I don't there's ever a moment where I'm
          not
          learning.
        </p>
      </div>

      <div class="flex justify-center">
        <!-- Grid 2x2 cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 max-w-5xl">
          <InfoCard>
            <template #icon>
              <Icon class="text-blue-400" name="material-symbols:code" size="32" />
            </template>
            <template #title>Full-Stack Developer</template>
            I've built
            <strong>dozens</strong> of various web applications, mobile applications, backend services,
            APIs, game modifications, and more.
          </InfoCard>

          <InfoCard>
            <template #icon>
              <Icon class="text-blue-400" name="mdi:school" size="32" />
            </template>
            <template #title>Computer Programming Graduate</template>
            Studied at St. Lawrence College from 2023 - 2026 in the Computer Programming & Analysis course.
          </InfoCard>

          <InfoCard>
            <template #icon>
              <Icon class="text-blue-400" name="mdi:laptop" size="32" />
            </template>
            <template #title>Freelancer</template>
            I've done hundreds of hours of freelance work for clients around
            the world, building web applications, server software, AI solutions,
            domain-specific desktop applications, and more.
          </InfoCard>

          <InfoCard>
            <template #icon>
              <Icon class="text-blue-400" name="mdi:rocket-launch" size="32" />
            </template>
            <template #title>Hobbies!</template>
            I have many hobbies, some of my favorites being: running, weightlifting, meditation, journalling, music
            production,
            video games, reading & writing, chemistry, walking, modding, and hacking.
          </InfoCard>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <p class="text-xl tracking-tighter text-neutral-400 font-normal max-w-3xl text-center hover px-4 sm:px-0">
          I have been working for Canada's Department of National Defence since May, 2025. For those interested in
          contracting
          me for a project, I will likely turn it down.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from '@tsparticles/slim';

(async () => {
  await loadSlim(tsParticles);

  await tsParticles.load({
    id: 'about-overlay',
    options: {
      fullScreen: {
        enable: false,
      },
      background: {
        color: { value: "transparent" }
      },
      fpsLimit: 120,
      particles: {
        rotate: {
          value: 45,
          path: false,
          animation: {
            enable: false
          }
        },

        number: {
          value: 85,
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
        },

        paint: {
          fill: {
            enable: false
          },
          stroke: {
            color: {
              value: [
                "gray",
                "white",
                "#8ec5ff"
              ]
            },
            width: 2
          }
        },

        shape: {
          type: "line",
          close: false,
          options: {
            line: {
              cap: "round",
              close: false
            }
          }
        },

        color: {
          value: ["#8ec5ff", "#93c5fd", "#a5f3fc"],
        },

        opacity: {
          value: {
            min: 0.2,
            max: 0.5,
          },
        },

        length: {
          value: 4,
        },

        size: {
          value: {
            min: 10,
            max: 24,
          },
        },

        move: {
          enable: true,
          direction: "bottom-right",
          speed: {
            min: 4,
            max: 12,
          },
          random: false,
          straight: true,

          angle: {
            value: 4,
            offset: 0,
          },

          outModes: {
            default: "out",
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble"
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          bubble: {
            distance: 150,
            size: 4,
            duration: 1,
            opacity: 0.7
          },
          push: {
            quantity: 5,
          },
        },
      },
      detectRetina: true,
    }
  });

})();
</script>