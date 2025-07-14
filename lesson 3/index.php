<!doctype html>
<html lang=ru>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS-генератор углов</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="block1">
    <p> Верхний левый угол
        <input type="range" id="rtl" min="0" max="100" value="0" oninput="changeBorderRadius()">
        <input type="text" id="ttl" value="0" >
    </p>
    <p> Верхний правый угол
        <input type="range" id="rtr" min="0" max="100" value="0" oninput="changeBorderRadius()">
        <input type="text" id="ttr" value="0">
    </p>
    <p> Нижний правый угол
        <input type="range" id="rbr" min="0" max="100" value="0" oninput="changeBorderRadius()">
        <input type="text" id="tbr" value="0">
    </p>
    <p> Нижний левый угол
        <input type="range" id="rbl" min="0" max="100" value="0" oninput="changeBorderRadius()">
        <input type="text" id="tbl" value="0">
    </p>
</div>
<div id="block"></div>

<?php include_once('../chunks/footer.php') ?>
<script src="script.js"></script>
</body>
</html>