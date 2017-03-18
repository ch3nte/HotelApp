var mc = {
	exito: function(mediaFiles){
		var path = mediaFiles[0].fullPath;
		$("#fototomadaregistro").html('<img src="'+path+'">');


	},

	error: function(error){
		alert(error.code);
		alert(error.source);
		alert(error.target);
		alert("Error al tomar la foto");

	},
	abrirCamara: function(){
	navigator.device.capture.captureImage(mc.exito, mc.error, {limit:1});

	};
	
}