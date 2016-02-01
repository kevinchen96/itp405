<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>DVD Search</title>
</head>
<body>
<form action="/" method="get">
    DVD: <input type="text" name="title">
    <br>
    Genre:
    <select name="genre_id">
        <option value="-1">All</option>
    <?php foreach ($genres as $genre) : ?>
        <?php echo "<option value='" . $genre->id . "'>" . $genre->genre_name . "</option>"; ?>
    <?php endforeach; ?>
    </select>
    Rating:
    <select name="rating_id">
        <option value="-1">All</option>
        <?php foreach ($ratings as $rating) : ?>
            <?php echo "<option value='" . $rating->id . "'>" . $rating->rating_name . "</option>"; ?>
        <?php endforeach; ?>
    </select>
    <input type="submit" name="submit" value="Search">
</form>

</body>
</html>