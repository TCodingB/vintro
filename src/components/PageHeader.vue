<script setup lang="ts">import {ChevronLeft} from 'lucide-vue-next';defineProps<{title:string;back?:string;action?:string}>()

</script>
<template><header class="sticky top-0 z-30 border-b bg-canvas/90 backdrop-blur"><div class="container-app flex h-16 items-center justify-between"><div class="flex min-w-0 items-center gap-3"><RouterLink v-if="back" :to="back" class="-ml-2 grid h-10 w-10 shrink-0 place-items-center rounded-full hover:bg-stone-200" aria-label="Go back"><ChevronLeft/></RouterLink><h1 class="truncate text-lg font-semibold">{{title}}</h1></div><slot><span class="text-sm text-muted">{{action}}</span></slot></div></header></template>
