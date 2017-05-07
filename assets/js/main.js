function Pokemon(nombre,color,poderDeAtaque,vida){
	this.nombre=nombre;
	this.color=color;

	this.nivelDeAmistad = 0;

	this.vida=vida;

	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return ("Hola, soy: "+ this.nombre +" y soy de color: "+ this.color);
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad= this.nivelDeAmistad + valor;
	}

	this.atacar= function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;

	}
};

	var arrpokemon=[];

	function principal(){
		var pikachu = new Pokemon("Pikachu", "amarillo", 100,300);
		var charmander = new Pokemon("Charmander", "rojo", 20,180);
		var charizard = new Pokemon("Charizard","naranja",80,400);
		var mewtwo = new Pokemon ("Mewtwo","morado",70,300);
		var mew = new Pokemon("Mew","lila",30,400);
		var blastoise = new Pokemon ("Blastoise","azul",50,500);
		arrpokemon.push(pikachu, charmander,charizard, mewtwo, mew, blastoise);

		llenarSelect("pokemon1",arrpokemon);
		llenarSelect("pokemon2", arrpokemon);

	}
function llenarSelect(idSelect, arrayPokemon){
	var select = document.getElementById(idSelect);
	var opAux;
	arrayPokemon.forEach(function(el){
		opAux= document.createElement("option");
		opAux.innerHTML = el.nombre;
		select.appendChild(opAux);
	});
}

function pelear(){
	var pok1= document.getElementById("pokemon1").value;
	var pok2 = document.getElementById("pokemon2").value;
	var res = document.getElementById("resultado");

	var pokemon1 = arrpokemon.filter(function(el){
		return el.nombre == pok1;
	})[0];
	var pokemon2 = arrpokemon.filter(function(el){
		return el.nombre==pok2;
	})[0];
	if(pokemon1===pokemon2){
		alert ("Los pokemones deben ser diferentes");
	} else if (pokemon2.vida <=0){
		alert(pokemon2.nombre + "GAME OVER");
	}else{
		pokemon1.atacar(pokemon2);
		res.innerHTML = pokemon1.nombre + " atacó a "+
		pokemon2.nombre+" y "+ pokemon2.nombre+" tiene una vida de "+
		pokemon2.vida;
	}
}
principal();
	/*this.ataque= function (){
		var lista1= document.getElementById("poke1").value;
		var lista2 = doument.getElementById("poke2").value;
		document.getElementById("resultado-ataque").innerHTML = 
		poke1.value + "pelea con "+ poke2.value;
		
}

const Pikachu = new Pokemon("Pikachu", "amarillo", 100,300),
const Charmander = new Pokemon("Charmander", "rojo", 20,180),
const Charizard = new Pokemon("Charizard","naranja",80,400)
const Mewtwo = new Pokemon ("Mewtwo","morado",70,300),
const Mew = new Pokemon("Mew","lila",30,400),
const Blastoise = new Pokemon ("Blastoise","azul",50,500)

function crearSelect(){
	arr=[];
	arr2=[];
	var select1= arr.push(Pikachu, Charmander, Charizard);
	var select2= arr2.push(Mew,Mewtwo,Blastoise);
	arr.forEach(function(el){
		var s1= poke1.innerHTML+= "<option value=el.nombre>"+el.nombre+"</option>";
	})
}

//Pikachu.atacar(Charmander);
//Charmander.atacar(Pikachu);
//console.log(Pikachu.vida);
//console.log(lista1);
function lista1(){
var cont = document.getElementById("resultado-ataque");
cont.innerHTML+= <option value="p1.nombre">"p1.nombre"</option>
} */

