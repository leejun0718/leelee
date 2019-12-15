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
 * Region: AR (Argentina)
 */
$.extend( $.validator.messages, {
	required: "Este campo es obligatorio.",
	remote: "Por favor, complet찼 este campo.",
	email: "Por favor, escrib챠 una direcci처n de correo v찼lida.",
	url: "Por favor, escrib챠 una URL v찼lida.",
	date: "Por favor, escrib챠 una fecha v찼lida.",
	dateISO: "Por favor, escrib챠 una fecha (ISO) v찼lida.",
	number: "Por favor, escrib챠 un n첬mero entero v찼lido.",
	digits: "Por favor, escrib챠 s처lo d챠gitos.",
	creditcard: "Por favor, escrib챠 un n첬mero de tarjeta v찼lido.",
	equalTo: "Por favor, escrib챠 el mismo valor de nuevo.",
	extension: "Por favor, escrib챠 un valor con una extensi처n aceptada.",
	maxlength: $.validator.format( "Por favor, no escribas m찼s de {0} caracteres." ),
	minlength: $.validator.format( "Por favor, no escribas menos de {0} caracteres." ),
	rangelength: $.validator.format( "Por favor, escrib챠 un valor entre {0} y {1} caracteres." ),
	range: $.validator.format( "Por favor, escrib챠 un valor entre {0} y {1}." ),
	max: $.validator.format( "Por favor, escrib챠 un valor menor o igual a {0}." ),
	min: $.validator.format( "Por favor, escrib챠 un valor mayor o igual a {0}." ),
	nifES: "Por favor, escrib챠 un NIF v찼lido.",
	nieES: "Por favor, escrib챠 un NIE v찼lido.",
	cifES: "Por favor, escrib챠 un CIF v찼lido."
} );
return $;
}));
