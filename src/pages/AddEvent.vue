<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Upload, Plus, Trash2 } from "lucide-vue-next";
import PageHeader from "../components/PageHeader.vue";
import { useSelectedVehicle } from "../composables/useSelectedVehicle";
import { useVintro } from "../composables/useVintro";
import type { TimelineEventType } from "../data/customer";
const router = useRouter();
const { vehicle, base } = useSelectedVehicle();
const { addVehicleEvent } = useVintro();
const types: TimelineEventType[] = [
  "Service",
  "Repair",
  "Tyre change",
  "Inspection",
  "Mileage update",
  "Document upload",
  "Accident / body repair",
  "Modification",
  "Ownership transfer",
  "Workshop recommendation",
];
const parts = ref<string[]>([]);
const form = ref({
  type: "Mileage update" as TimelineEventType,
  date: "2026-09-01",
  mileage: vehicle.value.mileage,
  title: "Mileage updated",
  workshop: "",
  description: "",
  cost: 0,
  currency: "EUR" as "EUR",
  notes: "",
  photos: 0,
  documents: 0,
});
const save = () => {
  addVehicleEvent({
    id: crypto.randomUUID(),
    vehicleId: vehicle.value.id,
    ...form.value,
    parts: parts.value.filter(Boolean),
    verification: "User entered",
  });
  router.push(`${base.value}/timeline`);
};
</script>
<template>
  <PageHeader title="Add timeline event" :back="`${base}/timeline`" />
  <form @submit.prevent="save" class="container-app max-w-3xl py-7">
    <p class="eyebrow">{{ vehicle.make }} {{ vehicle.model }}</p>
    <h1 class="page-title mt-2">Record an event</h1>
    <div class="card mt-7 p-5 md:p-6">
      <div class="grid gap-5 sm:grid-cols-2">
        <label
          ><span class="label">Event type</span
          ><select v-model="form.type" class="field">
            <option v-for="t in types">{{ t }}</option>
          </select></label
        ><label
          ><span class="label">Date</span
          ><input
            v-model="form.date"
            type="date"
            class="field"
            required /></label
        ><label
          ><span class="label">Mileage</span
          ><input
            v-model="form.mileage"
            type="number"
            class="field nums"
            required /></label
        ><label
          ><span class="label">Workshop</span
          ><input
            v-model="form.workshop"
            class="field"
            placeholder="Optional" /></label
        ><label class="sm:col-span-2"
          ><span class="label">Title</span
          ><input v-model="form.title" class="field" required /></label
        ><label class="sm:col-span-2"
          ><span class="label">Description</span
          ><textarea
            v-model="form.description"
            class="field min-h-24"
            required
          /></label
        ><label
          ><span class="label">Cost</span
          ><input v-model="form.cost" type="number" class="field nums" /></label
        ><label
          ><span class="label">Currency</span
          ><select v-model="form.currency" class="field">
            <option value="EUR">EUR (€)</option>
          </select></label
        >
      </div>
      <div class="mt-6 flex items-center justify-between">
        <h2 class="font-semibold">Parts used</h2>
        <button
          type="button"
          @click="parts.push('')"
          class="flex items-center gap-1 text-sm font-semibold text-accent"
        >
          <Plus :size="16" />Add
        </button>
      </div>
      <div class="mt-3 space-y-2">
        <div v-for="(_, i) in parts" class="flex gap-2">
          <input v-model="parts[i]" class="field" /><button
            type="button"
            @click="parts.splice(i, 1)"
            class="grid w-11 place-items-center"
          >
            <Trash2 :size="17" />
          </button>
        </div>
      </div>
      <label class="mt-5 block"
        ><span class="label">Notes</span
        ><textarea v-model="form.notes" class="field min-h-20" />
      </label>
      <div class="mt-5 grid grid-cols-2 gap-3">
        <button type="button" @click="form.photos++" class="btn-secondary">
          <Upload :size="17" />Photos ({{ form.photos }})</button
        ><button type="button" @click="form.documents++" class="btn-secondary">
          <Upload :size="17" />Documents ({{ form.documents }})
        </button>
      </div>
    </div>
    <button class="btn-primary mt-5 w-full">Save event</button>
  </form>
</template>
