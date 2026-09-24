<script setup lang="ts">
import { computed } from 'vue';
import { useVintro } from '../composables/useVintro';
import { useLocale } from '../locales';
import StatusBadge from './StatusBadge.vue';

const props = defineProps<{ vehicleId: string }>();
const { state } = useVintro();
const { translate } = useLocale();
const bookings = computed(() => state.bookings.filter(booking => booking.vehicleId === props.vehicleId));
</script>

<template>
  <section v-if="bookings.length">
    <h2 class="section-title">{{ translate('Booking requests') }}</h2>
    <div class="mt-3 space-y-3">
      <article v-for="booking in bookings" :key="booking.id" class="card flex items-start justify-between gap-3 p-5">
        <div>
          <h3 class="font-semibold">{{ translate(booking.service) }}</h3>
          <p class="mt-1 text-sm text-muted">{{ translate(`${booking.workshop} · ${booking.slot}`) }}</p>
        </div>
        <StatusBadge :status="booking.status"/>
      </article>
    </div>
  </section>
</template>
