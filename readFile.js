jQuery(document).ready(function ($) {
	var _submit = $('#submit'),
		_resultEle = $('#result'),
		_fileEle = document.getElementById('exampleInputFile');

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
				_resultEle.val(evt.target.result);

			}
		};

		var blob = file.slice(start, stop + 1);
		reader.readAsBinaryString(blob);
	}

});
