class Vehiculos {
    constructor(altura, madera, color){
        this.madera=madera;
        this.altura=altura;
        this.color=color;
    }
    verMadera(){
        return '${this.madera}';
    }
    veraltura(){
        return '${this.altura}';
    }
    verColor(){
        return '${this.color}';
    }
    
}

let silla1 = new silla("Caoba", "65", "Rojo");
let silla2 = new silla("Cedro", "50", "Negro");
let silla3 = new silla("Pino", "85", "Blanco");

console.log(silla1);
console.log(silla2);
console.log(silla3);