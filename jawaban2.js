class kendaraan {
	constructor(roda = 0, kecepatan = 0) {
		this.roda = roda;
		this.kecepatan = kecepatan;
	}
}

class mobil extends kendaraan {
	constructor(roda = 0, kecepatan = 0) {
		super(roda, kecepatan);
	}

	tambahKecepatan(value) {
		return (this.kecepatan += value);
	}

	berjalan() {
		return this.tambahKecepatan(10);
	}
}

function main() {
	let mobilCepat = new mobil();
	mobilCepat.berjalan();
	mobilCepat.berjalan();
	mobilCepat.berjalan();

	let mobilLamban = new mobil();
	mobilLamban.berjalan();

	console.log('Kecepatan mobil cepat: ', mobilCepat.kecepatan);
	console.log('Kecepatan mobil lamban: ', mobilLamban.kecepatan);
}

main();
