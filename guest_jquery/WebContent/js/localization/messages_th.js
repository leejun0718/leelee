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
 * Locale: TH (Thai; 仙꾝툠錫?
 */
$.extend( $.validator.messages, {
	required: "仙귖툤錫｀툝錫｀린錫싟만",
	remote: "仙귖툤錫｀툝仙곟툈仙됢퉬錫귖퉫錫ム퉱錫뽤많錫곟툞仙됢릎錫?,
	email: "仙귖툤錫｀툝錫｀린錫싟만錫쀠링仙댽릎錫№많仙댽릎錫듀?錫□른仙뚟툠錫듀퉰錫뽤많錫곟툞仙됢릎錫?,
	url: "仙귖툤錫｀툝錫｀린錫싟만 URL 錫쀠링仙댽툟錫밝툈錫뺖퉱錫?툏",
	date: "仙귖툤錫｀툝錫｀린錫싟만錫㏅릴錫쇸툠錫듀퉰 錫쀠링仙댽툟錫밝툈錫뺖퉱錫?툏",
	dateISO: "仙귖툤錫｀툝錫｀린錫싟만錫㏅릴錫쇸툠錫듀퉰 錫쀠링仙댽툟錫밝툈錫뺖퉱錫?툏 (錫｀린錫싟툣 ISO).",
	number: "仙귖툤錫｀툝錫｀린錫싟만錫쀠릅錫쇸릿錫№륫錫쀠링仙댽툟錫밝툈錫뺖퉱錫?툏",
	digits: "仙귖툤錫｀툝錫｀린錫싟만錫댽립錫쇸름錫쇸?錫뺖퉯錫□툠錫듀퉰錫뽤많錫곟툞仙됢릎錫?,
	creditcard: "仙귖툤錫｀툝錫｀린錫싟만錫｀릊錫긍릉錫싟릴錫뺖르仙錫꾝르錫붲릿錫뺖툠錫듀퉰錫뽤많錫곟툞仙됢릎錫?,
	equalTo: "仙귖툤錫｀툝錫｀린錫싟만錫꾝퉰錫꿋?錫붲릿錫□릎錫듀툈錫꾝르錫긍퉱錫?,
	extension: "仙귖툤錫｀툝錫｀린錫싟만錫꾝퉰錫꿋툠錫듀퉰錫□링錫む퉰錫㏅툢錫귖륭錫꿋륭錫쀠링仙댽툟錫밝툈錫뺖퉱錫?툏",
	maxlength: $.validator.format( "仙귖툤錫｀툝錫?륭仙댽림錫｀린錫싟만錫꾝퉰錫꿋툠錫듀퉰錫№림錫㏅툈錫㏅퉰錫?{0} 錫?릴錫곟툊錫｀린" ),
	minlength: $.validator.format( "仙귖툤錫｀툝錫?륭仙댽림錫｀린錫싟만錫꾝퉰錫꿋툠錫듀퉰錫む릴仙됢툢錫곟름仙댽림 {0} 錫?릴錫곟툊錫｀린" ),
	rangelength: $.validator.format( "仙귖툤錫｀툝錫?륭仙댽림錫｀린錫싟만錫꾝퉰錫꿋툌錫㏅림錫□륭錫꿋름錫｀린錫ム름仙댽림錫?{0} 錫뽤마錫?{1} 錫?릴錫곟툊錫｀린" ),
	range: $.validator.format( "仙귖툤錫｀툝錫｀린錫싟만錫꾝퉰錫꿋르錫겯릊錫㏅퉰錫꿋툏 {0} 仙곟른錫?{1}" ),
	max: $.validator.format( "仙귖툤錫｀툝錫｀린錫싟만錫꾝퉰錫꿋툢仙됢릎錫№툈錫㏅퉰錫꿋릊錫｀막錫??錫쀠퉰錫꿋툈錫긍툣 {0}" ),
	min: $.validator.format( "仙귖툤錫｀툝錫｀린錫싟만錫꾝퉰錫꿋륫錫꿋툈錫곟름仙댽림錫ム르錫룅릎仙錫쀠퉰錫꿋툈錫긍툣 {0}" )
} );
return $;
}));
