<script setup lang="ts">
import PrototypeViewSwitch from './PrototypeViewSwitch.vue';
import { useLocale } from '../locales';

defineProps<{ target: 'garage' | 'workshop'; dark?: boolean }>();
const { translate } = useLocale();
</script>

<template>
  <footer class="shrink-0 pt-5">
    <PrototypeViewSwitch :target="target" class="h-40" />
    <p
      class="mt-5 border-t pt-5 text-xs leading-5"
      :class="dark ? 'border-white/10 text-stone-400' : 'text-muted'"
    >
      {{ translate('Every car has a story.') }}<br />
      <strong class="font-semibold" :class="dark ? 'text-white' : 'text-ink'">
        {{ translate('Keep the record.') }}
      </strong>
    </p>
  </footer>
</template>
