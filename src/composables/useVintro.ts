import { reactive, readonly } from 'vue'
import { initialServices, type ServiceRecord } from '../data/mock'
import {initialDocuments,initialQuotes,type VehicleDocument} from '../data/customer'
const state=reactive({services:[...initialServices],documents:[...initialDocuments],quotes:[...initialQuotes],bookings:[] as {id:string;workshop:string;vehicle:string;service:string;slot:string;note:string;status:string}[],signedIn:true,toast:''})
let timer:number|undefined
export function useVintro(){
 const notify=(message:string)=>{state.toast=message;window.clearTimeout(timer);timer=window.setTimeout(()=>state.toast='',2800)}
 const addService=(record:ServiceRecord)=>{state.services.unshift(record);notify('Service added to vehicle record')}
 const addDocument=(document:VehicleDocument)=>{state.documents.unshift(document);notify('Document added to vehicle record')}
 const addBooking=(booking:{id:string;workshop:string;vehicle:string;service:string;slot:string;note:string;status:string})=>{state.bookings.unshift(booking);notify('Booking request sent')}
 const updateQuote=(id:string,status:'Approved'|'Declined')=>{const quote=state.quotes.find(q=>q.id===id);if(quote)quote.status=status;notify(`Quote ${status.toLowerCase()}`)}
 const setSignedIn=(value:boolean)=>state.signedIn=value
 return {state:readonly(state),addService,addDocument,addBooking,updateQuote,setSignedIn,notify}
}
