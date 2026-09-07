<script setup lang="ts">
import SidebarFooter from './SidebarFooter.vue';
import PrototypeViewSwitch from './PrototypeViewSwitch.vue';
import { useLocale } from '../locales';
const { translate } = useLocale();

import { CarFront, Wrench, History, UserRound, MapPinned } from 'lucide-vue-next'
const nav=[{to:'/',label:'Garage',icon:CarFront},{to:'/vehicle/bmw-320d/maintenance',label:'Maintenance',icon:Wrench},{to:'/workshops',label:'Workshops',icon:MapPinned},{to:'/activity',label:'Activity',icon:History},{to:'/profile',label:'Profile',icon:UserRound}]


</script>
<template><div class="min-h-dvh md:flex"><aside class="fixed inset-y-0 left-0 z-40 hidden w-64 border-r bg-[#efeee9] p-5 md:flex md:flex-col"><div class="min-h-0 flex-1 overflow-y-auto"><RouterLink to="/" class="mb-14 block text-2xl font-bold tracking-[-.05em]">{{ translate("vintro") }}<span class="text-accent">.</span></RouterLink><nav class="space-y-2"><RouterLink v-for="item in nav" :key="item.to" :to="item.to" class="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-white hover:text-ink" active-class="!bg-white !text-ink shadow-sm"><component :is="item.icon" :size="19"/>{{ translate((item.label)) }}</RouterLink></nav><RouterLink to="/offers" class="mt-6 block rounded-xl bg-ink p-4 text-sm text-white"><span class="font-semibold">{{ translate("Vintro benefits") }}</span><small class="mt-1 block text-stone-300">{{ translate("Partner prices & offers") }}</small></RouterLink></div><SidebarFooter target="workshop"/></aside><main class="min-w-0 flex-1 pb-24 md:ml-64 md:pb-8"><div class="px-5 pt-4 md:hidden"><PrototypeViewSwitch target="workshop"/></div><slot/></main><nav class="safe-bottom fixed inset-x-0 bottom-0 z-50 flex justify-around border-t bg-[#faf9f6]/95 px-1 pt-2 backdrop-blur md:hidden"><RouterLink v-for="item in nav" :key="item.to" :to="item.to" class="flex min-w-0 flex-1 flex-col items-center gap-1 py-1 text-[10px] font-medium text-muted" active-class="!text-ink"><component :is="item.icon" :size="20"/>{{ translate((item.label)) }}</RouterLink></nav></div></template>
