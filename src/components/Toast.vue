<script setup lang="ts">import {Check} from 'lucide-vue-next';import {useVintro} from '../composables/useVintro';const {state}=useVintro()

</script>
<template><Transition enter-active-class="transition duration-300" enter-from-class="translate-y-4 opacity-0" leave-active-class="transition" leave-to-class="translate-y-4 opacity-0"><div v-if="state.toast" class="fixed bottom-24 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-xl bg-ink px-4 py-3 text-sm font-medium text-white shadow-soft md:bottom-8"><Check :size="17"/>{{state.toast}}</div></Transition></template>
