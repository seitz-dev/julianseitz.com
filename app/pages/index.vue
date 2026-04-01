<template>
  <div>
    <NavigationBar />

    <HeroSection />
    <AboutMeSection />
    <ContactMeSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Julian Seitz - Who am I?",
  meta: [
    {
      name: "description",
      content:
        "I'm Julian Seitz, a passionate software developer. Welcome to my personal website where I share my projects, skills, and experiences.",
    },
    {
      name: "theme-color",
      content: "#171717",
    }
  ]
});
</script>
