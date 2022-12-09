var input = require("readline-sync");
console.log("....................")
console.log(" enter " + " + " + "-" + " * " + " or" + "/")
const input2 = input.question("pilihlah salah satu yang akan dipilih =")
console.log("....................")

if (input2=="-"){
var bil1= input.question("masukan angka =")
var bil2= input.question("masukan angka =")
console.log(bil1-bil2)
}else if(input2 =="+"){
var bil1= input.questionInt("masukan angka =")
var bil2= input.questionInt("masukan angka =")
var hasil = bil1 + bil2
console.log(hasil)
