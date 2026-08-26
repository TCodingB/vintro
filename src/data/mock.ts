export type ServiceRecord={id:string;date:string;dateISO:string;mileage:number;type:string;category:'Service'|'Repairs'|'Inspection';workshop:string;parts:string[];notes?:string;cost:number;currency:'CHF'|'EUR';verified:boolean}
export type MaintenanceItem={id:string;name:string;status:'Due soon'|'Up to date'|'Overdue';dueAt?:number;remaining?:number;dueDate:string;last:string;interval:string;why:string}
export type Vehicle={id:string;vin:string;make:string;model:string;trim:string;year:number;mileage:number;fuelType:string;power:string;transmission:string;registration?:string;image:string;health:string}
export const vehicles:Vehicle[]=[
 {id:'bmw-320d',vin:'WBA8K91070K123456',make:'BMW',model:'320d Touring',trim:'M Sport · G21',year:2020,mileage:87420,fuelType:'Diesel',power:'190 hp',transmission:'Automatic',registration:'ZH 482 913',image:new URL('../assets/bmw-320d.png',import.meta.url).href,health:'Up to date'},
 {id:'golf-gti',vin:'WVWZZZAUZHW123456',make:'Volkswagen',model:'Golf GTI',trim:'Performance · Mk7',year:2017,mileage:126800,fuelType:'Petrol',power:'230 hp',transmission:'Automatic',health:'Due soon',image:new URL('../assets/golf-gti-mk7.png',import.meta.url).href}
]
export const initialServices:ServiceRecord[]=[
 {id:'s1',date:'15 May 2026',dateISO:'2026-05-15',mileage:84840,type:'Engine oil & oil filter',category:'Service',workshop:'Garage Jerala',parts:['5.2 L BMW LL-04 5W-30','Oil filter'],notes:'Routine oil service. No issues found.',cost:219,currency:'EUR',verified:true},
 {id:'s2',date:'12 October 2025',dateISO:'2025-10-12',mileage:72300,type:'Front brake pads & discs',category:'Repairs',workshop:'Autohaus Müller',parts:['Front brake discs','Brake pads','Wear sensor'],cost:690,currency:'CHF',verified:true},
 {id:'s3',date:'3 March 2025',dateISO:'2025-03-03',mileage:60120,type:'Annual service',category:'Inspection',workshop:'Garage Jerala',parts:['Cabin filter','Air filter','Brake fluid inspection','Diagnostic scan'],cost:340,currency:'CHF',verified:false}
]
export const maintenance:MaintenanceItem[]=[
 {id:'oil',name:'Engine oil & filter',status:'Due soon',dueAt:90000,remaining:2580,dueDate:'November 2026',last:'15 May 2026',interval:'Every 15,000 km or 12 months',why:'Fresh oil protects moving engine components and maintains efficiency.'},
 {id:'brake',name:'Brake fluid',status:'Due soon',dueDate:'October 2026',last:'October 2024',interval:'Every 2 years',why:'Brake fluid absorbs moisture over time, reducing braking performance.'},
 {id:'cabin',name:'Cabin air filter',status:'Up to date',dueAt:105000,remaining:17580,dueDate:'Around June 2027',last:'3 March 2025',interval:'Every 30,000 km',why:'A clean filter supports good air quality and ventilation performance.'},
 {id:'transmission',name:'Transmission service',status:'Up to date',dueAt:120000,remaining:32580,dueDate:'Around April 2028',last:'Not recorded',interval:'Every 120,000 km',why:'Fluid and filter replacement help protect the automatic transmission.'}
]
export const specificationGroups=[
 {title:'Engine',items:[['Engine','B47D20'],['Displacement','1,995 cc'],['Power','140 kW / 190 hp'],['Torque','400 Nm'],['Fuel','Diesel']]},
 {title:'Fluids',items:[['Engine oil','5.2 L'],['Recommended specification','BMW Longlife-04'],['Coolant','8.2 L · BMW LC-18'],['Brake fluid','DOT 4']]},
 {title:'Wheels & Tires',items:[['Front','225/45 R18'],['Rear','255/40 R18'],['Wheel','8J × 18'],['Bolt pattern','5 × 112']]},
 {title:'Vehicle',items:[['Body','Touring'],['Transmission','8-speed automatic'],['Drive','Rear-wheel drive'],['Production year','2020'],['VIN','WBA8K91070K123456']]}
]
