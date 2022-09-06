<template>
  <div class="w-full">
    <h2 class="align-left text-3xl font-bold">Settings</h2>
    <div class="flex gap-8 p-4 bg-slate-100 rounded-md">
      <div class="w-40">
        <p>Radius</p>
        <input class="w-full px-3 py-1 rounded-md" type="range" name="radius" v-model="settings.radius" min="0" max="2" step="0.1">
      </div>
      <div class="w-40">
        <p>Margin</p>
        <input class="w-full px-3 py-1 rounded-md" type="number" name="margin" v-model="settings.margin" min="0" max="50" step="1">
      </div>
      <div class="w-40">
        <p>Columns</p>
        <input class="w-full px-3 py-1 rounded-md" type="number" name="columns" v-model="settings.columns" min="1" max="5" step="1">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSettings } from '~~/stores/settings';
const settings = useSettings()
</script>