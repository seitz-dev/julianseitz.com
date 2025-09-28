<template>
  <div
    class="bg-background/10 p-8 flex flex-col border-background/80 border-[0.2px] rounded-lg shadow-lg hover hover:scale-105! transition-transform"
  >
    <div class="flex gap-8">
      <div class="bg-blue-500/20 p-2 flex rounded-xl max-h-fit">
        <slot name="icon"></slot>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-4 text-blue-100">
          <slot name="title">Title</slot>
        </h3>

        <p class="text-gray-300 tracking-tighter">
          <slot>Content</slot>
        </p>
      </div>
    </div>
  </div>
</template>
