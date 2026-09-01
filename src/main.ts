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
import Documents from './pages/Documents.vue'
import ShareHistory from './pages/ShareHistory.vue'
import Account from './pages/Account.vue'
import Profile from './pages/Profile.vue'
import Workshops from './pages/Workshops.vue'
import WorkshopDetail from './pages/WorkshopDetail.vue'
import Booking from './pages/Booking.vue'
import Offers from './pages/Offers.vue'
import Quotes from './pages/Quotes.vue'
import QuoteDetail from './pages/QuoteDetail.vue'
import Activity from './pages/Activity.vue'
import Ownership from './pages/Ownership.vue'
import WorkshopDashboard from './pages/workshop/Dashboard.vue'
import WorkshopCalendar from './pages/workshop/Calendar.vue'
import WorkshopCustomers from './pages/workshop/Customers.vue'
import WorkshopCustomerDetail from './pages/workshop/CustomerDetail.vue'
import WorkshopOrders from './pages/workshop/WorkOrders.vue'
import WorkshopOrderDetail from './pages/workshop/WorkOrderDetail.vue'
import TechnicianView from './pages/workshop/Technician.vue'
import WorkshopMore from './pages/workshop/More.vue'
import WorkshopSettings from './pages/workshop/Settings.vue'
import WorkshopTeam from './pages/workshop/Team.vue'
import WorkshopTyres from './pages/workshop/Tyres.vue'
import WorkshopRetention from './pages/workshop/Retention.vue'
import WorkshopAnalytics from './pages/workshop/Analytics.vue'
import WorkshopNetwork from './pages/workshop/Network.vue'
import WorkshopInventory from './pages/workshop/Inventory.vue'
import WorkshopOnboarding from './pages/workshop/Onboarding.vue'
import WorkshopQuotes from './pages/workshop/Quotes.vue'
import WorkshopIntegrations from './pages/workshop/Integrations.vue'
import VehicleTimeline from './pages/VehicleTimeline.vue'
import AddEvent from './pages/AddEvent.vue'
import VehicleSettings from './pages/VehicleSettings.vue'
import Notifications from './pages/Notifications.vue'
import Membership from './pages/Membership.vue'
import Insurance from './pages/Insurance.vue'
import AcceptTransfer from './pages/AcceptTransfer.vue'

const router=createRouter({history:createWebHistory(),scrollBehavior:()=>({top:0}),routes:[
 {path:'/',component:Garage},{path:'/add-vehicle',component:AddVehicle},{path:'/vehicle/:id',component:VehicleOverview},
 {path:'/vehicle/:id/history',component:Timeline},{path:'/vehicle/:id/add-service',component:AddService},
 {path:'/vehicle/:id/specifications',component:Specifications},{path:'/vehicle/:id/maintenance',component:Maintenance},
 {path:'/vehicle/:id/transfer',component:Transfer},{path:'/vehicle/:id/documents',component:Documents},{path:'/vehicle/:id/share',component:ShareHistory},
 {path:'/vehicle/:id/ownership',component:Ownership},{path:'/vehicle/:id/timeline',component:VehicleTimeline},{path:'/vehicle/:id/add-event',component:AddEvent},{path:'/vehicle/:id/settings',component:VehicleSettings},
 {path:'/workshops',component:Workshops},{path:'/workshops/:id',component:WorkshopDetail},{path:'/book/:workshopId',component:Booking},
 {path:'/offers',component:Offers},{path:'/quotes',component:Quotes},{path:'/quotes/:id',component:QuoteDetail},{path:'/activity',component:Activity},{path:'/profile',component:Profile},
 {path:'/notifications',component:Notifications},{path:'/membership',component:Membership},{path:'/insurance',component:Insurance},{path:'/accept-transfer',component:AcceptTransfer},
 {path:'/login',component:Account,props:{mode:'login'},meta:{bare:true}},{path:'/register',component:Account,props:{mode:'register'},meta:{bare:true}},{path:'/reset-password',component:Account,props:{mode:'reset'},meta:{bare:true}},
 {path:'/workshop/register',component:WorkshopOnboarding,meta:{bare:true}},
 {path:'/workshop',component:WorkshopDashboard,meta:{workshop:true}},{path:'/workshop/calendar',component:WorkshopCalendar,meta:{workshop:true}},
 {path:'/workshop/customers',component:WorkshopCustomers,meta:{workshop:true}},{path:'/workshop/customers/:id',component:WorkshopCustomerDetail,meta:{workshop:true}},
 {path:'/workshop/orders',component:WorkshopOrders,meta:{workshop:true}},{path:'/workshop/orders/:id',component:WorkshopOrderDetail,meta:{workshop:true}},
 {path:'/workshop/technician',component:TechnicianView,meta:{workshop:true}},{path:'/workshop/more',component:WorkshopMore,meta:{workshop:true}},
 {path:'/workshop/settings',component:WorkshopSettings,meta:{workshop:true}},{path:'/workshop/team',component:WorkshopTeam,meta:{workshop:true}},
 {path:'/workshop/tyres',component:WorkshopTyres,meta:{workshop:true}},{path:'/workshop/retention',component:WorkshopRetention,meta:{workshop:true}},
 {path:'/workshop/analytics',component:WorkshopAnalytics,meta:{workshop:true}},{path:'/workshop/network',component:WorkshopNetwork,meta:{workshop:true}},
 {path:'/workshop/inventory',component:WorkshopInventory,meta:{workshop:true}},{path:'/workshop/quotes',component:WorkshopQuotes,meta:{workshop:true}},
 {path:'/workshop/integrations',component:WorkshopIntegrations,meta:{workshop:true}}
]})
createApp(App).use(router).mount('#app')
