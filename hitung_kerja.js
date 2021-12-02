target_shift = (jam_kerja,cavity,ct) => parseInt(3600*jam_kerja*cavity/ct)
target_jam = (cav,ct) => parseInt(3600*cav/ct)

totalProd = (ok,ng,after,before) => ok+ng+after-before
workTime = (ok,ng,af,be,ct,cav) => {
	hasil = totalProd(ok,ng,af,be)*ct/3600/cav
	mnt = (hasil%1)*60
	return parseInt(hasil) + ' Jam, ' + parseInt(mnt) + ' Menit'
}


let ok, ng, after, before, ct, cav, jmkj

start_input = () => {

ok = prompt("OK: ")
ng = prompt("NG: ")
after = prompt("After: ")
before = prompt("Before: ")
ct = prompt("Cycle Time: ")
cav = prompt("Cavity: ")
jmkj = prompt("Jam Kerja: ")

alert(workTime(ok,ng,after,before,ct,cav))

} 
