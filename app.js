$(document).ready(function(){
	// This Code Just An Example For Make Sure That Garuda Javascript Is Work !...
	// Repository https://github.com/eligrey/FileSaver.js
	// Many Thanks to Eli Grey
	
	_focus("txt_file");
	
	var txt   =  _getById("f_txt");
	var js    =  _getById("f_js");
	var php   =  _getById("f_php");
	var html  =  _getById("f_html");

	function save()
	{
		/**
		 * gQuery
		 * @type {[type]}
		 */
		const filename = _getValById("txt_file");
		const content  = _getValById("txt_content");
		var format_file;

		if (filename==='')
		{
			_writeAlert("msg_warning","Masukkan Nama File  Terlebih Dahulu ( Tanpa Format File ) ! ","warning");
			_focus("txt_file");
			return;
		}
	
		if (txt.checked==true)
		{
			format_file = ".txt";
		}
		else if (js.checked==true)
		{
			format_file = ".js";
		}
		else if (php.checked==true)
		{
			format_file = ".php";
		}
		else if (html.checked==true)
		{
			format_file = ".html";
		}
		else
		{
			_writeAlert("msg_warning","Silahkan Pilih Format File Terlebih Dahulu ","warning");
			return;
		}

		if (content==='')
		{
			_writeAlert("msg_warning","Masukkan Content yang ingin anda Simpan !","warning");
			_focus("txt_content");
			return;
		}
		 /**
		 * End gQuery
		 * @type {[type]}
		 */

		/**
		 * Save To File
		 * @type {Blob}
		 */
		var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
		saveAs(blob, filename+format_file);
		// End Save To File
	}


	_onClick("btn_save",function(){
		save();
	});

	_keyCustom(function(){
		save();
	},_keyCode.insert);


	// Set to input value txt_file
	//_setValue("txt_file","example");

	// Set to input value txt_content
	_setValue("txt_content"
						,'<?php \n $string= "Hello World !"; \n var_dump($string);');

	// checked radio button
	php.checked = true;
});