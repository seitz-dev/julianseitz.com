<template>
  <div class="flex flex-col justify-center items-center gap-3 rounded-full text-center">
    <div class="hover">
      <p
        class="font-bold text-gray-300 text-7xl transition-color hover:text-accent/60"
      >
        <slot />
      </p>
    </div>
    <hr class="border-gray-300 border-2 w-80" />
  </div>
</template>
>
