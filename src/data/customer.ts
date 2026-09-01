export type TimelineEventType='Service'|'Repair'|'Tyre change'|'Inspection'|'Mileage update'|'Document upload'|'Accident / body repair'|'Modification'|'Ownership transfer'|'Workshop recommendation'
export type DocumentCategory='Registration certificate'|'Insurance policy'|'Technical inspection'|'Homologation'|'Leasing documents'|'Service invoice'|'Repair invoice'|'Warranty document'|'Other'
export type Workshop={id:string;name:string;location:string;distance:string;address:string;partner:boolean;brands:string[];services:string[];hours:string;phone:string;email:string;slots:string[];rating:number;reviews:number;benefit?:string}
export type Quote={id:string;workshop:string;vehicle:string;service:string;created:string;expires:string;labour:number;parts:{name:string;price:number}[];recommendation:string;status:'Pending'|'Approved'|'Declined'|'Expired';photos:number}
export type VehicleDocument={id:string;name:string;category:DocumentCategory;issueDate:string;expirationDate?:string;reminder:boolean;size:string;verified:boolean}
export type VehicleEvent={id:string;vehicleId:string;type:TimelineEventType;date:string;mileage:number;title:string;workshop?:string;description:string;parts:string[];cost?:number;currency?:'EUR'|'CHF';photos:number;documents:number;notes?:string;verification:'User entered'|'Workshop verified'|'Imported'}
export const initialVehicleEvents:VehicleEvent[]=[
 {id:'ve1',vehicleId:'bmw-320d',type:'Workshop recommendation',date:'26 August 2026',mileage:87420,title:'Front suspension inspection recommended',workshop:'Garage Jerala',description:'Knocking sound should be inspected before the next long journey.',parts:[],photos:2,documents:1,notes:'Recommendation from digital inspection.',verification:'Workshop verified'},
 {id:'ve2',vehicleId:'bmw-320d',type:'Mileage update',date:'20 August 2026',mileage:87420,title:'Mileage updated',description:'Owner updated the current odometer reading.',parts:[],photos:1,documents:0,verification:'User entered'},
 {id:'ve3',vehicleId:'bmw-320d',type:'Service',date:'15 May 2026',mileage:84840,title:'Engine oil & filter',workshop:'Garage Jerala',description:'Scheduled oil service completed.',parts:['5.2 L LL-04 5W-30','Oil filter'],cost:219,currency:'EUR',photos:1,documents:1,verification:'Workshop verified'},
 {id:'ve4',vehicleId:'bmw-320d',type:'Inspection',date:'2 April 2026',mileage:82110,title:'Annual technical inspection',workshop:'AMZS Ljubljana',description:'Vehicle passed with no defects.',parts:[],cost:38,currency:'EUR',photos:0,documents:1,verification:'Imported'},
 {id:'ve5',vehicleId:'bmw-320d',type:'Tyre change',date:'21 October 2025',mileage:72880,title:'Winter tyres fitted',workshop:'Pneu Center Vič',description:'Winter wheel set fitted and summer set stored.',parts:['Continental WinterContact TS 870 P'],cost:45,currency:'EUR',photos:2,documents:1,verification:'Workshop verified'},
 {id:'ve6',vehicleId:'bmw-320d',type:'Repair',date:'12 October 2025',mileage:72300,title:'Front brake pads & discs',workshop:'Autohaus Müller',description:'Front braking components replaced.',parts:['Front discs','Brake pads','Wear sensor'],cost:690,currency:'CHF',photos:3,documents:1,verification:'Workshop verified'},
 {id:'ve7',vehicleId:'bmw-320d',type:'Modification',date:'10 September 2025',mileage:70220,title:'Tow bar installed',workshop:'Garage Jerala',description:'Detachable tow bar fitted and homologated.',parts:['Westfalia detachable tow bar'],cost:840,currency:'EUR',photos:2,documents:1,verification:'Workshop verified'},
 {id:'ve8',vehicleId:'bmw-320d',type:'Accident / body repair',date:'4 February 2024',mileage:43200,title:'Rear bumper repaired',workshop:'Karoserija Novak',description:'Low-speed parking damage repaired and repainted.',parts:['Rear bumper trim'],cost:760,currency:'EUR',photos:4,documents:2,verification:'Imported'},
 {id:'ve9',vehicleId:'bmw-320d',type:'Document upload',date:'1 July 2023',mileage:35120,title:'Insurance policy added',description:'Annual comprehensive insurance policy stored.',parts:[],photos:0,documents:1,verification:'User entered'},
 {id:'ve10',vehicleId:'bmw-320d',type:'Ownership transfer',date:'1 June 2023',mileage:34200,title:'Ownership transferred',description:'Vehicle profile transferred to the current owner.',parts:[],photos:0,documents:0,verification:'Imported'},
 {id:'vg1',vehicleId:'golf-gti',type:'Service',date:'8 July 2026',mileage:124600,title:'DSG oil service',workshop:'Autohaus Müller',description:'Scheduled transmission fluid and filter service.',parts:['DSG fluid','Transmission filter'],cost:480,currency:'CHF',photos:1,documents:1,verification:'Workshop verified'}
]
export const workshops:Workshop[]=[
 {id:'garage-jerala',name:'Garage Jerala',location:'Ljubljana',distance:'4.2 km',address:'Celovška cesta 228, Ljubljana',partner:true,brands:['BMW','MINI','Volkswagen'],services:['Regular service','Brakes','Diagnostics','Tyres'],hours:'Mon–Fri · 07:30–17:00',phone:'+386 1 555 01 40',email:'service@jerala.si',slots:['Tue 1 Sep · 08:00','Tue 1 Sep · 13:30','Thu 3 Sep · 09:00'],rating:4.9,reviews:128,benefit:'10% off labour for Vintro members'},
 {id:'autohaus-muller',name:'Autohaus Müller',location:'Zürich',distance:'8.7 km',address:'Badenerstrasse 681, Zürich',partner:true,brands:['BMW','Volkswagen','Audi'],services:['Regular service','DSG service','Body repair','Inspection'],hours:'Mon–Sat · 08:00–18:00',phone:'+41 44 555 21 10',email:'termin@mueller.ch',slots:['Wed 2 Sep · 10:30','Fri 4 Sep · 08:00','Fri 4 Sep · 14:00'],rating:4.7,reviews:94,benefit:'Free seasonal vehicle check'},
 {id:'pneu-center',name:'Pneu Center Vič',location:'Ljubljana',distance:'6.1 km',address:'Tržaška cesta 144, Ljubljana',partner:false,brands:['All brands'],services:['Tyres','Wheel alignment','Storage'],hours:'Mon–Fri · 08:00–16:00',phone:'+386 1 555 62 20',email:'info@pnevmatik.si',slots:['Mon 7 Sep · 11:00','Tue 8 Sep · 15:30'],rating:4.6,reviews:61}
]
export const partnerOffers=[
 {id:'o1',title:'Seasonal tyre change',workshop:'Garage Jerala',standard:'€55',member:'€45',tag:'Member price'},
 {id:'o2',title:'Air-conditioning service',workshop:'Autohaus Müller',standard:'CHF 149',member:'CHF 119',tag:'Summer offer'},
 {id:'o3',title:'Wheel storage',workshop:'Pneu Center Vič',standard:'€60',member:'€48',tag:'Seasonal'}
]
export const initialDocuments:VehicleDocument[]=[
 {id:'d1',name:'Vehicle registration 2026',category:'Registration certificate',issueDate:'2026-02-14',expirationDate:'2027-02-14',reminder:true,size:'PDF · 640 KB',verified:true},
 {id:'d2',name:'Insurance policy',category:'Insurance policy',issueDate:'2026-01-01',expirationDate:'2026-12-31',reminder:true,size:'PDF · 1.1 MB',verified:false},
 {id:'d3',name:'Invoice — Oil service',category:'Service invoice',issueDate:'2026-05-15',size:'PDF · 248 KB',reminder:false,verified:true}
]
export const initialQuotes:Quote[]=[
 {id:'q1',workshop:'Garage Jerala',vehicle:'BMW 320d Touring',service:'Front suspension repair',created:'25 August 2026',expires:'1 September 2026',labour:280,parts:[{name:'Front control arm',price:245},{name:'Wheel alignment',price:75}],recommendation:'The left front control-arm bushing has excessive play. Replacement is recommended before the next inspection.',status:'Pending',photos:2},
 {id:'q2',workshop:'Autohaus Müller',vehicle:'Volkswagen Golf GTI',service:'DSG service',created:'3 July 2026',expires:'10 July 2026',labour:190,parts:[{name:'DSG service kit',price:260}],recommendation:'Scheduled transmission service.',status:'Approved',photos:0}
]
export const ownershipHistory=[
 {owner:'Current owner',period:'June 2023 — present',location:'Zürich, Switzerland',current:true},
 {owner:'Previous owner',period:'February 2020 — June 2023',location:'Munich, Germany',current:false}
]
