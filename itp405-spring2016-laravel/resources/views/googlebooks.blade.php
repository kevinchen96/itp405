@extends('layout')

@section('content')
   @foreach ($books->items as $book)
    <div class="row">
        <div class="media">
            <div class="media-left">
               @if(property_exists($book->volumeInfo, "description"))
                    <?php
                    $thumbnail = $book->volumeInfo->imageLinks->thumbnail;
                    echo '<img src="' . $thumbnail . '">'?>
               @endif

            </div>
            <div class="media-body">
                <div class="media-heading">
                    <?php echo "<h4 class='list-group-item-heading'>" . $book->volumeInfo->title . "</h4>"?>
                </div>
                @if(property_exists($book->volumeInfo, "description"))
                    <?php echo "<div class='list-group-item-text'>" . $book->volumeInfo->description . "</div>"?>
                @endif
            </div>
        </div>
    </div>
    <br>
    @endforeach
@endsection