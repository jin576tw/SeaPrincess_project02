/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	baseurl = 'https://'+window.location.hostname;
	config.filebrowserBrowseUrl = baseurl+'/includes/ckfinder/ckfinder.html';
	config.filebrowserImageBrowseUrl = baseurl+'/includes/ckfinder/ckfinder.html?Type=Images';
	config.filebrowserFlashBrowseUrl = baseurl+'/includes/ckfinder/ckfinder.html?Type=Flash';
	config.filebrowserUploadUrl = baseurl+'/includes/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files'; //可上傳一般檔案
	config.filebrowserImageUploadUrl = baseurl+'/includes/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';//可上傳圖檔
	config.filebrowserFlashUploadUrl = baseurl+'/includes/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';//可上傳Flash檔案
};
