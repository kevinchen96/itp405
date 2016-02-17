<?php if (session('success')) : ?>
    <p style="background:green">Dvd was successfully added.</p>
<?php endif ?>

<?php if (count($errors) > 0) : ?>
    <ul>
        <?php foreach ($errors->all() as $error) : ?>
            <li style="color:red">
                <?php echo $error ?>
            </li>
        <?php endforeach ?>
    </ul>
<?php endif ?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>DVD Insert</title>
</head>
<body>
<form action="/addDvd" method="post">
    <?php echo csrf_field() ?>
    DVD: <input type="text" name="title">
    <br>
    Format:
    <select name="format_id">
        <?php foreach ($formats as $format) : ?>
            <?php echo "<option value='" . $format->id . "'>" . $format->format_name . "</option>"; ?>
        <?php endforeach; ?>
    </select>
    Genre:
    <select name="genre_id">
        <?php foreach ($genres as $genre) : ?>
            <?php echo "<option value='" . $genre->id . "'>" . $genre->genre_name . "</option>"; ?>
        <?php endforeach; ?>
    </select>
    Label:
    <select name="label_id">
        <?php foreach ($labels as $label) : ?>
            <?php echo "<option value='" . $label->id . "'>" . $label->label_name . "</option>"; ?>
        <?php endforeach; ?>
    </select>
    Genre:
    <select name="rating_id">
        <?php foreach ($ratings as $rating) : ?>
            <?php echo "<option value='" . $rating->id . "'>" . $rating->rating_name . "</option>"; ?>
        <?php endforeach; ?>
    </select>
    Genre:
    <select name="sound_id">
        <?php foreach ($sounds as $sound) : ?>
            <?php echo "<option value='" . $sound->id . "'>" . $sound->sound_name . "</option>"; ?>
        <?php endforeach; ?>
    </select>
    <input type="submit" name="submit" value="Add">
</form>

</body>
</html>