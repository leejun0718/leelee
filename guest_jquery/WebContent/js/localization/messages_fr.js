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
 * Locale: FR (French; fran챌ais)
 */
$.extend( $.validator.messages, {
	required: "Ce champ est obligatoire.",
	remote: "Veuillez corriger ce champ.",
	email: "Veuillez fournir une adresse 챕lectronique valide.",
	url: "Veuillez fournir une adresse URL valide.",
	date: "Veuillez fournir une date valide.",
	dateISO: "Veuillez fournir une date valide (ISO).",
	number: "Veuillez fournir un num챕ro valide.",
	digits: "Veuillez fournir seulement des chiffres.",
	creditcard: "Veuillez fournir un num챕ro de carte de cr챕dit valide.",
	equalTo: "Veuillez fournir encore la m챗me valeur.",
	notEqualTo: "Veuillez fournir une valeur diff챕rente, les valeurs ne doivent pas 챗tre identiques.",
	extension: "Veuillez fournir une valeur avec une extension valide.",
	maxlength: $.validator.format( "Veuillez fournir au plus {0} caract챔res." ),
	minlength: $.validator.format( "Veuillez fournir au moins {0} caract챔res." ),
	rangelength: $.validator.format( "Veuillez fournir une valeur qui contient entre {0} et {1} caract챔res." ),
	range: $.validator.format( "Veuillez fournir une valeur entre {0} et {1}." ),
	max: $.validator.format( "Veuillez fournir une valeur inf챕rieure ou 챕gale 횪 {0}." ),
	min: $.validator.format( "Veuillez fournir une valeur sup챕rieure ou 챕gale 횪 {0}." ),
	step: $.validator.format( "Veuillez fournir une valeur multiple de {0}." ),
	maxWords: $.validator.format( "Veuillez fournir au plus {0} mots." ),
	minWords: $.validator.format( "Veuillez fournir au moins {0} mots." ),
	rangeWords: $.validator.format( "Veuillez fournir entre {0} et {1} mots." ),
	letterswithbasicpunc: "Veuillez fournir seulement des lettres et des signes de ponctuation.",
	alphanumeric: "Veuillez fournir seulement des lettres, nombres, espaces et soulignages.",
	lettersonly: "Veuillez fournir seulement des lettres.",
	nowhitespace: "Veuillez ne pas inscrire d'espaces blancs.",
	ziprange: "Veuillez fournir un code postal entre 902xx-xxxx et 905-xx-xxxx.",
	integer: "Veuillez fournir un nombre non d챕cimal qui est positif ou n챕gatif.",
	vinUS: "Veuillez fournir un num챕ro d'identification du v챕hicule (VIN).",
	dateITA: "Veuillez fournir une date valide.",
	time: "Veuillez fournir une heure valide entre 00:00 et 23:59.",
	phoneUS: "Veuillez fournir un num챕ro de t챕l챕phone valide.",
	phoneUK: "Veuillez fournir un num챕ro de t챕l챕phone valide.",
	mobileUK: "Veuillez fournir un num챕ro de t챕l챕phone mobile valide.",
	strippedminlength: $.validator.format( "Veuillez fournir au moins {0} caract챔res." ),
	email2: "Veuillez fournir une adresse 챕lectronique valide.",
	url2: "Veuillez fournir une adresse URL valide.",
	creditcardtypes: "Veuillez fournir un num챕ro de carte de cr챕dit valide.",
	ipv4: "Veuillez fournir une adresse IP v4 valide.",
	ipv6: "Veuillez fournir une adresse IP v6 valide.",
	require_from_group: $.validator.format( "Veuillez fournir au moins {0} de ces champs." ),
	nifES: "Veuillez fournir un num챕ro NIF valide.",
	nieES: "Veuillez fournir un num챕ro NIE valide.",
	cifES: "Veuillez fournir un num챕ro CIF valide.",
	postalCodeCA: "Veuillez fournir un code postal valide."
} );
return $;
}));
