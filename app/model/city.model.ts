// city.model.ts
export class City {
	// default waarden toegevoegd voor nieuwe City.
	// Dan kunnen we in city.add.ts eenvoudig new City() gebruiken, zonder waarden te hoeven opgeven
	constructor(public id:number = 1,
				public name:string = '',
				public province:string = '',
				public rating:number = 0,
				public price:number = 0,
				public highlights?:string[]) {
	}
}
