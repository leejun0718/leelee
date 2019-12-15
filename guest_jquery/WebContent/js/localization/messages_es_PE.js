(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES (Spanish; Espa챰ol)
 * Region: PE (Per첬)
 */
$.extend( $.validator.messages, {
	required: "Este campo es obligatorio.",
	remote: "Por favor, llene este campo.",
	email: "Por favor, escriba un correo electr처nico v찼lido.",
	url: "Por favor, escriba una URL v찼lida.",
	date: "Por favor, escriba una fecha v찼lida.",
	dateISO: "Por favor, escriba una fecha (ISO) v찼lida.",
	number: "Por favor, escriba un n첬mero v찼lido.",
	digits: "Por favor, escriba s처lo d챠gitos.",
	creditcard: "Por favor, escriba un n첬mero de tarjeta v찼lido.",
	equalTo: "Por favor, escriba el mismo valor de nuevo.",
	extension: "Por favor, escriba un valor con una extensi처n permitida.",
	maxlength: $.validator.format( "Por favor, no escriba m찼s de {0} caracteres." ),
	minlength: $.validator.format( "Por favor, no escriba menos de {0} caracteres." ),
	rangelength: $.validator.format( "Por favor, escriba un valor entre {0} y {1} caracteres." ),
	range: $.validator.format( "Por favor, escriba un valor entre {0} y {1}." ),
	max: $.validator.format( "Por favor, escriba un valor menor o igual a {0}." ),
	min: $.validator.format( "Por favor, escriba un valor mayor o igual a {0}." ),
	nifES: "Por favor, escriba un NIF v찼lido.",
	nieES: "Por favor, escriba un NIE v찼lido.",
	cifES: "Por favor, escriba un CIF v찼lido."
} );
return $;
}));
