<script setup lang="ts">
import { computed } from 'vue';
import { ArrowRightLeft } from 'lucide-vue-next';
import { useLocale } from '../locales';
import { prototypeViewSwitchEnabled } from '../config/prototype';

const props = defineProps<{ target: 'garage' | 'workshop' }>();
const { translate } = useLocale();
const destinations = {
  garage: {
    path: '/',
    label: 'Switch to garage view',
    description: 'Explore the vehicle owner side of this demo.',
  },
  workshop: {
    path: '/workshop',
    label: 'Switch to workshop view',
    description: 'Explore the workshop side of this demo.',
  },
};
const destination = computed(() => destinations[props.target]);
</script>

<template>
  <RouterLink
    v-if="prototypeViewSwitchEnabled"
    :to="destination.path"
    class="group block rounded-xl border border-accent/20 bg-emerald-50 p-4 text-ink transition hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
  >
    <span class="block text-[10px] font-bold uppercase tracking-wider text-accent">
      {{ translate('Prototype only') }}
    </span>
    <span class="mt-2 flex items-center justify-between gap-3 text-sm font-semibold">
      {{ translate(destination.label) }}
      <ArrowRightLeft :size="18" class="shrink-0 text-accent" aria-hidden="true" />
    </span>
    <span class="mt-1 block text-xs leading-5 text-muted">
      {{ translate(destination.description) }}
    </span>
  </RouterLink>
</template>
