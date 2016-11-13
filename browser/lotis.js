var Lotis = function(value) {
		this.value = value;
		this.lotis = Lotis._lotisArray(value);
}

Lotis._decimal = {
	YUNA: 1,
	PASA: 2,
	DANA: 3,
	IRU: 4,
	SAKUA: 5,
	JETA: 6,
	RIIYA: 7,
	RANA: 8,
	ALETO: 9,
	UIDO: 10,
	RUTA: 11,
	SARTO: 12,
	SHIBI: 13,
	JIVA: 14,
	SAN: 15,
	KARA: 16,
	RAJEI: 17,
	FORA: 18,
	RANGU: 19,
	UTEI: 20,
	SHETO: 21,
	SAMA: 22,
	VIMUKU: 23,
	YUGU: 24
}

Lotis._enum = [
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

Lotis._lotisArray = (value) => {
	let lotis = [];
	let temp = value;

	do {
		lotis.unshift(temp % 24);
		temp = Math.floor(temp / 24);
	} while (temp)

	return lotis.map((element) => {
		return Lotis._enum[element];
	})
}

Lotis.prototype.setDecimalValue = function (value) {
	this.value = value
}

Lotis.prototype.printDecimalValue = function () {
	console.log(this.value);
}

Lotis.prototype.printLotisValue = function () {
	console.log(this.lotis);
}

let x = new Lotis(10);

x.setDecimalValue(10);

x.printDecimalValue();
x.printLotisValue();

console.log(Lotis._symbols.SAKUA.join("\n"));

console.log(x)

// cool calculator things

export default Lotis;