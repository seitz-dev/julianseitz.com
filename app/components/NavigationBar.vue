<template>
  <div>
    <header class="fixed inset-x-0 top-5 z-50 px-4 sm:px-6 flex justify-center pointer-events-none">
      <div class="pointer-events-auto w-full max-w-4xl">
        <div
          class="mx-auto flex items-center justify-between gap-5 rounded-full border border-white/15 bg-neutral-900/45 px-6 py-3.5 sm:px-8 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <a href="#"
            class="hidden sm:inline-block text-2xl font-extrabold tracking-wide text-blue-200/90 transition-colors duration-300 hover:text-white">
            Julian Seitz
          </a>

          <nav aria-label="Primary navigation" class="ml-auto">
            <ul class="flex items-center gap-2.5 sm:gap-3.5 text-base sm:text-lg font-semibold text-blue-100/90">
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
  </div>
</template>

<style lang="css" scoped>
@reference "@/assets/css/main.css";
.nav-link {
  @apply inline-flex items-center rounded-full px-5 py-2.5 transition-all duration-300;
}

.nav-link:hover {
  @apply bg-white/12 text-white;
  transform: translateY(-1px);
}
</style>
