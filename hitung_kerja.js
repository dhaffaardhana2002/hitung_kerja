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

ok = parseInt(prompt("OK: "))
ng = parseInt(prompt("NG: ")) 
after = parseInt(prompt("After: ")) 
before = parseInt(prompt("Before: ")) 
ct = parseFloat(prompt("Cycle Time: ")) 
cav = parseInt(prompt("Cavity: ")) 
jmkj = parseInt(prompt("Jam Kerja: "))

alert(workTime(ok,ng,after,before,ct,cav))

} 
