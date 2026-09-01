import {reactive,readonly} from 'vue';import {bookings,workOrders,campaigns,employees,type BookingStatus,type WorkOrderStatus,type InspectionState,type EmployeeRole} from '../data/company';
const state=reactive({bookings:[...bookings],workOrders:[...workOrders],campaigns:[...campaigns],employees:[...employees]});
export function useWorkshop(){
 const setBookingStatus=(id:string,status:BookingStatus)=>{const b=state.bookings.find(x=>x.id===id);if(b)b.status=status};
 const addBooking=(booking:typeof bookings[number])=>state.bookings.push(booking);
 const setWorkOrderStatus=(id:string,status:WorkOrderStatus)=>{const w=state.workOrders.find(x=>x.id===id);if(w)w.status=status};
 const setInspectionState=(orderId:string,category:string,value:InspectionState)=>{const item=state.workOrders.find(w=>w.id===orderId)?.inspection.find(i=>i.category===category);if(item)item.state=value};
 const addEmployee=(employee:{id:string;name:string;email:string;role:EmployeeRole;location:string;active:boolean})=>state.employees.push(employee);
 const toggleEmployee=(id:string)=>{const employee=state.employees.find(e=>e.id===id);if(employee)employee.active=!employee.active};
 const completeService=(id:string)=>setWorkOrderStatus(id,'Completed');
 return {state:readonly(state),setBookingStatus,addBooking,setWorkOrderStatus,setInspectionState,addEmployee,toggleEmployee,completeService}
}
