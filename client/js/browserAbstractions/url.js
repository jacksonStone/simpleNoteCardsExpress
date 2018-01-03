const getPageParams = ()=>{
	const params = window.location.search;
	if(!params || params.length < 2) return {};
	const withoutQuestionMark = params.substring(1);
	const paramPairs = withoutQuestionMark.split('&');
	const paramsObj = {};
	for(let i = 0; i < paramPairs.length; i++) {
		const paramPair = paramPairs[i];
		const paramPairParts = paramPair.split('=');
		paramsObj[paramPairParts[0]] = paramPairParts[1];
	}
	return paramsObj;
}

const getParam = (param)=>{
	return getPageParams()[param];
}

module.exports = {
	getParam
};