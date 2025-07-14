<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Работа с select</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!--<select name="" id="mySelect" onchange="fun1()">
	<option value="">Apple</option>
	<option value="">Orange</option>
	<option value="">Pineapple</option>
	<option value="">Banana</option>
</select>-->

<input id="range" type="range" min="0" max="100" step="2" oninput="calculate()">
<div id="test"></div>


<!--<input id="i1" type="text">-->

<!--<p id="text"></p>-->

<?php include_once('../chunks/footer.php') ?>
<script src="script.js"></script>
</body>
</html>