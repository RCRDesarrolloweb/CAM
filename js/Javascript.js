$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBfRW-YYR7PlxaAPpF0m146ys_oPofI-FY",
    authDomain: "cam-servicios.firebaseapp.com",
    databaseURL: "https://cam-servicios.firebaseio.com",
    projectId: "cam-servicios",
    storageBucket: "cam-servicios.appspot.com",
    messagingSenderId: "184890645319"
  };
  firebase.initializeApp(config);
  var db = firebase.firestore();
// Add a new document in collection "cities"
function EnviarPedido() {

var Nombre = document.Pedido.name.value;
var RIF = document.Pedido.RIF.value;
var Direccion = document.Pedido.Direccion.value;
var email = document.Pedido.email.value;
var Telefono = document.Pedido.Telefono.value;
var Servicios = document.Pedido.SDWeb.value + ',' + document.Pedido.SPWeb.value + ','+document.Pedido.SMWeb.value;
var Comentarios= document.Pedido.comments.value;
var docRef = db.collection("Pedidos").doc(Nombre);
var dataen ='name='+Nombre+'&RIF=' + RIF+'&Direccion=' + Direccion+'&email=' +email+'&Telefono=' +Telefono +'&comments='+ Comentarios;

docRef.get().then(function(doc) {
    if (doc.exists) {
        alert('Ya has enviado una solicitud de servicio');
    } else {
      
        // doc.data() will be undefined in this case
        db.collection("Pedidos").doc(Nombre).set({
    Nombre:Nombre,
    RIF:RIF,
    Direccion:Direccion,
    email:email,
    Telefono:Telefono,
    Servicios:Servicios,
    Especificaciones:Comentarios,
    Porcentaje:"0%",
    Pago:"Sin definir",
    Desarrollo:"Sin empezar",
    Link:"Aún no creado",


})
.then(function() {
    console.log("Document successfully written!");
    alert('Pedido solicitado con exito');
})
.catch(function(error) {
    console.error("Error writing document: ", error);
    alert('Hubo un error en el envío del pedido');
});
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
    alert('Hubo un error en el envío del pedido');
});
  return false;
}
//Consulta A la Base de Datos
i = ["NombreS","ServicioS","Desarrollo","Pago","Porcentaje","Link"];
function consultar() {
            document.getElementById(i[0]).value = "";
            document.getElementById(i[1]).value = "";
            document.getElementById(i[2]).value = "";
            document.getElementById(i[3]).value = "";
            document.getElementById(i[4]).value = "";
            document.getElementById(i[5]).value = "";
var RIFC = document.getElementById('RIFC').value;

db.collection("Pedidos").where("RIF", "==", RIFC)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc);
             // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var A = doc.data();
            Condicion = A.Nombre;
            document.getElementById(i[0]).value = A.Nombre;
            document.getElementById(i[1]).value = A.Servicios;
            document.getElementById(i[2]).value = A.Desarrollo;
            document.getElementById(i[3]).value = A.Pago;
            document.getElementById(i[4]).value = A.Porcentaje;
            document.getElementById(i[5]).value = A.Link;
            
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
           
    });
    window.setTimeout(function Validar0() {
    
      
      if (document.getElementById(i[0]).value=="") {
        alert('El RIF ingresado no se encuentra registrado en nuestras solicitudes');
      }
      },5000);
      
      
    }
        

