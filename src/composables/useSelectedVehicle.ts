import {computed} from 'vue';import {useRoute} from 'vue-router';import {useVintro} from './useVintro';
export function useSelectedVehicle(){const route=useRoute();const {state}=useVintro();const vehicle=computed(()=>state.vehicles.find(v=>v.id===route.params.id)??state.vehicles[0]);const base=computed(()=>`/vehicle/${vehicle.value.id}`);return {vehicle,base}}
