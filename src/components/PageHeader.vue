<script setup lang="ts">
import { useLocale } from '../locales';
const { translate } = useLocale();
import {ChevronLeft} from 'lucide-vue-next';defineProps<{title:string;back?:string;action?:string}>()

</script>
<template><header class="sticky top-0 z-30 border-b bg-canvas/90 backdrop-blur"><div class="container-app flex h-16 items-center justify-between"><div class="flex min-w-0 items-center gap-3"><RouterLink v-if="back" :to="back" class="-ml-2 grid h-10 w-10 shrink-0 place-items-center rounded-full hover:bg-stone-200" :aria-label="translate('Go back')"><ChevronLeft/></RouterLink><h1 class="truncate text-lg font-semibold">{{ translate((title)) }}</h1></div><slot><span class="text-sm text-muted">{{ translate((action)) }}</span></slot></div></header></template>
