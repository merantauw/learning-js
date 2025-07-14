<?php
// Получаем директорию текущего файла
$dir = __DIR__;

// Получаем список всех папок в текущей директории
$folders = array_filter(scandir($dir), function($item) use ($dir) {
	return is_dir($dir . DIRECTORY_SEPARATOR . $item) && $item !== '.' && $item !== '..';
});

// Фильтруем только те папки, в которых есть index.php
$validFolders = array_filter($folders, function($folder) use ($dir) {
	return file_exists("$dir/$folder/index.php");
});
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Общая структура</title>
    <style>
        h1{
            text-align: center;
        }
        table {
            width: 60%;
            border-collapse: collapse;
            margin: 20px auto;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ccc;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
<h1>Список уроков</h1>
<table>
    <tr>
        <th>Название папки</th>
        <th>Ссылка</th>
    </tr>
	<?php foreach ($validFolders as $folder): ?>
        <tr>
            <td><?= htmlspecialchars($folder) ?></td>
            <td><a href="<?= htmlspecialchars($folder) ?>/index.php" target="_blank">Перейти</a></td>
        </tr>
	<?php endforeach; ?>
</table>
</body>
</html>