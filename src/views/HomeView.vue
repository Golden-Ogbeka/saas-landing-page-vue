<script setup lang="ts">
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
import HeroSection from "../components/pages/Home/HeroSection.vue";
import ProductSection from "../components/pages/Home/ProductSection.vue";
import ResourcesSection from "../components/pages/Home/ResourcesSection.vue";
</script>

<template>
  <Navbar />
  <main>
    <HeroSection />
    <ProductSection />
    <ResourcesSection />
  </main>
  <Footer />
</template>
