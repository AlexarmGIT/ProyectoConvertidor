const criptoUno =document.getElementById( 'monedaUno')
const criptoDos =document.getElementById( 'monedaDos')
const cantidadUno = document.getElementById('valorUno')
const cantidadDos = document.getElementById('valorDos')
const intercambio = document.getElementById('taza')
const finalIntercambio = document.getElementById('valorCotizado')
const btcoin = document.getElementById('uno')
const ethe = document.getElementById('dos')
const cardano = document.getElementById('tres')
const ripple = document.getElementById('cuatro')
const usd = document.getElementById('dolar')
const btn = document.getElementById('boton')

/* Eventos */

criptoUno.addEventListener('change',convertir)
cantidadUno.addEventListener('input',convertir)
criptoDos.addEventListener('change',convertir)
cantidadDos.addEventListener('input',convertir)
btcoin.addEventListener('change',convertir)
ethe.addEventListener('change',convertir)
cardano.addEventListener('change',convertir)
ripple.addEventListener('change',convertir)
finalIntercambio.addEventListener('change',convertir)
intercambio.addEventListener("change",convertir)
usd.addEventListener('change',convertir)
btn.addEventListener('click',convertir)

intercambio.addEventListener('click', ()=>{
  const cambio = criptoUno.value;
  criptoUno.value = criptoDos.value; 
  criptoDos.value = cambio;
  convertir();
})



function convertir(){

  let dolar = 1;
  let bitcoin = 19237;
  let etereum = 1052;
  let ada = 0.44;
  let xrp = 0.31;
  

  if (criptoUno.value ===btcoin.value && criptoDos.value=== usd.value){
    resultado = document.getElementById("valorUno").value /bitcoin;
    finalIntercambio.innerHTML=resultado;
  }
   else if ( criptoUno.value === ethe.value && criptoDos.value=== usd.value ){
    resultado = document.getElementById("valorUno")/etereum;
    finalIntercambio.innerHTML=resultado;
   }
     else if (criptoUno.value === cardano.value && criptoDos.value=== usd.value){
      resultado = document.getElementById("valorUno")/ada;
      finalIntercambio.innerHTML=resultado;
    }
      else if (criptoUno.value === ripple.value && criptoDos.value=== usd.value){
       resultado = document.getElementById("valorUno")/xrp;
       finalIntercambio.innerHTML= resultado;
      }

 else {
    ("No colocaste ningun valor ")
 }
}

convertir();


/* const mostrarCripto=[];

    let bitcoin = 19237;
    let etereum = 1052;
    let ada = 0.44;
    let xrp = 0.31;

 mostrarCripto.push({bitcoin:bitcoin, etereum:etereum, ada:ada, xrp:xrp}); 
 
let pregunta = parseInt(document.getElementById("cotgral"));

if(document.getElementById("SI")){ 
  let carga = mostrarCripto.forEach(e =>carga.innerHTML( "Las cotizaciones son : "+ "\n"+
  "Bitcoin =$ "+e.bitcoin +"\n"+"Ethereum =$ "+ e.etereum +"\n"+"ADA =$ "+e.ada +"\n"+"Xrp =$ "+e.xrp ));
}
  else if (document.getElementById("NO")){
  pregunta.innerHTML=("Muchas gracias por su consulta , vuelva pronto");
  }
else{
    alert("datos incorrectos");
    } 

 */

