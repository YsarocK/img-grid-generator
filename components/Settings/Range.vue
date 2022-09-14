<template>
  <SettingsWrapper
    :setting="setting"
    :label="label"
  >
    <div class="w-40 h-input bg-violet-50 flex px-4 py-1 rounded-3xl">
      <input class="appearance-none settings__slider my-auto h-1 rounded-sm bg-white text-violet-700 w-full rounded-3xl" type="range" name="radius" v-model="settings[setting]" :min="min" :max="max" :step="step" :id="setting">
    </div>
  </SettingsWrapper>
</template>

<script setup lang="ts">
import useSettings from '~~/stores/settings';
const settings = useSettings()

interface Props {
  setting?: string,
  label?: string,
  min?: string,
  max?: string,
  step?: string
}
const { setting, label, min, max, step } = defineProps<Props>()
</script>