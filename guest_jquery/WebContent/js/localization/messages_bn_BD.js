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
 * Locale: bn_BD (Bengali, Bangladesh)
 */
$.extend( $.validator.messages, {
	required: "逝뤲쫯 逝ㅰ┘鋤띭┓逝잀┸ 逝녱━逝뜩쭕逝?쫾誓?,
	remote: "逝뤲쫯 逝ㅰ┘鋤띭┓逝잀┸ 逝졷┸逝?逝뺖┛鋤곟┬誓?,
	email: "逝끶┬鋤곟쬀鋤띭┛逝?逝뺖┛鋤?逝뤲쫾逝잀┸ 逝멘쬊逝욈쫾 逝?쭎逝뉋┣ 逝졷┸逝뺖┥逝ⓣ┥ 逝꿋┸逝뽤쭅逝ⓣⅳ",
	url: "逝끶┬鋤곟쬀鋤띭┛逝?逝뺖┛鋤?逝뤲쫾逝잀┸ 逝멘쬊逝욈쫾 逝꿋┸逝쇸쭕逝?逝╆┸逝ⓣⅳ",
	date: "逝ㅰ┥逝겯┸逝?逝멘쬊逝욈쫾 逝ⓣ쭫誓?,
	dateISO: "逝끶┬鋤곟쬀鋤띭┛逝?逝뺖┛鋤?逝뤲쫾逝잀┸ 逝멘쬊逝욈쫾 (ISO) 逝ㅰ┥逝겯┸逝?逝꿋┸逝뽤쭅逝ⓣⅳ",
	number: "逝끶┬鋤곟쬀鋤띭┛逝?逝뺖┛鋤?逝뤲쫾逝잀┸ 逝멘쬊逝욈쫾 逝ⓣ┏鋤띭━逝?逝꿋┸逝뽤쭅逝ⓣⅳ",
	digits: "逝뤲쫿逝약┬鋤?逝뜩쭅逝㏅쭅 逝멘쫩逝뽤쭕逝?┥ 逝о쭕逝?━逝밝┥逝?逝뺖┛逝?逝?┥逝о쭎誓?,
	creditcard: "逝끶┬鋤곟쬀鋤띭┛逝?逝뺖┛鋤?逝뤲쫾逝잀┸ 逝뺖쭕逝겯쭎逝□┸逝?逝뺖┥逝겯쭕逝□쭎逝?逝멘쬊逝욈쫾 逝ⓣ┏鋤띭━逝?逝꿋┸逝뽤쭅逝ⓣⅳ",
	equalTo: "逝뤲쫾逝?逝?┥逝?逝녱━逝약┛ 逝꿋┸逝뽤쭅逝ⓣⅳ",
	extension: "逝멘쬊逝욈쫾 逝㏅┛逝ⓣ쭎逝?逝ム┥逝뉋┣ 逝녱┴逝꿋쭓逝?逝뺖┛鋤곟┬誓?,
	maxlength: $.validator.format( "{0}逝잀┸逝?逝о쭎逝뜩┸ 逝끶쫾鋤띭┠逝?逝꿋쭎逝뽤┥ 逝?┥逝о쭎 逝ⓣ┥誓? ),
	minlength: $.validator.format( "{0}逝잀┸逝?逝뺖┏ 逝끶쫾鋤띭┠逝?逝꿋쭎逝뽤┥ 逝?┥逝о쭎 逝ⓣ┥誓? ),
	rangelength: $.validator.format( "{0} 逝?쭎逝뺖쭎 {1} 逝잀┸ 逝끶쫾鋤띭┠逝?逝멘┏鋤띭━逝꿋┸逝?逝?┥逝?逝꿋┸逝뽤쭅逝ⓣⅳ" ),
	range: $.validator.format( "{0} 逝?쭎逝뺖쭎 {1} 逝뤲┛ 逝?├鋤띭┓鋤?逝뤲쫾逝잀┸ 逝?┥逝?逝о쭕逝?━逝밝┥逝?逝뺖┛鋤곟┬誓? ),
	max: $.validator.format( "逝끶┬鋤곟쬀鋤띭┛逝?逝뺖┛鋤?{0} 逝о┥ 逝ㅰ┥逝?逝싟┥逝뉋┐鋤?逝뺖┏ 逝?┥逝?逝о쭕逝?━逝밝┥逝?逝뺖┛鋤곟┬誓? ),
	min: $.validator.format( "逝끶┬鋤곟쬀鋤띭┛逝?逝뺖┛鋤?{0} 逝о┥ 逝ㅰ┥逝?逝싟┥逝뉋┐鋤?逝о쭎逝뜩┸ 逝?┥逝?逝о쭕逝?━逝밝┥逝?逝뺖┛鋤곟┬誓? )
} );
return $;
}));
