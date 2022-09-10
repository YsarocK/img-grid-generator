<template>
  <div class="flex flex-col gap-1">
    <label :for="setting" class="text-sm font-semibold text-slate-300">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  setting?: string,
  label?: string,
}
const { setting, label } = defineProps<Props>()
</script>