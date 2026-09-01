<script setup lang="ts">defineProps<{status:string}>()

</script>
<template><span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" :class="status==='Up to date'||status.includes('verified')?'bg-emerald-50 text-success':status==='Overdue'?'bg-red-50 text-red-700':'bg-amber-50 text-amber'"><span class="h-1.5 w-1.5 rounded-full bg-current"/>{{status}}</span></template>
