<script setup lang="ts">
import { ref } from "vue";
import {
  Bell,
  Mail,
  Smartphone,
  LogOut,
  Check,
  UserRound,
  Languages,
} from "lucide-vue-next";
import PageHeader from "../components/PageHeader.vue";
import { useVintro } from "../composables/useVintro";
import { useLocale, type AppLocale } from "../locales";
const { notify, setSignedIn } = useVintro();
const { locale, setLocale } = useLocale();
const saved = ref(false);
const form = ref({
  name: "Tadej Boncelj",
  email: "tadej@example.com",
  phone: "+386 41 555 123",
  push: true,
  emailNotifications: true,
  service: true,
  documents: true,
  bookings: true,
  marketing: false,
});
const save = () => {
  saved.value = true;
  notify("Profile preferences saved");
  setTimeout(() => (saved.value = false), 1200);
};
const logout = () => {
  setSignedIn(false);
  notify("Logged out of prototype");
};
const changeLanguage = (event: Event) =>
  setLocale((event.target as HTMLSelectElement).value as AppLocale);
</script>
<template>
  <PageHeader title="Profile" />
  <form @submit.prevent="save" class="container-app max-w-3xl py-7">
    <div class="flex items-center gap-4">
      <span
        class="grid h-16 w-16 place-items-center rounded-full bg-ink text-xl font-semibold text-white"
        >TB</span
      >
      <div>
        <h1 class="text-2xl font-semibold">Tadej Boncelj</h1>
        <p class="mt-1 text-sm text-muted">Vintro Free · 2 vehicles</p>
      </div>
    </div>
    <section class="card mt-8 p-5 md:p-6">
      <div class="flex items-center gap-2">
        <UserRound :size="19" />
        <h2 class="section-title">Contact information</h2>
      </div>
      <div class="mt-5 grid gap-5 sm:grid-cols-2">
        <label
          ><span class="label">Full name</span
          ><input v-model="form.name" class="field" /></label
        ><label
          ><span class="label">Email</span
          ><input v-model="form.email" type="email" class="field" /></label
        ><label class="sm:col-span-2"
          ><span class="label">Phone</span
          ><input v-model="form.phone" type="tel" class="field"
        /></label>
      </div>
    </section>
    <section class="card mt-5 p-5 md:p-6">
      <div class="flex items-center gap-2">
        <Languages :size="19" />
        <h2 class="section-title">Application language</h2>
      </div>
      <p class="mt-2 text-sm text-muted">Choose the language used throughout Vintro.</p>
      <select :value="locale" @change="changeLanguage" class="field mt-4">
        <option value="sl">Slovenian</option>
        <option value="en">English</option>
      </select>
    </section>
    <section class="card mt-5 p-5 md:p-6">
      <div class="flex items-center gap-2">
        <Bell :size="19" />
        <h2 class="section-title">Notification preferences</h2>
      </div>
      <div class="mt-5 divide-y">
        <label
          v-for="item in [
            {
              key: 'service',
              title: 'Service reminders',
              text: 'Upcoming and overdue maintenance',
            },
            {
              key: 'documents',
              title: 'Document expiry',
              text: 'Insurance, registration and inspection',
            },
            {
              key: 'bookings',
              title: 'Workshop bookings',
              text: 'Booking and quote updates',
            },
          ]"
          class="flex items-center justify-between gap-4 py-4"
          ><span
            ><strong class="block text-sm">{{ item.title }}</strong
            ><small class="mt-1 block text-muted">{{ item.text }}</small></span
          ><input
            v-model="form[item.key as 'service']"
            type="checkbox"
            class="h-5 w-5 accent-[#2d5b4f]"
        /></label>
      </div>
      <div class="mt-4 grid grid-cols-2 gap-3">
        <label class="rounded-xl border p-4 text-sm"
          ><Mail :size="18" /><span class="mt-3 flex justify-between"
            >Email<input
              v-model="form.emailNotifications"
              type="checkbox"
              class="accent-[#2d5b4f]" /></span></label
        ><label class="rounded-xl border p-4 text-sm"
          ><Smartphone :size="18" /><span class="mt-3 flex justify-between"
            >Push<input
              v-model="form.push"
              type="checkbox"
              class="accent-[#2d5b4f]" /></span
        ></label>
      </div>
      <label class="mt-5 flex gap-3 text-sm text-muted"
        ><input
          v-model="form.marketing"
          type="checkbox"
          class="mt-1 accent-[#2d5b4f]"
        />I agree to receive occasional product news and partner offers.</label
      >
    </section>
    <div class="mt-5 grid gap-3 sm:grid-cols-3">
      <RouterLink to="/membership" class="card p-4"
        ><strong class="block text-sm">Vintro Plus</strong
        ><small class="text-muted">Plans & loyalty</small></RouterLink
      ><RouterLink to="/insurance" class="card p-4"
        ><strong class="block text-sm">Insurance</strong
        ><small class="text-muted">Policies & reminders</small></RouterLink
      ><RouterLink to="/accept-transfer" class="card p-4"
        ><strong class="block text-sm">Receive vehicle</strong
        ><small class="text-muted">Use transfer code</small></RouterLink
      >
    </div>
    <RouterLink
      to="/workshop"
      class="card mt-5 flex items-center justify-between p-5"
      ><span
        ><strong class="block text-sm">Vintro Workshop</strong
        ><small class="text-muted">Open Servis Ljubljana workspace</small></span
      ><span class="text-sm font-semibold text-accent"
        >Switch →</span
      ></RouterLink
    ><button class="btn-primary mt-5 w-full">
      <Check :size="17" />{{ saved ? "Saved" : "Save preferences" }}</button
    ><RouterLink
      to="/login"
      @click="logout"
      class="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-muted hover:bg-stone-100"
      ><LogOut :size="17" />Log out</RouterLink
    >
  </form>
</template>
