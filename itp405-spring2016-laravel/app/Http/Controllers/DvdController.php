<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class DvdController extends Controller
{
    public function search()
    {
        $genres = DB::table('genres')
            ->select('id', 'genre_name')
            ->get();

        $ratings = DB::table('ratings')
            ->select('id', 'rating_name')
            ->get();

        return view('search', [
            'genres' => $genres,
            'ratings' => $ratings
        ]);
    }

    public function results(Request $request)
    {
        $title = $request -> input('title');
        $genre_id = $request -> input('genre_id');
        $rating_id = $request -> input('rating_id');

        $genre = -1;
        $rating = -1;

        $dvds = DB::table('dvds')
            ->select('title', 'rating_name', 'genre_name', 'label_name', 'sound_name', 'format_name')
            ->join('ratings', 'dvds.rating_id', '=', 'ratings.id')
            ->join('genres', 'dvds.genre_id', '=', 'genres.id')
            ->join('labels', 'dvds.label_id', '=', 'labels.id')
            ->join('sounds', 'dvds.sound_id', '=', 'sounds.id')
            ->join('formats', 'dvds.format_id', '=', 'formats.id');

        if($title)
        {
            $dvds = $dvds ->where('title', 'LIKE', "%$title%");
        }

        if($genre_id) {
            if ($genre_id != -1) {
                $dvds = $dvds->where('genre_id', '=', "$genre_id");
                $genre = DB::table('genres')
                    ->select('genre_name')
                    ->where('id', '=', "$genre_id")
                    ->get();
            }
        }

        if($rating_id) {
            if ($rating_id != -1) {
                $dvds = $dvds->where('rating_id', '=', "$rating_id");
                $rating = DB::table('ratings')
                    ->select('rating_name')
                    ->where('id', '=', "$rating_id")
                    ->get();
            }
        }
        $dvds = $dvds -> get();

        return view('results', [
            'mydvds' => $dvds,
            'search' => $title,
            'genre' => $genre,
            'rating' => $rating
        ]);
    }
}