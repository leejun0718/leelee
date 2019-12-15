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
 * Locale: SK (Slovak; sloven훾ina, slovensk첵 jazyk)
 */
$.extend( $.validator.messages, {
	required: "Povinn챕 zada큐.",
	maxlength: $.validator.format( "Maxim찼lne {0} znakov." ),
	minlength: $.validator.format( "Minim찼lne {0} znakov." ),
	rangelength: $.validator.format( "Minim찼lne {0} a maxim찼lne {1} znakov." ),
	email: "E-mailov찼 adresa mus챠 by큐 platn찼.",
	url: "URL mus챠 by큐 platn찼.",
	date: "Mus챠 by큐 d찼tum.",
	number: "Mus챠 by큐 훾챠slo.",
	digits: "M척탑e obsahova큐 iba 훾챠slice.",
	equalTo: "Dve hodnoty sa musia rovna큐.",
	range: $.validator.format( "Mus챠 by큐 medzi {0} a {1}." ),
	max: $.validator.format( "Nem척탑e by큐 viac ako {0}." ),
	min: $.validator.format( "Nem척탑e by큐 menej ako {0}." ),
	creditcard: "훻챠slo platobnej karty mus챠 by큐 platn챕.",
	step: $.validator.format( "Mus챠 by큐 n찼sobkom 훾챠sla {0}." )
} );
return $;
}));
