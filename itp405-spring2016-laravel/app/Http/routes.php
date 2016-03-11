<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

use App\Services\API\GoogleBooks;

Route::group(['prefix' => 'api/v1', 'namespace' => 'API'], function() {
    Route::get('genres', 'GenreController@index');
    Route::get('genres/{id}', 'GenreController@show');
    Route::get('dvds/{id}', 'DvdController@show');
    Route::get('dvds', 'DvdController@index');
    Route::post('dvds', 'DvdController@store');
});

Route::group(['middleware' => 'web'], function() {
    Route::get('/', 'DvdController@results');
    Route::get('/dvds', 'DvdController@results');
    Route::get('/dvds/create', 'DvdController@create');
    Route::get('/search', 'DvdController@search');
    Route::get('/dvds/{id}', 'DvdController@details');
    Route::post('/addReview', 'DvdController@reviews');
    Route::post('/addDvd', 'DvdController@addDvd');
    Route::get('/genres/{id}/dvds', 'DvdController@genres');
});

Route::get('/googlebooks/{bookname}', function($bookname){
    $googlebooks = new GoogleBooks();
    $books = $googlebooks->books("https://www.googleapis.com/books/v1/volumes?q=$bookname");
    //return $books;

    return View::make('googlebooks', [
        'books' => $books
    ]);
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
