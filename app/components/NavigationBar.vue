<template>
  <header class="relative inset-x-0 top-8 z-50 px-4 flex justify-center">
    <div
      class="absolute w-full min-w-fit sm:max-w-[25vw] max-w-[50vw] mx-auto p-6 md:p-8 shadow-lg rounded-full bg-background/20 backdrop-blur-xs hover flex flex-col md:flex-row items-center justify-center sm:justify-between gap-4"
    >
      <div class="hover hover:scale-110! sm:block hidden">
        <p
          class="text-3xl font-black hover:text-accent drop-shadow select-none transition-color text-blue-300"
        >
          Julian Seitz
        </p>
      </div>

      <nav>
        <ul class="flex flex-row sm:gap-12 gap-8 text-xl text-blue-200">
          <li class="hover hover:scale-120!">
            <a href="#about">Bio</a>
          </li>
        

          <li class="hover hover:scale-120!">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
