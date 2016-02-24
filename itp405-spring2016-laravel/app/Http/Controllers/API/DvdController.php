<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Dvd;
use Validator;
use Response;

class DvdController extends Controller
{
    public function index()
    {
        $dvds = Dvd::take(20)->get();
        $dvdEager = Dvd::with('Genre', 'Rating') -> take(20)->get();
        $genres = $this -> findUniqueGenres($dvdEager);
        $ratings = $this -> findUniqueRatings($dvdEager);

        return [
            'dvds' => $dvds,
            'genres' => $genres,
            'ratings' => $ratings
        ];
    }

    public function show($id)
    {
        $dvds = Dvd::find($id);
        if(!$dvds)
        {
            return Response::json([
                'error' => 'Dvd not found'
            ], 404);
        }
        $dvdEager = Dvd::with('Genre', 'Rating')
                        ->where('id', '=', "$id")
                        ->get();
        $genres = $this -> findUniqueGenres($dvdEager);
        $ratings = $this -> findUniqueRatings($dvdEager);

        return [
            'dvd' => $dvds,
            'genres' => $genres,
            'ratings' => $ratings
        ];
    }

    public function store(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'title' => 'required|unique:dvds,title'
        ]);

        if($validation -> passes())
        {
            $dvd = new Dvd();
            $dvd -> title = $request->input('title');
            $dvd -> genre_id = $request -> input('genre_id');
            $dvd -> rating_id = $request -> input('rating_id');
            $dvd -> award = $request -> input('format_id');
            $dvd -> format_id = $request -> input('format_id');
            $dvd -> label_id = $request -> input('label_id');
            $dvd -> sound_id = $request -> input('sound_id');

            $dvd -> save();

            return [
                'dvd' => $dvd
            ];
        }

        return Response::json([
            'errors' => [
                'title' => $validation->errors()->get('title')
            ]
        ], 422);
    }

    public function findUniqueGenres($dvds)
    {
        $added = [];
        $genres = [];

        foreach ($dvds as $dvd)
        {

            if(!array_key_exists($dvd->genre->id, $added)){
                $added[$dvd->genre->id] = true;
                $genres[] = $dvd->genre;
            }
        }

        return $genres;
    }

    public function findUniqueRatings($dvds)
    {
        $added = [];
        $ratings = [];

        foreach ($dvds as $dvd)
        {
            if(!array_key_exists($dvd->rating->id, $added)){
                $added[$dvd->rating->id] = true;
                $ratings[] = $dvd->rating;
            }
        }

        return $ratings;
    }
}
