<template>
  <div class="settings w-full flex flex-col gap-2">
    <h2 class="align-left text-3xl font-bold">Settings</h2>
    <form class="flex gap-8">
      <div class="w-24 flex flex-col gap-1">
        <label for="margin" class="text-sm font-semibold text-slate-300">Margin</label>
        <input class="h-30 bg-violet-50 text-violet-700 w-full px-4 py-1 rounded-3xl" type="number" name="margin" v-model="settings.margin" min="0" max="50" step="1">
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-sm font-semibold text-slate-300">Columns</p>
        <div class="flex gap-2 bg-violet-50 rounded-3xl px-4 py-1 justify-center h-30">
          <MinIcon class="cursor-pointer w-4 fill-violet-700" @click="settings.columns > 0 && settings.columns--"/>
          <p class="select-none	w-3 text-center text-violet-700 bg-transparent" type="number" name="columns">{{ settings.columns }}</p>
          <MaxIcon class="cursor-pointer w-4 fill-violet-700	" @click="settings.columns < 5 && settings.columns++"/>
        </div>
      </div>
      <div class="w-40 flex flex-col gap-1">
        <label for="radius" class="text-sm font-semibold text-slate-300">Radius</label>
        <input class="bg-violet-50 text-violet-700 w-full px-4 py-1 rounded-3xl" type="range" name="radius" v-model="settings.radius" min="0" max="2" step="0.1">
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import MinIcon from '~/assets/svg/min.svg'
import MaxIcon from '~/assets/svg/max.svg'
import useSettings from '~~/stores/settings';
const settings = useSettings()
</script>