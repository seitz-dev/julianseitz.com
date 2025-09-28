<template>
  <main class="flex flex-col gap-8 min-h-[100svh] pt-32 select-none">
    <div
      class="flex justify-center items-center p-8 rounded-sm flex-col gap-8 h-full grow"
    >
      <div class="flex flex-col gap-4 backdrop-blur-[2px] items-center">
        <div class="flex flex-col gap-2">
          <div class="hover">
            <p
              class="text-6xl md:text-8xl text-blue-300 font-bold transition-color hover:text-blue-400 text-center"
            >
              Julian Seitz
            </p>
          </div>
          <div class="hover">
            <p
              class="text-2xl tracking-tighter transition-color text-slate-300 hover:text-red-400 font-semibold text-center"
            >
              currently working @ national defence of canada
            </p>
          </div>
          <div class="hover">
            <NuxtLink
              to="https://www.canada.ca/en/department-national-defence.html"
              target="_blank"
            >
              <NuxtImg
                src="/goc.svg"
                alt="Government of Canada Logo"
                class="mx-auto w-80 h-20 object-contain"
                fetchpriority="high"
                cache="immutable"
                width="400"
                height="100"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="flex gap-4">
          <Tag>Software Developer</Tag>
          <Tag class="text-green-300">Student</Tag>
        </div>
      </div>
    </div>
    <div class="flex m-4 gap-4 items-center justify-between relative">
      <div class="flex gap-4">
        <NuxtLink
          to="https://github.com/renderbr"
          target="_blank"
          class="hover hover:scale-110!"
        >
          <Icon name="custom:github" size="32" class="select-auto" />
        </NuxtLink>

        <NuxtLink
          to="https://www.linkedin.com/in/julianseitz/"
          target="_blank"
          class="hover hover:scale-110!"
        >
          <Icon name="custom:linkedin" size="32" class="select-auto" />
        </NuxtLink>
      </div>

      <ClientOnly>
        <div
          class="scroll-indicator absolute left-1/2 bottom-0 transform -translate-x-1/2 flex justify-center items-center w-auto transition-opacity duration-500 z-10"
          :class="{ 'opacity-0': hasScrolled }"
        >
          <a href="#about" class="no-underline">
            <div
              class="animate-bounce duration-500 p-4 bg-neutral-800 rounded-full flex hover hover:scale-110!"
            >
              <Icon
                name="material-symbols:arrow-downward"
                size="32"
                class="text-gray-400"
              />
            </div>
          </a>
        </div>
      </ClientOnly>

      <NuxtLink
        class="p-4 hover hover:scale-110! hover:brightness-80 bg-background rounded-full flex items-center absolute right-0 bottom-0"
        to="mailto:me@julianseitz.com"
        target="_blank"
      >
        <Icon
          name="material-symbols:mail"
          size="32"
          class="select-auto text-white"
        />
      </NuxtLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
const hasScrolled = ref(false);

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
