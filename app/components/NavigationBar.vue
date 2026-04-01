<template>
  <header class="fixed inset-x-0 top-5 z-50 px-4 sm:px-6 flex justify-center pointer-events-none">
    <div class="pointer-events-auto w-full max-w-3xl">
      <div
        class="mx-auto flex items-center justify-between gap-4 rounded-full border border-white/15 bg-neutral-900/45 px-5 py-3 sm:px-7 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <a
          href="#"
          class="hidden sm:inline-block text-xl font-extrabold tracking-wide text-blue-200/90 transition-colors duration-300 hover:text-white"
        >
          Julian Seitz
        </a>

        <nav aria-label="Primary navigation" class="ml-auto">
          <ul class="flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-semibold text-blue-100/90">
            <li>
              <a href="#about" class="nav-link">Bio</a>
            </li>
            <li>
              <a href="#contact" class="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  @apply inline-flex items-center rounded-full px-4 py-2 transition-all duration-300;
}

.nav-link:hover {
  @apply bg-white/12 text-white;
  transform: translateY(-1px);
}
</style>
