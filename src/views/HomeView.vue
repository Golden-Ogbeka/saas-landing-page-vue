<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
</script>

<template>
  <main>
    ok me too {{ useCounterStore().count }}

    <button
      class="bg-red-900 w-20 h-20 hover:bg-purple-700"
      @click="useCounterStore().increment()"
    >
      Increase count
    </button>
  </main>
</template>
