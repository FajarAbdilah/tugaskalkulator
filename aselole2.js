var input = require("readline-sync");
console.log("....................")
console.log(" enter " + " + " + "-" + " * " + " or" + "/")
const input2 = input.question("pilihlah salah satu yang akan dipilih =")
console.log("....................")

if (input2=="-")
var bil1= input.question("masukan angka =")
var bil2= input.question("masukan angka =")
const intbil1 = bil1
const intbil2 = bil2
const hasil = (Number(intbil1))-(Number(intbil2))
console.log("hasilnya adalah " + hasil)