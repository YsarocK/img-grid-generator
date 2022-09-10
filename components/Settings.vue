<template>
  <div class="settings w-full flex flex-col gap-2">
    <h2>Settings</h2>
    <form class="flex flex-wrap gap-x-8 gap-y-4">
      <SettingsNumber
        setting="margin" 
        label="Margin" 
        min="0" 
        max="50"
        step="1" 
        type="free"/>
      <SettingsNumber
        setting="columns" 
        label="Columns" 
        min="1" 
        max="5" />
      <SettingsRange
        setting="radius" 
        label="Radius" 
        min="0" 
        max="2"
        step="0.1" />
      <SettingsSelect
        setting="extension" 
        label="Extension" 
        :fields="[
          {value: 'png', label: 'PNG'},
          {value: 'webp', label: 'WEBP'},
          {value: 'jpg', label: 'JPG'}
        ]" />
    </form>
  </div>
</template>