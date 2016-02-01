<?php

if($search || $genre != -1 || $rating != -1) {
    echo "<h1>You searched for:  $search ";

    if ($genre != -1) {
        echo "in '" . $genre[0]->genre_name . "' ";
    }
    if ($rating != -1) {
        echo "rated '" . $rating[0]->rating_name . "'";
    }
    echo "</h1>";
}
if(count($mydvds) == 0)
{
    echo "<h3>Search returned 0 results</h3>";
    echo '<a href="index.php">Return to Search page</a>';
}
else{
    echo '<table style="width:100%">
    <tr>
        <td>Title:</td>
        <td>Rating:</td>
        <td>Genre:</td>
        <td>Label:</td>
        <td>Sound:</td>
        <td>Format:</td>
    </tr>';
}
?>
    <?php foreach ($mydvds as $dvd) : ?>
        <tr>
            <td>
                <?php echo $dvd->title ?>
            </td>
            <td>
                <?php echo $dvd->rating_name ?>
            </td>
            <td>
                <?php echo $dvd->genre_name ?>
            </td>
            <td>
                <?php echo $dvd->label_name ?>
            </td>
            <td>
                <?php echo $dvd->sound_name ?>
            </td>
            <td>
                <?php echo $dvd->format_name ?>
            </td>
        </tr>
    <?php endforeach; ?>
