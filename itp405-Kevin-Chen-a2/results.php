<?php

if(!isset($_GET['title'])){
    header('Location: index.php');
    exit();
}

$host = 'itp460.usc.edu';
$dbname = 'dvd';
$user = 'student';
$pw = 'ttrojan';
$title = $_GET['title'];

$pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pw);


$sql = "SELECT title, genre_name, format_name, rating_name
        FROM dvds
        INNER JOIN genres
        ON dvds.genre_id = genres.id
        INNER JOIN formats
        ON dvds.format_id = formats.id
        INNER JOIN ratings
        ON dvds.rating_id = ratings.id
        WHERE title LIKE ?";

$statement = $pdo->prepare($sql);
$like = '%' . $title . '%';
$statement->bindParam(1, $like);
$statement->execute();

$dvds = $statement->fetchAll(PDO::FETCH_OBJ);
?>

<h1>You searched for '<?php echo $title ?>':</h1>
<table style="width:100%">
    <tr>
        <td>Title:</td>
        <td>Genre:</td>
        <td>Format:</td>
        <td>Rating:</td>
    </tr>
<?php foreach ($dvds as $dvd) : ?>
<tr>
    <td>
        <?php echo $dvd->title ?>
    </td>
    <td>
        <?php echo $dvd->genre_name ?>
    </td>
    <td>
        <?php echo $dvd->format_name ?>
    </td>
    <td>
        <?php echo '<a href="ratings.php?rating=' . $dvd->rating_name . '">' . $dvd->rating_name ?></a>
    </td>
</tr>
<?php endforeach; ?>

<?php
if(count($dvds) == 0)
{
    echo "<h3>Search returned 0 results</h3>";
    echo '<a href="index.php">Return to Search page';
}
