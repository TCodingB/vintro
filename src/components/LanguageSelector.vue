<script setup lang="ts">
import { computed } from 'vue';
import { useLocale, type AppLocale } from '../locales';

const { locale, setLocale, translate } = useLocale();
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'sl', name: 'Slovenščina', flag: '🇸🇮' },
] as const;
const selected = computed(() => languages.find(language => language.code === locale.value)!);
const changeLanguage = (event: Event) => {
  setLocale((event.target as HTMLSelectElement).value as AppLocale);
};
</script>

<template>
  <div
    class="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white hover:bg-stone-100 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
    :title="translate('Application language') + ': ' + selected.name"
  >
    <span aria-hidden="true" class="text-xl leading-none">{{ selected.flag }}</span>
    <select
      :value="locale"
      @change="changeLanguage"
      :aria-label="translate('Application language')"
      class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
    >
      <option v-for="language in languages" :key="language.code" :value="language.code" :lang="language.code">
        {{ language.flag }} {{ language.name }}
      </option>
    </select>
  </div>
</template>
