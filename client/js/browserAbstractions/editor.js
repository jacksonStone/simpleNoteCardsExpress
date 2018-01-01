const { $ } = require('./$');

const editorConfig = {
	customConfig: '',
	toolbar: [
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline'] },
    { name: 'paragraph', groups: [ 'list' ], items: [ 'NumberedList', 'BulletedList'] },
	],
	removePlugins : 'elementspath',
	uiColor: '#ffffff',
};


function initEditor(elementId, startingContent) {
	const editor = CKEDITOR.replace(elementId, editorConfig);
	CKEDITOR.instances[elementId].setData(startingContent);
}

function getEditorData(elementId) {
	return CKEDITOR.instances[elementId].getData();
}

function unrenderEditor(elementId) {
	return CKEDITOR.instances[elementId].destroy();
}


function doesContentOverflow(elementId) {
	const ckeditorElement = $('#' + elementId).nextSibling;
	const ckeditorContents = $(ckeditorElement, '.cke_editable');
	const fullHeight = ckeditorContents.scrollHeight;
	const clientHeight = ckeditorContents.clientHeight;
	return fullHeight > clientHeight
}

exports.initEditor = initEditor;
exports.getEditorData = getEditorData;
exports.unrenderEditor = unrenderEditor;
exports.doesContentOverflow = doesContentOverflow;
