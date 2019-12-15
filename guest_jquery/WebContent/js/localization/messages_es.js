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
 */
$.extend( $.validator.messages, {
	required: "Este campo es obligatorio.",
	remote: "Por favor, rellena este campo.",
	email: "Por favor, escribe una direcci처n de correo v찼lida.",
	url: "Por favor, escribe una URL v찼lida.",
	date: "Por favor, escribe una fecha v찼lida.",
	dateISO: "Por favor, escribe una fecha (ISO) v찼lida.",
	number: "Por favor, escribe un n첬mero v찼lido.",
	digits: "Por favor, escribe s처lo d챠gitos.",
	creditcard: "Por favor, escribe un n첬mero de tarjeta v찼lido.",
	equalTo: "Por favor, escribe el mismo valor de nuevo.",
	extension: "Por favor, escribe un valor con una extensi처n aceptada.",
	maxlength: $.validator.format( "Por favor, no escribas m찼s de {0} caracteres." ),
	minlength: $.validator.format( "Por favor, no escribas menos de {0} caracteres." ),
	rangelength: $.validator.format( "Por favor, escribe un valor entre {0} y {1} caracteres." ),
	range: $.validator.format( "Por favor, escribe un valor entre {0} y {1}." ),
	max: $.validator.format( "Por favor, escribe un valor menor o igual a {0}." ),
	min: $.validator.format( "Por favor, escribe un valor mayor o igual a {0}." ),
	nifES: "Por favor, escribe un NIF v찼lido.",
	nieES: "Por favor, escribe un NIE v찼lido.",
	cifES: "Por favor, escribe un CIF v찼lido."
} );
return $;
}));
