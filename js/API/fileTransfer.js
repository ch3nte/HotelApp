var file ={
	exito: function(){
		
		window.localStorage.setItem("nombreUsuario", $("#nombreregistro").val());
		window.location.href = "#home";

	},


	error:function(){


	},

	transferir:function(fileURL){
		alert("Transfiriendo foto");
		/*
		* opciones de envio
		*
		**/
		var options = new FileUploadOptions();
		optinos.fileKey = "foto";
		options.fileName = "miFoto";
		options.mimeType = "image/jpeg";
		options.chunkedMode = false;
		options.headers = {
			Conection: "close"
		};

		var ft = new FileTransfer();
		ft.upload(fileURL, encodeURI("http://www.colors.edu.mx/archivoTest.php"), file.exito, file.error, options);

	}

};