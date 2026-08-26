import { reactive, readonly } from 'vue'
import { initialServices, type ServiceRecord } from '../data/mock'
const state=reactive({services:[...initialServices],toast:''})
let timer:number|undefined
export function useVintro(){
 const notify=(message:string)=>{state.toast=message;window.clearTimeout(timer);timer=window.setTimeout(()=>state.toast='',2800)}
 const addService=(record:ServiceRecord)=>{state.services.unshift(record);notify('Service added to vehicle record')}
 return {state:readonly(state),addService,notify}
}
