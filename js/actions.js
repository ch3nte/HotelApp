var fn = {
	deviceready: function(){
		document.addEventListener("deviceready", fn.init, false);
	},

	init: function(){

		/*
		* En esta seccion vamos a asociar
		* todos los eventos del "click" al HTML
		*
		*/
		$("#botonregistrar").tap(fn.registrar);
		$("#tomarfoto").tap(mc.abrirCamara);


	},

	registrar: function(){

		/*
		* Paso 1--- obtener los datos del formuilario 
		*
		*
		*/
		var nombre= $("#nombreregistro").val();
		var email= $("#emailregistro").val();
		var telefono = $("#telefonoregistro").val();
		var password = $("#passwordregistro").val();
		var foto = $("#fototomadaregistro")[0];

		
		/*console.log(nombre);
		console.log(email);
		console.log(telefono);
		console.log(password);*/

		try{

			if(foto == undefined){
				throw new Error("Debe de tomar una foto")

			}

			if(typeof nombre !== "string"){
				throw new Error("El nombre no es valido");
			}
			if(email ==""){
				throw new Error("El email es forzoso");
			}
			if(email.indexOf("@") == -1){
				throw new Error("El email debe contener un arrob@");

			}
			if(password ==""){
				throw new Error("El password es forzoso");
			}

			if(Number.isNaN(Number(telefono))){
				throw new Error("El telefono debe de ser numerico");
			}

			/*
			*
			*Aquí vamos a registrar al usuario
			*
			*/
			fn.enviarRegistro(nombre, email, telefono, password, foto);


		}catch(error){
			alert(error);
		}

	},
		enviarRegistro: function(nombreR, emailR, telefonoR, passwordR, fotoR){
			$.ajax({
				  method: "POST",
				  url: "http://www.colors.edu.mx/archivoTest.php",
				  data: {

				   	nombre: nombreR,
				   	email: emailR,
				   	telefono: telefonoR,
				   	password: passwordR,
				  	 }
				})
				  .done(function( mensaje ) {alert("AJAX Terminado");
				    if (mensaje == 1){
				    	/*transferir foto*/

				    	var fotoURL = fotoR.src;
				    	file.trasnferir(fotoURL);


				    }
				    else{
				    	alert("Error al enviar datos de registro"+mensaje);
				    }

				  }).fail(function(error){
				  	alert(error.status);
				  	alert(error.message);
				  	alert(error.responseText);
				  })
				}
	};

/*
*  LLAMAR AL OBJETO INIT
*
*
*/

/*
*  LLAMAR DEVICEREADY
*  PARA COMPILAR 
*
*/
$(fn.deviceready);


//fn.init();


