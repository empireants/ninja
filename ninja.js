class ninja{
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre = "Esteban";
        this.salud= 0;
        this.velocidad= 3;
        this.fuerza=3;
    }
    sayName(){
        this.nombre;
        console.log (`${this.nombre}`)  
    }
    showStats(){
        console.log(`${this.nombre}${this.salud}${this.velocidad}${this.fuerza}`)
    }
    drinkSake(){
        this.salud=+10;
        console.log(`${this.nombre}${this.salud}`)
    }
}
