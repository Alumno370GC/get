class Persona{
constructor (nombre, libros){
this.nombre =nombre;
this.libros =libros  || [] ;

}

set setlibros(libro){
this.libros.push(libro)

}

get getlibros(){
return this.libros;

}

//metodo
buscarLibroPorTitulo(titulo){

return this.libros.find((item)=> item.titulo ===titulo);

}


}

const personaUno = new Persona("Ignacio");
personaUno.setlibros= { titulo: "Papelucho", autor: "Marcela Paz"};

personaUno.setlibros ={
titulo: "El principito",
autor: "Antoine de saint-Exupery",

};

console.log(personaUno.buscarLibroPorTitulo("papelucho"));
console.log(personaUno.getLibros);