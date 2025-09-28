<template>
  <div
    id="about"
    class="h-[calc(100vh-50rem)] min-h-fit flex flex-col pb-24 select-none gap-12"
  >
    <div class="flex justify-center mt-32 flex-col items-center gap-8">
      <SectionTitle>Who am I?</SectionTitle>
      <p
        class="text-xl tracking-tighter text-gray-400 font-semibold max-w-2xl text-center hover px-4 sm:px-0"
      >
        Hi, my name's Julian Seitz, a passionate software developer who's been
        programming since the age of eight.
      </p>

      <p
        class="text-xl tracking-tighter text-gray-400 font-semibold max-w-2xl text-center hover px-4 sm:px-0"
      >
        For the longest time, I've been fascinated by technology and naturally
        gravitated towards computers and programming. I love being creative,
        learning new things and solving problems, which is why I enjoy software
        development.
      </p>
    </div>

    <div class="flex justify-center">
      <!-- Grid 2x2 cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 max-w-5xl">
        <InfoCard>
          <template #icon>
            <Icon class="text-blue-400" name="material-symbols:code" size="32"
          /></template>
          <template #title>Full-Stack Developer</template>
          Versed in both front-end and back-end technologies, I've built a
          variety of web applications, mobile applications, backend services,
          APIs, and more.
        </InfoCard>

        <InfoCard>
          <template #icon>
            <Icon class="text-blue-400" name="mdi:school" size="32"
          /></template>
          <template #title>Computer Programming & Analysis</template>
          Currently pursuing an advanced diploma in Computer Programming &
          Analysis at St. Lawrence College in Kingston, Ontario.
        </InfoCard>

        <InfoCard>
          <template #icon>
            <Icon class="text-blue-400" name="mdi:laptop" size="32"
          /></template>
          <template #title>Freelancer</template>
          I've completed hundreds of hours of freelance work for clients around
          the world, building web applications, server software, advanced bots,
          applications, and more.
        </InfoCard>

        <InfoCard>
          <template #icon>
            <Icon class="text-blue-400" name="mdi:rocket-launch" size="32"
          /></template>
          <template #title>Always Learning</template>
          I'm constantly learning new technologies and improving my skills. I
          love to take on new challenges and push myself to be better every day.
        </InfoCard>
      </div>
    </div>
  </div>
</template>
