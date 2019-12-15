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
 * Locale: SR (Serbian; ??極?克龜 ?筠鈞龜克)
 */
$.extend( $.validator.messages, {
	required: "?棘?筠 ?筠 棘閨逵勻筠鈞戟棘.",
	remote: "鬼?筠畇龜?筠 棘勻棘 極棘?筠.",
	email: "叫戟筠?龜?筠 龜?極?逵勻戟? 龜-劇筠?剋 逵畇?筠??.",
	url: "叫戟筠?龜?筠 龜?極?逵勻逵戟 URL.",
	date: "叫戟筠?龜?筠 龜?極?逵勻逵戟 畇逵??劇.",
	dateISO: "叫戟筠?龜?筠 龜?極?逵勻逵戟 畇逵??劇 (ISO).",
	number: "叫戟筠?龜?筠 龜?極?逵勻逵戟 閨?棘?.",
	digits: "叫戟筠?龜?筠 ?逵劇棘 ?龜?筠.",
	creditcard: "叫戟筠?龜?筠 龜?極?逵勻逵戟 閨?棘? 克?筠畇龜?戟筠 克逵??龜?筠.",
	equalTo: "叫戟筠?龜?筠 龜??? 勻?筠畇戟棘?? 極棘戟棘勻棘.",
	extension: "叫戟筠?龜?筠 勻?筠畇戟棘?? ?逵 棘畇均棘勻逵?逵???棘劇 筠克??筠戟鈞龜?棘劇.",
	maxlength: $.validator.format( "叫戟筠?龜?筠 劇逵?筠 棘畇 {0} 克逵?逵克?筠?逵." ),
	minlength: $.validator.format( "叫戟筠?龜?筠 閨逵?筠劇 {0} 克逵?逵克?筠?逵." ),
	rangelength: $.validator.format( "叫戟筠?龜?筠 勻?筠畇戟棘?? 畇?均逵?克? 龜鈞劇筠?? {0} 龜 {1} 克逵?逵克?筠?逵." ),
	range: $.validator.format( "叫戟筠?龜?筠 勻?筠畇戟棘?? 龜鈞劇筠?? {0} 龜 {1}." ),
	max: $.validator.format( "叫戟筠?龜?筠 勻?筠畇戟棘?? 劇逵?? 龜剋龜 ?筠畇戟逵克? {0}." ),
	min: $.validator.format( "叫戟筠?龜?筠 勻?筠畇戟棘?? 勻筠?? 龜剋龜 ?筠畇戟逵克? {0}." ),
	step: $.validator.format( "叫戟筠?龜?筠 勻?筠畇戟棘?? 克棘?逵 ?筠 ?劇戟棘菌逵克 閨?棘?逵 {0}." )
} );
return $;
}));
