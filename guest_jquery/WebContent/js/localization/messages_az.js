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
 * Locale: Az (Azeri; az?rbaycan dili)
 */
$.extend( $.validator.messages, {
	required: "Bu xana m체tl?q doldurulmal캇d캇r.",
	remote: "Z?hm?t olmasa, d체zg체n m?na daxil edin.",
	email: "Z?hm?t olmasa, d체zg체n elektron po챌t daxil edin.",
	url: "Z?hm?t olmasa, d체zg체n URL daxil edin.",
	date: "Z?hm?t olmasa, d체zg체n tarix daxil edin.",
	dateISO: "Z?hm?t olmasa, d체zg체n ISO formatl캇 tarix daxil edin.",
	number: "Z?hm?t olmasa, d체zg체n r?q?m daxil edin.",
	digits: "Z?hm?t olmasa, yaln캇z r?q?m daxil edin.",
	creditcard: "Z?hm?t olmasa, d체zg체n kredit kart n철mr?sini daxil edin.",
	equalTo: "Z?hm?t olmasa, eyni m?nan캇 bir daha daxil edin.",
	extension: "Z?hm?t olmasa, d체zg체n geni힊l?nm?y? malik fayl캇 se챌in.",
	maxlength: $.validator.format( "Z?hm?t olmasa, {0} simvoldan 챌ox olmayaraq daxil edin." ),
	minlength: $.validator.format( "Z?hm?t olmasa, {0} simvoldan az olmayaraq daxil edin." ),
	rangelength: $.validator.format( "Z?hm?t olmasa, {0} - {1} aral캇휓캇nda uzunlu휓a malik simvol daxil edin." ),
	range: $.validator.format( "Z?hm?t olmasa, {0} - {1} aral캇휓캇nda r?q?m daxil edin." ),
	max: $.validator.format( "Z?hm?t olmasa, {0} v? ondan ki챌ik r?q?m daxil edin." ),
	min: $.validator.format( "Z?hm?t olmasa, {0} v? ondan b철y체k r?q?m daxil edin" )
} );
return $;
}));
