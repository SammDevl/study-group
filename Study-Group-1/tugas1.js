console.log("=== LATIHAN PENJAGA ZOOTOPIA ===");
console.log("");
console.log("Jarak Lari per hari:");
console.log("Judy Hopps: 3 km");
console.log("Nick Wilde: 2 km");
console.log("");

let jarakJudy = 0;
let jarakNick = 0;

for(let i = 1; i <= 5; i++){
    jarakJudy += 3;
    jarakNick += 2;
    console.log("Hari ke " + i);
    console.log("Judy Hopps lari 3 km");
    console.log("Nick Wilde lari 2 km");
    console.log("");
}
console.log("Total Jarak Lari dalam 5 hari:");    
console.log("Judy Hopps: " + jarakJudy + " km\nNick Wilde: " + jarakNick + " km");