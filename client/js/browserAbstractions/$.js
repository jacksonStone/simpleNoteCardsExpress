exports.$ = function(){
	return document.querySelector.apply(document, arguments);
}