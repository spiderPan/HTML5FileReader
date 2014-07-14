jQuery(document).ready(function ($) {
	var _submit = $('#submit'),
		_resultEle = $('#result'),
		_fileEle = document.getElementById('exampleInputFile'),
		_preview = $('.preview');

	_submit.on('click', function (evt) {
		if (checkReadApi()) {
			evt.preventDefault();
			if (evt.target.tagName.toLowerCase() == 'button') {
				var startByte = evt.target.getAttribute('data-startbyte');
				var endByte = evt.target.getAttribute('data-endbyte');
				readBlob(startByte, endByte);
			}
		}

	});

	function checkReadApi() {
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			return true;
		} else {
			return false;
		}
	}

	function readBlob(opt_startByte, opt_stopByte) {

		var files = _fileEle.files;
		if (!files.length) {
			alert('Please select a file!');
			return;
		}

		var file = files[0];
		var start = parseInt(opt_startByte) || 0;
		var stop = parseInt(opt_stopByte) || file.size - 1;

		var reader = new FileReader();

		// If we use onloadend, we need to check the readyState.
		reader.onloadend = function (evt) {
			if (evt.target.readyState == FileReader.DONE) { // DONE == 2
				var _formatted = formatBlob(evt.target.result);
				_resultEle.val(_formatted);
				_preview.html(_formatted);
			}
		};

		var blob = file.slice(start, stop + 1);
		reader.readAsBinaryString(blob);
	}

	function formatBlob(string) {
		var _title;
		var stringArr = string.split("\n");

		for (var i = 0; i < stringArr.length; i++) {
			var stringRow = stringArr[i].split(',');
			if (0 == i) {
				_title = stringRow[0];
				var newString = '<h1>' + _title + '</h1>';
			}

			for (var j = 0; j < stringRow.length; j++) {

			}

		}

		console.log(stringArr);

		newString += '<table class="table table-hover"><thead><tr></tr></thead><tbody></tbody></table>';

		return newString;
	}

});
