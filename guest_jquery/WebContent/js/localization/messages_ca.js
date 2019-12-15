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
 * Locale: CA (Catalan; catal횪)
 */
$.extend( $.validator.messages, {
	required: "Aquest camp 챕s obligatori.",
	remote: "Si us plau, omple aquest camp.",
	email: "Si us plau, escriu una adre챌a de correu-e v횪lida",
	url: "Si us plau, escriu una URL v횪lida.",
	date: "Si us plau, escriu una data v횪lida.",
	dateISO: "Si us plau, escriu una data (ISO) v횪lida.",
	number: "Si us plau, escriu un n첬mero enter v횪lid.",
	digits: "Si us plau, escriu nom챕s d챠gits.",
	creditcard: "Si us plau, escriu un n첬mero de tarjeta v횪lid.",
	equalTo: "Si us plau, escriu el mateix valor de nou.",
	extension: "Si us plau, escriu un valor amb una extensi처 acceptada.",
	maxlength: $.validator.format( "Si us plau, no escriguis m챕s de {0} caracters." ),
	minlength: $.validator.format( "Si us plau, no escriguis menys de {0} caracters." ),
	rangelength: $.validator.format( "Si us plau, escriu un valor entre {0} i {1} caracters." ),
	range: $.validator.format( "Si us plau, escriu un valor entre {0} i {1}." ),
	max: $.validator.format( "Si us plau, escriu un valor menor o igual a {0}." ),
	min: $.validator.format( "Si us plau, escriu un valor major o igual a {0}." )
} );
return $;
}));
