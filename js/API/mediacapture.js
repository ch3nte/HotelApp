var mc = {
	exito: function(mediaFiles){
		var path = mediaFiles[0].fullPath;
		$("#fototomadaregistro").html('<img src="'+path+'">');


	},

	error: function(){
		alert("Error al tomar la foto");

	},
	abrirCamara: function(){
	navigator.device.capture.captureImage(mc.exito, mc.error, {limit:1});

	}
};