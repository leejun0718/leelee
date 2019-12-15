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
 * Locale: HY_AM (Armenian; 卵蘿蘭樂?樂鸞 酪樂洛辣?)
 */
$.extend( $.validator.messages, {
	required: "?蘿?纜蘿邏諾? 酪?蘿?爛蘿鸞 邏蘿剌纜",
	remote: "?樂?爛辣?丹樂? 瀾諾剌纜 蘿?落樂?珞",
	email: "?樂?爛辣?丹樂? 籃蘿籃樂? 烙酪樂亂纜?辣鸞蘿蘭諾鸞 ?辣濫纜諾 卵蘿濫?樂",
	url: "?樂?爛辣?丹樂? 籃蘿籃樂? URL",
	date: "?樂?爛辣?丹樂? 籃蘿籃樂? 蘿爛濫蘿絡諾籃",
	dateISO: "?樂?爛辣?丹樂? ISO ?辣?爛蘿纜辣籃 籃蘿籃樂? 蘿爛濫蘿絡諾籃?",
	number: "?樂?爛辣?丹樂? 絡諾籃",
	digits: "?樂?爛辣?丹樂? 爛諾蘿蘭鸞 絡籃樂?",
	creditcard: "?樂?爛辣?丹樂? 瀾諾剌纜 螺蘿鸞亂蘿蘭諾鸞 ?蘿?纜諾 卵蘿爛蘿?",
	equalTo: "?樂?爛辣?丹樂? 爛諾?鸞辣?鸞 蘿?落樂?珞 ?濫 爛樂亂 蘿鸞裸蘿爛",
	extension: "毒鸞纜?樂? 瀾諾剌纜 珞鸞邏酪蘿鸞辣?爛辣籃 ?蘿蘭酪",
	maxlength: $.validator.format( "?樂?爛辣?丹樂? 辣嵐 蘿籃樂酪 ?蘿鸞 {0} 鸞諾剌" ),
	minlength: $.validator.format( "?樂?爛辣?丹樂? 辣嵐 擥蘿亂蘿濫 ?蘿鸞 {0} 鸞諾剌" ),
	rangelength: $.validator.format( "?樂?爛辣?丹樂? {0}?諾? {1} 樂?亂蘿?辣?絡蘭蘿爛螺 蘿?落樂?" ),
	range: $.validator.format( "?樂?爛辣?丹樂? 絡諾籃 {0}?諾? {1} 爛諾攬蘿亂蘿蘭?辣?爛" ),
	max: $.validator.format( "?樂?爛辣?丹樂? 絡諾籃, 辣?珞 ?辣?? 亂蘿爛 卵蘿籃蘿濫蘿? 烙혻{0}?諾鸞" ),
	min: $.validator.format( "?樂?爛辣?丹樂? 絡諾籃, 辣?珞 爛樂丹 亂蘿爛 卵蘿籃蘿濫蘿? 烙 {0}?諾鸞" )
} );
return $;
}));
