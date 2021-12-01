target_shift = (jam_kerja,cavity,ct) => parseInt(3600*jam_kerja*cavity/ct)
target_jam = (cav,ct) => parseInt(3600*cav/ct)

totalProd = (ok,ng,after,before) => ok+ng+after-before
workTime = (ok,ng,af,be,ct,cav) => {
	hasil = totalProd(ok,ng,af,be)*ct/3600/cav
	mnt = (hasil%1)*60
	return parseInt(hasil) + ' Jam, ' + parseInt(mnt) + ' Menit'
}

let ok = 2500
let ng = 5
let after = 125
let before = 250
let ct = 14.50
let cav = 4
let jmkj = 8

console.log(workTime(ok,ng,after,before,ct,cav))
console.log(target_shift(jmkj,cav,ct))
