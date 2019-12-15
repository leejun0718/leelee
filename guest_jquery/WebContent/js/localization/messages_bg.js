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
 * Locale: BG (Bulgarian; 閨?剋均逵??克龜 筠鈞龜克)
 */
$.extend( $.validator.messages, {
	required: "?棘剋筠?棘 筠 鈞逵畇?剋菌龜?筠剋戟棘.",
	remote: "?棘剋?, 勻?勻筠畇筠?筠 極?逵勻龜剋戟逵?逵 ??棘橘戟棘??.",
	email: "?棘剋?, 勻?勻筠畇筠?筠 勻逵剋龜畇筠戟 email.",
	url: "?棘剋?, 勻?勻筠畇筠?筠 勻逵剋龜畇戟棘 URL.",
	date: "?棘剋?, 勻?勻筠畇筠?筠 勻逵剋龜畇戟逵 畇逵?逵.",
	dateISO: "?棘剋?, 勻?勻筠畇筠?筠 勻逵剋龜畇戟逵 畇逵?逵 (ISO).",
	number: "?棘剋?, 勻?勻筠畇筠?筠 勻逵剋龜畇筠戟 戟棘劇筠?.",
	digits: "?棘剋?, 勻?勻筠畇筠?筠 ?逵劇棘 ?龜??龜.",
	creditcard: "?棘剋?, 勻?勻筠畇筠?筠 勻逵剋龜畇筠戟 戟棘劇筠? 戟逵 克?筠畇龜?戟逵 克逵??逵.",
	equalTo: "?棘剋?, 勻?勻筠畇筠?筠 ???逵?逵 ??棘橘戟棘?? 棘?戟棘勻棘.",
	extension: "?棘剋?, 勻?勻筠畇筠?筠 ??棘橘戟棘?? ? 勻逵剋龜畇戟棘 ?逵鈞?龜?筠戟龜筠.",
	maxlength: $.validator.format( "?棘剋?, 勻?勻筠畇筠?筠 戟筠 極棘勻筠?筠 棘? {0} ?龜劇勻棘剋逵." ),
	minlength: $.validator.format( "?棘剋?, 勻?勻筠畇筠?筠 極棘戟筠 {0} ?龜劇勻棘剋逵." ),
	rangelength: $.validator.format( "?棘剋?, 勻?勻筠畇筠?筠 ??棘橘戟棘?? ? 畇?剋菌龜戟逵 劇筠菌畇? {0} 龜 {1} ?龜劇勻棘剋逵." ),
	range: $.validator.format( "?棘剋?, 勻?勻筠畇筠?筠 ??棘橘戟棘?? 劇筠菌畇? {0} 龜 {1}." ),
	max: $.validator.format( "?棘剋?, 勻?勻筠畇筠?筠 ??棘橘戟棘?? 極棘-劇逵剋克逵 龜剋龜 ?逵勻戟逵 戟逵 {0}." ),
	min: $.validator.format( "?棘剋?, 勻?勻筠畇筠?筠 ??棘橘戟棘?? 極棘-均棘剋?劇逵 龜剋龜 ?逵勻戟逵 戟逵 {0}." )
} );
return $;
}));
