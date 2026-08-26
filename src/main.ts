import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import Garage from './pages/Garage.vue'
import VehicleOverview from './pages/VehicleOverview.vue'
import Timeline from './pages/Timeline.vue'
import AddService from './pages/AddService.vue'
import Specifications from './pages/Specifications.vue'
import Maintenance from './pages/Maintenance.vue'
import AddVehicle from './pages/AddVehicle.vue'
import Transfer from './pages/Transfer.vue'
import Placeholder from './pages/Placeholder.vue'
import Documents from './pages/Documents.vue'
import ShareHistory from './pages/ShareHistory.vue'

const router=createRouter({history:createWebHistory(),scrollBehavior:()=>({top:0}),routes:[
 {path:'/',component:Garage},{path:'/add-vehicle',component:AddVehicle},{path:'/vehicle/:id',component:VehicleOverview},
 {path:'/vehicle/:id/history',component:Timeline},{path:'/vehicle/:id/add-service',component:AddService},
 {path:'/vehicle/:id/specifications',component:Specifications},{path:'/vehicle/:id/maintenance',component:Maintenance},
 {path:'/vehicle/:id/transfer',component:Transfer},{path:'/vehicle/:id/documents',component:Documents},{path:'/vehicle/:id/share',component:ShareHistory},
 {path:'/activity',component:Placeholder,props:{kind:'activity'}},{path:'/profile',component:Placeholder,props:{kind:'profile'}}
]})
createApp(App).use(router).mount('#app')
