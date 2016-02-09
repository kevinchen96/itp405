<?php if (session('success')) : ?>
    <p>Review was successfully added.</p>
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

<table style="width:100%">
<tr>
    <td>Title:</td>
    <td>Rating:</td>
    <td>Genre:</td>
    <td>Label:</td>
    <td>Sound:</td>
    <td>Format:</td>
</tr>

<?php foreach ($dvds as $dvd) : ?>
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
</table>
<?php endforeach; ?>
<br>
<br>
<form action="/addReview" method="post" id="review">
    <?php echo csrf_field() ?>
    <input type="hidden" name="id" value="<?php echo $id?>">
    Rating:
    <select name="rating" value="<?php echo old('rating') ?>">
        <?php for($i = 1; $i <= 10; $i++) {
            if($i == old('rating')){
                echo "<option selected='selected' value='" . $i . "'>" . $i . "</option>";
            }
            else{
                echo "<option value='" . $i . "'>" . $i . "</option>";
            }
        }?>
    </select>
    <br>
    <br>
    Title:
    <input type="text" name="title" value="<?php echo old('title') ?>">
    <br>
    <br>
    Description:
    <br>
    <textarea rows="4" cols="50" name="description" form="review"><?php echo old('description') ?></textarea>
    <br>
    <input type="submit" name="submit" value="Search">
</form>

<h2>List of Reviews:</h2>

<?php foreach ($reviews as $review) : ?>
    <h3>Rating:
        <?php echo $review->rating ?>
    </h3>

    <p>
        Title: <?php echo $review->title ?>
    </p>
    <p>
        Description: <?php echo $review->description ?>
    </p>
<?php endforeach; ?>