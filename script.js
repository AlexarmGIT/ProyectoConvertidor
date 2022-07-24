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
const yes = document.getElementById('SI')
const nou =document.getElementById('NO')
const cotizacion = document.getElementById('cotgral')
const saludar = document.getElementById('saludo')
const ingreso = document.getElementById('usuario1')
const botonera =document.getElementById('boton')
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
yes.addEventListener("change",cotizaciones)
nou.addEventListener("change",cotizaciones)
cotizacion.addEventListener("change",cotizaciones)
saludar.addEventListener("change",saludo)
ingreso.addEventListener("input",saludo)
/* botonera.addEventListener('click',saludo)
 */
intercambio.addEventListener('click', ()=>{
  const cambio = criptoUno.value;
  criptoUno.value = criptoDos.value; 
  criptoDos.value = cambio;
  convertir();
})

/* Aplicando localStorage al usuario  */

function saludo(){

let usuario = document.getElementById("usuario1").value;

let usuarioRec = localStorage.getItem("usuario" ,usuario)
 if (usuarioRec !== null  ){ 
    usuario = usuarioRec
    saludar.innerHTML=("BIENVENIDO " + "\n " + usuario +"!!!")

 }else{
  localStorage.setItem("usuario", usuario)
 }
}
saludo();
/* -----------------------------------------------------------
 */
function convertir(){

  let dolar = 1;
  let bitcoin = 19237;
  let etereum = 1052;
  let ada = 0.44;
  let xrp = 0.31;
  

  if (criptoUno.value ===usd.value && criptoDos.value=== btcoin.value){
    resultado = document.getElementById("valorUno").value /bitcoin;
    finalIntercambio.innerHTML=("Tu resultado es de"+ "\n "+resultado +"\n "+" Bitcoin");
  }
   else if ( criptoUno.value === usd.value && criptoDos.value===ethe .value ){
    resultado = document.getElementById("valorUno").value/etereum;
    finalIntercambio.innerHTML=("Tu resultado es de"+ "\n "+resultado +"\n "+" Ethereum");
   }
     else if (criptoUno.value === cardano.value && criptoDos.value=== usd.value){
      resultado = document.getElementById("valorUno").value/ada;
      finalIntercambio.innerHTML=("Tu resultado es de"+ "\n "+resultado +"\n "+" Ada");
    }
      else if (criptoUno.value === ripple.value && criptoDos.value=== usd.value){
       resultado = document.getElementById("valorUno").value/xrp;
       finalIntercambio.innerHTML= ("Tu resultado es de"+ "\n "+resultado +"\n "+" Xrp");
      }

 else {
    ("No colocaste ningun valor ")
 }
}

convertir();

function cotizaciones (){
  
  const listaCripto = [
  {id: 1 ,nombre:"BITCOIN  " , precio:19237},
  {id: 2 ,nombre:"ETHEREUM " , precio:1052},
  {id: 3 ,nombre:"ADA  " , precio:0.44},
  {id: 4 ,nombre:"XRP  " , precio:0.31},
]

if(cotizacion.value===yes.value){ 
  listaCripto.forEach((elemento) => {
       let div = document.createElement("div");
       div.innerHTML = `
       Cripto: <b>${elemento.nombre}</b> 
       Precio: <b>$${elemento.precio}</b> 
       <hr/>
     `;
       document.body.append(div);
     });


}else if (cotizacion.value===nou.value){
let H1= document.createElement("H1")
  H1.innerHTML=("Muchas gracias por su consulta , vuelva pronto");
  document.body.append(H1);
  }
/* else{
let fallo = document.createElement("h1"); 
fallo.innerHTML=("datos ingresados Incorrectos")
document.body.append(fallo); }  */
}
cotizaciones();
