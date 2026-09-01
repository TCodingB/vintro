<script setup lang="ts">import {useRoute} from 'vue-router';import AppShell from './components/AppShell.vue';import WorkshopShell from './components/WorkshopShell.vue';import Toast from './components/Toast.vue';const route=useRoute()



</script>
<template><RouterView v-if="route.meta.bare"/><WorkshopShell v-else-if="route.meta.workshop"><RouterView/></WorkshopShell><AppShell v-else><RouterView /></AppShell><Toast/></template>
