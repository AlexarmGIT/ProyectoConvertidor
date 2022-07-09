function convertir() {

  let cripto =prompt("ingrese la criptomoneda btc/eth/ada/xrp "); 
  let dolar = parseFloat(prompt("ingrese la cantidad de dolares a convertir")); 
  let bitcoin = 19237;
  let etereum = 1052;
  let ada = 0.44;
  let xrp = 0.31;
  let resultado = 0;

  if (cripto === "btc"){
    resultado = dolar/bitcoin
     alert("la cantidad de de Bitcoin sera "+ resultado )
  }
   else if ( cripto === "eth"){
    (resultado = dolar/etereum)
     alert("La cantidad de Etereum sera $" + resultado)
   }
     else if (cripto === "ada"){
      (resultado = dolar/ada)
       alert("La cantidad de Ada sera $" + resultado)
    }
      else if (cripto === "xrp"){
       (resultado = dolar/xrp)
       alert("La cantidad de Xrp sera $" + resultado)
     }

 else {
    alert("No colocaste ningun valor ")
 }
}

convertir();

const mostrarCripto=[];

    let bitcoin = 19237;
    let etereum = 1052;
    let ada = 0.44;
    let xrp = 0.31;

 mostrarCripto.push({bitcoin:bitcoin, etereum:etereum, ada:ada, xrp:xrp}); 

let pregunta = prompt("Le gustaria  conocer las  cotizaciones disponibles? Si/NO");

if(pregunta ==="SI"|| "si"|| "Si"){
  let carga = mostrarCripto.forEach(e => alert( "Las cotizaciones son : "+ "\n"+
  "Bitcoin =$ "+e.bitcoin +"\n"+"Ethereum =$ "+ e.etereum +"\n"+"ADA =$ "+e.ada +"\n"+"Xrp =$ "+e.xrp));
  console.log(carga);
}
  else if (pregunta ==="NO"|| "no"|| "No"){
  alert("Muchas gracias por su consulta , vuelva pronto");
  }
else{
    alert("datos incorrectos");
    } 

