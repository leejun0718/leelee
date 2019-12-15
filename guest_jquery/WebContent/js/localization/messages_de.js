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
 * Locale: DE (German, Deutsch)
 */
$.extend( $.validator.messages, {
	required: "Dieses Feld ist ein Pflichtfeld.",
	maxlength: $.validator.format( "Geben Sie bitte maximal {0} Zeichen ein." ),
	minlength: $.validator.format( "Geben Sie bitte mindestens {0} Zeichen ein." ),
	rangelength: $.validator.format( "Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein." ),
	email: "Geben Sie bitte eine g체ltige E-Mail-Adresse ein.",
	url: "Geben Sie bitte eine g체ltige URL ein.",
	date: "Geben Sie bitte ein g체ltiges Datum ein.",
	number: "Geben Sie bitte eine Nummer ein.",
	digits: "Geben Sie bitte nur Ziffern ein.",
	equalTo: "Wiederholen Sie bitte denselben Wert.",
	range: $.validator.format( "Geben Sie bitte einen Wert zwischen {0} und {1} ein." ),
	max: $.validator.format( "Geben Sie bitte einen Wert kleiner oder gleich {0} ein." ),
	min: $.validator.format( "Geben Sie bitte einen Wert gr철횩er oder gleich {0} ein." ),
	creditcard: "Geben Sie bitte eine g체ltige Kreditkarten-Nummer ein.",
	remote: "Korrigieren Sie bitte dieses Feld.",
	dateISO: "Geben Sie bitte ein g체ltiges Datum ein (ISO-Format).",
	step: $.validator.format( "Geben Sie bitte ein Vielfaches von {0} ein." ),
	maxWords: $.validator.format( "Geben Sie bitte {0} W철rter oder weniger ein." ),
	minWords: $.validator.format( "Geben Sie bitte mindestens {0} W철rter ein." ),
	rangeWords: $.validator.format( "Geben Sie bitte zwischen {0} und {1} W철rtern ein." ),
	accept: "Geben Sie bitte einen Wert mit einem g체ltigen MIME-Typ ein.",
	alphanumeric: "Geben Sie bitte nur Buchstaben (keine Umlaute), Zahlen oder Unterstriche ein.",
	bankaccountNL: "Geben Sie bitte eine g체ltige Kontonummer ein.",
	bankorgiroaccountNL: "Geben Sie bitte eine g체ltige Bank- oder Girokontonummer ein.",
	bic: "Geben Sie bitte einen g체ltigen BIC-Code ein.",
	cifES: "Geben Sie bitte eine g체ltige CIF-Nummer ein.",
	cpfBR: "Geben Sie bitte eine g체ltige CPF-Nummer ein.",
	creditcardtypes: "Geben Sie bitte eine g체ltige Kreditkarten-Nummer ein.",
	currency: "Geben Sie bitte eine g체ltige W채hrung ein.",
	extension: "Geben Sie bitte einen Wert mit einer g체ltigen Erweiterung ein.",
	giroaccountNL: "Geben Sie bitte eine g체ltige Girokontonummer ein.",
	iban: "Geben Sie bitte eine g체ltige IBAN ein.",
	integer:  "Geben Sie bitte eine positive oder negative Nicht-Dezimalzahl ein.",
	ipv4: "Geben Sie bitte eine g체ltige IPv4-Adresse ein.",
	ipv6: "Geben Sie bitte eine g체ltige IPv6-Adresse ein.",
	lettersonly: "Geben Sie bitte nur Buchstaben ein.",
	letterswithbasicpunc: "Geben Sie bitte nur Buchstaben oder Interpunktion ein.",
	mobileNL: "Geben Sie bitte eine g체ltige Handynummer ein.",
	mobileUK: "Geben Sie bitte eine g체ltige Handynummer ein.",
	netmask:  "Geben Sie bitte eine g체ltige Netzmaske ein.",
	nieES: "Geben Sie bitte eine g체ltige NIE-Nummer ein.",
	nifES: "Geben Sie bitte eine g체ltige NIF-Nummer ein.",
	nipPL: "Geben Sie bitte eine g체ltige NIP-Nummer ein.",
	notEqualTo: "Geben Sie bitte einen anderen Wert ein. Die Werte d체rfen nicht gleich sein.",
	nowhitespace: "Kein Leerzeichen bitte.",
	pattern: "Ung체ltiges Format.",
	phoneNL: "Geben Sie bitte eine g체ltige Telefonnummer ein.",
	phonesUK: "Geben Sie bitte eine g체ltige britische Telefonnummer ein.",
	phoneUK: "Geben Sie bitte eine g체ltige Telefonnummer ein.",
	phoneUS: "Geben Sie bitte eine g체ltige Telefonnummer ein.",
	postalcodeBR: "Geben Sie bitte eine g체ltige brasilianische Postleitzahl ein.",
	postalCodeCA: "Geben Sie bitte eine g체ltige kanadische Postleitzahl ein.",
	postalcodeIT: "Geben Sie bitte eine g체ltige italienische Postleitzahl ein.",
	postalcodeNL: "Geben Sie bitte eine g체ltige niederl채ndische Postleitzahl ein.",
	postcodeUK: "Geben Sie bitte eine g체ltige britische Postleitzahl ein.",
	require_from_group: $.validator.format( "F체llen Sie bitte mindestens {0} dieser Felder aus." ),
	skip_or_fill_minimum: $.validator.format( "횥berspringen Sie bitte diese Felder oder f체llen Sie mindestens {0} von ihnen aus." ),
	stateUS: "Geben Sie bitte einen g체ltigen US-Bundesstaat ein.",
	strippedminlength: $.validator.format( "Geben Sie bitte mindestens {0} Zeichen ein." ),
	time: "Geben Sie bitte eine g체ltige Uhrzeit zwischen 00:00 und 23:59 ein.",
	time12h: "Geben Sie bitte eine g체ltige Uhrzeit im 12-Stunden-Format ein.",
	vinUS: "Die angegebene Fahrzeugidentifikationsnummer (VIN) ist ung체ltig.",
	zipcodeUS: "Die angegebene US-Postleitzahl ist ung체ltig.",
	ziprange: "Ihre Postleitzahl muss im Bereich 902xx-xxxx bis 905xx-xxxx liegen."
} );
return $;
}));
