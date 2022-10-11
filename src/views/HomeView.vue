<script setup lang="ts">
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
import HeroSection from "../components/pages/Home/HeroSection.vue";
import ProductSection from "../components/pages/Home/ProductSection.vue";
import ResourcesSection from "../components/pages/Home/ResourcesSection.vue";
import PricingSection from "../components/pages/Home/PricingSection.vue";
import WorkSection from "../components/pages/Home/WorkSection.vue";
import DataSponsorSection from "../components/pages/Home/DataSponsorSection.vue";
import "../styles/background.css";
import AppSection from "../components/pages/Home/AppSection.vue";
import TestimonialSection from "../components/pages/Home/TestimonialSection.vue";
</script>

<template>
  <Navbar />
  <main>
    <HeroSection />
    <ProductSection />
    <ResourcesSection />
    <PricingSection />
    <WorkSection />
    <DataSponsorSection />
    <AppSection />
    <TestimonialSection />
  </main>
  <Footer />
</template>
