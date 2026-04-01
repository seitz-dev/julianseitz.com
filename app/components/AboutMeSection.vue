<template>
  <div id="about" class="min-h-fit flex flex-col pb-24 select-none gap-12">
    <div class="flex justify-center mt-32 flex-col items-center gap-8">
      <SectionTitle>Who am I?</SectionTitle>

      <p class="text-xl tracking-tighter text-gray-400 font-semibold max-w-2xl text-center hover px-4 sm:px-0">
        Hi, my name's Julian Seitz, a software developer, and I've been programming since I was eight years old.
        It's one of my favorite hobbies, something I'm super passionate about.
      </p>

      <p class="text-xl tracking-tighter text-gray-400 font-semibold max-w-2xl text-center hover px-4 sm:px-0">
        Since forever, I've been fascinated by technology and naturally
        gravitated towards <span class="text-blue-300">computers</span> and <span
          class="text-blue-300">programming</span>.
        <br><br>
        The reason I love software development is the logical, creative problem solving side.
        I also like designing architecture and trying out new technologies. I don't there's ever a moment where I'm not
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
          <template #title>Computer Programming & Analysis</template>
          Studied at St. Lawrence College from 2023 - 2026, Dean's List from 2024 - 2025. Held a 3.8 Cumulative GPA.
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
          I have many hobbies, some of my favorites being: running, weightlifting, meditation, journalling, music production, video games, reading & writing, chemistry, walking, modding, and hacking.
        </InfoCard>
      </div>
    </div>
  </div>
</template>
