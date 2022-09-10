<template>
  <SettingsWrapper
    :setting="setting"
    :label="label"
  >
    <div class="w-24 h-input relative w-full">
      <select v-model="settings[setting]" class="appearance-none h-full bg-violet-50 text-violet-700 w-full px-4 py-1 rounded-3xl" :name="setting">
        <option v-for="field in fields" :value="field.value">{{ field.label }}</option>
      </select>
      <ArrowIcon class="absolute fill-violet-700 top-0 bottom-0 my-auto right-2 w-4"/>
    </div>
  </SettingsWrapper>
</template>

<script setup lang="ts">
import ArrowIcon from '~/assets/svg/arrow.svg'
import useSettings from '~~/stores/settings';
const settings = useSettings()

type Option = {
  value: string,
  label: string
}

interface Props {
  setting?: string,
  label?: string,
  fields: Option[]
}
const { setting, label, fields } = defineProps<Props>()
</script>