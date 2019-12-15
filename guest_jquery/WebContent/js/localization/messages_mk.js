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
 * Locale: MK (Macedonian; 劇逵克筠畇棘戟?克龜 ?逵鈞龜克)
 */
$.extend( $.validator.messages, {
	required: "?棘剋筠?棘 筠 鈞逵畇棘剋菌龜?筠剋戟棘.",
	remote: "?棘極?逵勻筠?筠 均棘 棘勻逵 極棘剋筠",
	email: "?戟筠?筠?筠 極?逵勻龜剋戟逵 e-mail 逵畇?筠?逵",
	url: "?戟筠?筠?筠 極?逵勻龜剋筠戟 URL.",
	date: "?戟筠?筠?筠 極?逵勻龜剋筠戟 畇逵??劇",
	dateISO: "?戟筠?筠?筠 極?逵勻龜剋筠戟 畇逵??劇 (ISO).",
	number: "?戟筠?筠?筠 極?逵勻龜剋筠戟 閨?棘?.",
	digits: "?戟筠?筠?筠 ?逵劇棘 閨?棘?克龜.",
	creditcard: "?戟筠?筠?筠 極?逵勻龜剋筠戟 閨?棘? 戟逵 克?筠畇龜?戟逵?逵 克逵??龜?克逵.",
	equalTo: "?戟筠?筠?筠 ?逵 龜??逵?逵 勻?筠畇戟棘?? 極棘勻?棘?戟棘.",
	extension: "?戟筠?筠?筠 勻?筠畇戟棘?? ?棘 ?棘棘畇勻筠?戟逵 筠克??筠戟鈞龜?逵.",
	maxlength: $.validator.format( "?戟筠?筠?筠 劇逵克?龜劇逵剋戟棘 {0} 鈞戟逵?龜." ),
	minlength: $.validator.format( "?戟筠?筠?筠 閨逵?筠劇 {0} 鈞戟逵?龜." ),
	rangelength: $.validator.format( "?戟筠?筠?筠 勻?筠畇戟棘?? ?棘 畇棘剋菌龜戟逵 極棘劇筠?? {0} 龜 {1} 鈞戟逵?龜." ),
	range: $.validator.format( "?戟筠?筠?筠 勻?筠畇戟棘?? 極棘劇筠?? {0} 龜 {1}." ),
	max: $.validator.format( "?戟筠?筠?筠 勻?筠畇戟棘?? 極棘劇逵剋逵 龜剋龜 筠畇戟逵克勻逵 戟逵 {0}." ),
	min: $.validator.format( "?戟筠?筠?筠 勻?筠畇戟棘?? 極棘均棘剋筠劇逵 龜剋龜 筠畇戟逵克勻逵 戟逵 {0}" )
} );
return $;
}));
