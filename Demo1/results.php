<?php

if(!isset($_GET['artist'])){
    header('Location: index.php');
    exit();
}

$host = 'itp460.usc.edu';
$dbname = 'music';
$user = 'student';
$pw = 'ttrojan';
$artist = $_GET['artist'];

$pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pw);

//$sql = "SELECT title, price, play_count, artist_name
//        FROM songs, artists
//        WHERE songs.artist_id = artists.id";

$sql = "SELECT title, price, play_count, artist_name
        FROM songs
        LEFT JOIN artists
        ON songs.artist_id = artists.id
        WHERE artist_name LIKE ?";

$statement = $pdo->prepare($sql);
$like = '%' . $artist . '%';
$statement->bindParam(1, $like);
$statement->execute();

$songs = $statement->fetchAll(PDO::FETCH_OBJ); // static property
//var_dump($songs);

//echo $songs[0]->title; //object so use -> notation for php
//echo $sql;
?>


<?php foreach ($songs as $song) : ?>
    <h3>
        <?php echo $song->title ?>
    </h3>
    <span>by</span>
    <span>
        <?php echo $song->artist_name ?>
    </span>
    <p>
        Play Count: <?php echo $song->play_count ?>
    </p>
    <p>
        Price: $<?php echo $song->price ?>
    </p>
<?php endforeach; ?>