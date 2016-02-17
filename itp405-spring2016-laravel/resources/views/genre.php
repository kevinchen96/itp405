<?php echo "<h2>" . $genre["genre_name"] . "</h2>" ?>
   <table style="width:100%">
    <tr>
        <td>Title:</td>
        <td>Rating:</td>
        <td>Genre:</td>
        <td>Label:</td>
    </tr>

<?php foreach ($dvds as $dvd) : ?>
    <tr>
        <td>
            <?php echo $dvd->title ?>
        </td>
        <td>
            <?php echo $dvd->rating["rating_name"] ?>
        </td>
        <td>
            <?php echo $genre["genre_name"] ?>
        </td>
        <td>
            <?php echo $dvd->label["label_name"] ?>
        </td>
    </tr>
<?php endforeach; ?>
