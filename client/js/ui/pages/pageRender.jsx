const { fetchUser, getUser } = require('logic/getUser');
const { $ } = require('abstract/$');
const React = require('react');
const PageWrapper = require('component/PageWrapper.jsx');
const ReactDom = require('react-dom');
const pages = require('site/pages');

const renderReact = (fullPage)=>{
	ReactDom.render(fullPage, $('#content'))
}

const renderIfLoggedIn = async (pageContent) => {
	const user = await fetchUser();
	if (!user) {
		return pages.landingPage();
	}
	return render(pageContent);
}

const render = async (pageContent) => {
	await fetchUser();
	const fullPage = PageWrapper(pageContent);
	return renderReact(fullPage);
}

module.exports = {
	renderIfLoggedIn,
	render
};