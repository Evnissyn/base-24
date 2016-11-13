export default class Lotis {
	constructor (value) {
		this.value = value;
		this.lotis = this._lotisArray(value);

	}

	_lotisArray (value) {
		let lotis = [];
		let temp = this.value;

		do {
			lotis.unshift(temp % 24);
			temp = Math.floor(temp / 24);
		} while (temp)

		// return lotis.map((element) => {
		// 	return lotis_enum[element];
		// })
		return lotis
	}

	setDecimalValue (value) {
		this.value = value;
		this.lotis = this._lotisArray(value);
	}

	printDecimalValue () {
		console.log(this.value);
	}

	setLotisValue (lotis) {
		this.lotis = lotis;
		let value = 0;

		for(var i = 0; i < lotis.length; i++) {
			value *= 24;
			value += lotis[i];
		}

		this.value = value;
	}

	printLotisWords () {

		return this.lotis.map((element) => {
			return lotis_enum[element];
		}).join(" ")
	}
}

export const lotis_enum = [
	"YUGU",
	"YUNA",
	"PASA",
	"DANA",
	"IRU",
	"SAKUA",
	"JETA",
	"RIIYA",
	"RANA",
	"ALETO",
	"UIDO",
	"RUTA",
	"SARTO",
	"SHIBI",
	"JIVA",
	"SAN",
	"KARA",
	"RAJEI",
	"FORA",
	"RANGU",
	"UTEI",
	"SHETO",
	"SAMA",
	"VIMUKU"
]
export const lotis_meaning = [
	"union",
	"love",
	"truth",
	"water",
	"fire",
	"knowledge",
	"struggle",
	"barrier",
	"happiness",
	"purity",
	"self-sacrifice",
	"perseverence",
	"beauty",
	"calm",
	"healing",
	"friendship",
	"guard",
	"light",
	"time",
	"courage",
	"wake",
	"longevity",
	"guidance",
	"release"
]