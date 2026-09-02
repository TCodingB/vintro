export type BookingStatus='Requested'|'Confirmed'|'Arrived'|'In workshop'|'Waiting approval'|'Ready'|'Completed'|'Cancelled'
export type WorkOrderStatus='Booked'|'Checked-in'|'Inspection'|'Waiting approval'|'Repair'|'Ready'|'Completed'
export type InspectionState='OK'|'Monitor'|'Replace soon'|'Replace immediately'
export type EmployeeRole='Owner'|'Manager'|'Service advisor'|'Technician'|'Reception'|'Administrator'
export type CompanyCustomer={id:string;name:string;email:string;phone:string;vehicles:string[];visits:number;revenue:number;lastVisit:string;nextVisit:string;recommendations:number;marketing:boolean;segments:string[]}
export type CompanyBooking={id:string;time:string;duration:string;date:string;customer:string;vehicle:string;registration:string;service:string;technician:string;bay:string;status:BookingStatus;source:'Vintro Garage'|'Manual'}
export type InspectionItem={category:string,state:InspectionState;measurement:string;note:string;photo:boolean;action:string}
export type WorkOrder={id:string;bookingId:string;customer:string;vehicle:string;registration:string;vin:string;mileage:number;requested:string;technician:string;status:WorkOrderStatus;labour:{name:string;hours:number;rate:number}[];parts:{name:string;quantity:number;price:number}[];notes:string;photos:number;inspection:InspectionItem[];recommendation?:string}
export const company={name:'Servis Ljubljana',legalName:'Servis Ljubljana d.o.o.',vat:'SI 48291374',partner:true,phone:'+386 1 555 01 40',email:'info@servis-ljubljana.si',locations:[{id:'lj-center',name:'Servis Ljubljana',address:'Celovška cesta 228, Ljubljana',hours:'Mon–Fri · 07:30–17:00',bays:6},{id:'domzale',name:'Servis Domžale',address:'Ljubljanska cesta 82, Domžale',hours:'Mon–Fri · 08:00–17:00',bays:4}],services:['Regular service','Diagnostics','Brakes','Tyres','Inspection','Body repair'],brands:['BMW','MINI','Volkswagen','Audi'],prices:[['Workshop labour','€72 / hour'],['Diagnostics','€65'],['Tyre change','€55'],['Wheel alignment','€75']]}
export const employees=[
 {id:'e1',name:'Matej Novak',email:'matej@servis-ljubljana.si',role:'Owner' as EmployeeRole,location:'Servis Ljubljana',active:true},
 {id:'e2',name:'Nina Kovač',email:'nina@servis-ljubljana.si',role:'Service advisor' as EmployeeRole,location:'Servis Ljubljana',active:true},
 {id:'e3',name:'Luka Zupan',email:'luka@servis-ljubljana.si',role:'Technician' as EmployeeRole,location:'Servis Ljubljana',active:true},
 {id:'e4',name:'Marko Vidmar',email:'marko@servis-ljubljana.si',role:'Technician' as EmployeeRole,location:'Servis Domžale',active:true},
 {id:'e5',name:'Sara Mlakar',email:'sara@servis-ljubljana.si',role:'Reception' as EmployeeRole,location:'Servis Ljubljana',active:false}
]
export const customers:CompanyCustomer[]=[
 {id:'c1',name:'Tadej Boncelj',email:'tadej@example.com',phone:'+41 79 555 12 34',vehicles:['BMW 320d Touring','Volkswagen Golf GTI'],visits:8,revenue:3270,lastVisit:'15 May 2026',nextVisit:'November 2026',recommendations:1,marketing:true,segments:['Active','High-value','Service due soon','Open recommendations']},
 {id:'c2',name:'Ana Novak',email:'ana.novak@example.com',phone:'+386 41 222 810',vehicles:['Audi A4 Avant'],visits:5,revenue:1840,lastVisit:'2 July 2026',nextVisit:'January 2027',recommendations:0,marketing:true,segments:['Active','Tyre customer']},
 {id:'c3',name:'Thomas Keller',email:'thomas.k@example.com',phone:'+41 76 440 90 10',vehicles:['BMW X3 xDrive20d'],visits:11,revenue:5680,lastVisit:'11 August 2026',nextVisit:'October 2026',recommendations:2,marketing:false,segments:['Active','High-value','Open recommendations']},
 {id:'c4',name:'Maja Horvat',email:'maja@example.com',phone:'+386 31 908 221',vehicles:['MINI Cooper S'],visits:2,revenue:620,lastVisit:'18 April 2025',nextVisit:'Overdue',recommendations:0,marketing:true,segments:['Dormant','Service due soon']}
]
export const bookings:CompanyBooking[]=[
 {id:'b1',time:'08:00',duration:'1h 30m',date:'2026-08-26',customer:'Tadej Boncelj',vehicle:'BMW 320d Touring',registration:'ZH 482 913',service:'Front suspension inspection',technician:'Luka Zupan',bay:'Lift 2',status:'In workshop',source:'Vintro Garage'},
 {id:'b2',time:'09:30',duration:'1h',date:'2026-08-26',customer:'Ana Novak',vehicle:'Audi A4 Avant',registration:'LJ AV-440',service:'Oil service',technician:'Marko Vidmar',bay:'Lift 4',status:'Confirmed',source:'Manual'},
 {id:'b3',time:'11:00',duration:'45m',date:'2026-08-26',customer:'Thomas Keller',vehicle:'BMW X3 xDrive20d',registration:'ZH 662 118',service:'Diagnostics',technician:'Luka Zupan',bay:'Diagnostics',status:'Waiting approval',source:'Vintro Garage'},
 {id:'b4',time:'13:30',duration:'2h',date:'2026-08-26',customer:'Maja Horvat',vehicle:'MINI Cooper S',registration:'LJ MN-225',service:'Brakes',technician:'Marko Vidmar',bay:'Lift 1',status:'Requested',source:'Vintro Garage'},
 {id:'b5',time:'08:30',duration:'1h',date:'2026-08-27',customer:'Peter Kralj',vehicle:'Volkswagen Passat',registration:'KR PT-991',service:'Annual service',technician:'Luka Zupan',bay:'Lift 2',status:'Confirmed',source:'Manual'}
]
export const workOrders:WorkOrder[]=[
 {id:'WO-1048',bookingId:'b1',customer:'Tadej Boncelj',vehicle:'BMW 320d Touring',registration:'ZH 482 913',vin:'WBA8K91070K123456',mileage:87420,requested:'Front suspension inspection',technician:'Luka Zupan',status:'Inspection',labour:[{name:'Vehicle inspection',hours:.5,rate:72}],parts:[],notes:'Customer reports a knocking sound over uneven surfaces.',photos:2,inspection:[{category:'Tyres',state:'OK',measurement:'Front 5.2 mm · Rear 5.8 mm',note:'Even wear',photo:false,action:'None'},{category:'Brakes',state:'Monitor',measurement:'Front pads 4 mm',note:'Inspect at next service',photo:true,action:'Recheck within 5,000 km'},{category:'Suspension',state:'Replace soon',measurement:'Play detected',note:'Left control-arm bushing worn',photo:true,action:'Replace left front control arm'},{category:'Battery',state:'OK',measurement:'12.6 V',note:'Test passed',photo:false,action:'None'}],recommendation:'Replace left front control arm and perform wheel alignment.'},
 {id:'WO-1047',bookingId:'b3',customer:'Thomas Keller',vehicle:'BMW X3 xDrive20d',registration:'ZH 662 118',vin:'WBAWY31090L990210',mileage:112340,requested:'Engine warning light diagnosis',technician:'Luka Zupan',status:'Waiting approval',labour:[{name:'Diagnostics',hours:1,rate:72}],parts:[{name:'NOx sensor',quantity:1,price:420}],notes:'Fault code indicates intermittent NOx sensor signal.',photos:1,inspection:[],recommendation:'Replace NOx sensor and clear adaptation values.'},
 {id:'WO-1046',bookingId:'b2',customer:'Ana Novak',vehicle:'Audi A4 Avant',registration:'LJ AV-440',vin:'WAUZZZF49KA112233',mileage:95620,requested:'Oil service',technician:'Marko Vidmar',status:'Ready',labour:[{name:'Oil service',hours:.8,rate:72}],parts:[{name:'Engine oil 5W-30',quantity:5,price:14},{name:'Oil filter',quantity:1,price:22}],notes:'Service completed. Vehicle ready for collection.',photos:0,inspection:[]}
]
export const tyreSets=[
 {id:'t1',customer:'Tadej Boncelj',vehicle:'BMW 320d Touring',brand:'Continental',model:'WinterContact TS 870 P',dimensions:'225/45 R18',dot:'2424',tread:'6.8 mm',season:'Winter',mounted:'Removed 12 April 2026',location:'Rack A · Bin 14',condition:'Good'},
 {id:'t2',customer:'Ana Novak',vehicle:'Audi A4 Avant',brand:'Michelin',model:'Pilot Alpin 5',dimensions:'245/40 R18',dot:'1823',tread:'5.4 mm',season:'Winter',mounted:'Removed 2 April 2026',location:'Rack B · Bin 08',condition:'Monitor'},
 {id:'t3',customer:'Thomas Keller',vehicle:'BMW X3 xDrive20d',brand:'Pirelli',model:'Scorpion Winter',dimensions:'245/50 R19',dot:'3022',tread:'4.1 mm',season:'Winter',mounted:'Removed 20 March 2026',location:'Rack C · Bin 22',condition:'Replace soon'}
]
export const campaigns=[
 {id:'cp1',name:'Autumn tyre change 2026',segment:'Winter tyres in storage',channel:'Email + Push',status:'Scheduled',sent:128,opened:0,clicked:0,booked:0,revenue:0},
 {id:'cp2',name:'BMW service reminder',segment:'BMW · due within 60 days',channel:'Email',status:'Completed',sent:84,opened:61,clicked:28,booked:13,revenue:4680},
 {id:'cp3',name:'Dormant customer return',segment:'Inactive for 12 months',channel:'Email',status:'Draft',sent:0,opened:0,clicked:0,booked:0,revenue:0}
]
