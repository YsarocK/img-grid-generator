<template>
  <SettingsWrapper
    :setting="setting"
    :label="label"
  >
    <input v-if="type === 'free'" class="w-24 h-input bg-violet-50 text-violet-700 px-4 py-1 rounded-3xl" type="number" :name="setting" v-model="settings[setting]" :min="min" :max="max" :step="step">
    <div v-else class="w-fit flex gap-2 bg-violet-50 rounded-3xl px-4 py-1 justify-center h-input">
      <MinIcon class="cursor-pointer w-4 fill-violet-700" @click="settings[setting] > min && settings[setting]--"/>
      <p class="select-none	w-3 text-center text-violet-700 bg-transparent">{{ settings[setting] }}</p>
      <MaxIcon class="cursor-pointer w-4 fill-violet-700	" @click="settings[setting] < max && settings[setting]++"/>
    </div>
  </SettingsWrapper>
</template>

<script setup lang="ts">
import MinIcon from '~/assets/svg/min.svg'
import MaxIcon from '~/assets/svg/max.svg'
import useSettings from '~~/stores/settings';
const settings = useSettings()

interface Props {
  setting?: string,
  label?: string,
  min?: string,
  max?: string,
  type?: string,
  step?: string
}
const { setting, label, min, max, type } = defineProps<Props>()
</script>