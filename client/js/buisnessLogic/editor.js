const editorConfig = {
	customConfig: '',
	toolbar: [
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList'] },
	],
	removePlugins : 'elementspath',
	uiColor: '#ffffff',
	fontSize:"35px",
	height: '40%',
	contentsCss: "/css/ckeditor.css"
};


function initEditor(elementId) {
	CKEDITOR.replace(elementId, editorConfig);
}

function getEditorData(elementId) {
	return CKEDITOR.instances[elementId].getData();
}

exports.initEditor = initEditor;
exports.getEditorData = getEditorData;
