<template>
  <div>
    <input type="range" name="radius" v-model="settings.radius" min="0" max="2" step="0.1">
    <input type="number" name="margin" v-model="settings.margin" min="0" max="50" step="1">
    <input type="number" name="columns" v-model="settings.columns" min="1" max="5" step="1">
  </div>
</template>

<script setup lang="ts">
import { useSettings } from '~~/stores/settings';
const settings = useSettings()
</script>