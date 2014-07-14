<?php
if ( isset( $_FILES ) && ! empty( $_FILES ) ) {
	echo var_dump( $_FILES );
}
?>

<!doctype html>
<html>
<head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="./readFile.js"></script>

</head>
<body>
<form role="form" method="post" enctype="multipart/form-data">
	<div class="form-group">
		<label for="exampleInputFile">File input</label>
		<input type="file" id="exampleInputFile" name="new-csv">

		<p class="help-block">Example block-level help text here.</p>
	</div>

	<button id="submit" class="btn btn-default">Submit</button>
	<textarea class="form-control" id="result" rows="30"></textarea>
</form>
<div class="preview">
</div>

</body>
</html>
