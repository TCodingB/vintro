import { reactive, readonly } from 'vue'
import { initialServices,vehicles, type ServiceRecord } from '../data/mock'
import {initialDocuments,initialQuotes,initialVehicleEvents,type VehicleDocument,type VehicleEvent} from '../data/customer'
const state=reactive({vehicles:[...vehicles],primaryVehicleId:'bmw-320d',services:[...initialServices],vehicleEvents:[...initialVehicleEvents],documents:[...initialDocuments],quotes:[...initialQuotes],bookings:[] as {id:string;workshop:string;vehicle:string;service:string;slot:string;note:string;status:string}[],notifications:[{id:'n1',title:'Technical inspection overdue',text:'BMW 320d Touring · due 18 August 2026',kind:'Maintenance',read:false},{id:'n2',title:'Quote received',text:'Servis Ljubljana sent a € 600 quote',kind:'Quote',read:false},{id:'n3',title:'Insurance expires soon',text:'Policy expires 31 December 2026',kind:'Document',read:true}],signedIn:true,toast:''})
let timer:number|undefined
export function useVintro(){
 const notify=(message:string)=>{state.toast=message;window.clearTimeout(timer);timer=window.setTimeout(()=>state.toast='',2800)}
 const addService=(record:ServiceRecord)=>{state.services.unshift(record);notify('Service added to vehicle record')}
 const addDocument=(document:VehicleDocument)=>{state.documents.unshift(document);notify('Document added to vehicle record')}
 const addBooking=(booking:{id:string;workshop:string;vehicle:string;service:string;slot:string;note:string;status:string})=>{state.bookings.unshift(booking);notify('Booking request sent')}
 const updateQuote=(id:string,status:'Approved'|'Declined')=>{const quote=state.quotes.find(q=>q.id===id);if(quote)quote.status=status;notify(`Quote ${status.toLowerCase()}`)}
 const setSignedIn=(value:boolean)=>state.signedIn=value
 const setPrimaryVehicle=(id:string)=>{state.primaryVehicleId=id;notify('Primary vehicle updated')}
 const updateVehicle=(id:string,updates:Partial<(typeof vehicles)[number]>)=>{const vehicle=state.vehicles.find(v=>v.id===id);if(vehicle)Object.assign(vehicle,updates);notify('Vehicle profile updated')}
 const addVehicle=(vehicle:(typeof vehicles)[number])=>{state.vehicles.push(vehicle);notify('Vehicle added to Garage')}
 const addVehicleEvent=(event:VehicleEvent)=>{state.vehicleEvents.unshift(event);notify('Event added to vehicle timeline')}
 const markNotificationRead=(id:string)=>{const item=state.notifications.find(n=>n.id===id);if(item)item.read=true}
 const markAllNotificationsRead=()=>state.notifications.forEach(n=>n.read=true)
 return {state:readonly(state),addService,addDocument,addBooking,updateQuote,setSignedIn,setPrimaryVehicle,updateVehicle,addVehicle,addVehicleEvent,markNotificationRead,markAllNotificationsRead,notify}
}
