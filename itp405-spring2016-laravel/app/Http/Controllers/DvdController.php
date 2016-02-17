<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;
use Validator;
use App\Models\Format;
use App\Models\Dvd;
use App\Models\Genre;
use App\Models\Label;
use App\Models\Rating;
use App\Models\Sound;
class DvdController extends Controller
{
    public function search()
    {
        $genres = Genre::all();
        $ratings = Rating::all();

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
            ->select('dvds.id','title', 'rating_name', 'genre_name', 'label_name', 'sound_name', 'format_name')
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

    public function details($id)
    {
        $dvds = DB::table('dvds')
            ->select('dvds.id','title', 'rating_name', 'genre_name', 'label_name', 'sound_name', 'format_name')
            ->join('ratings', 'dvds.rating_id', '=', 'ratings.id')
            ->join('genres', 'dvds.genre_id', '=', 'genres.id')
            ->join('labels', 'dvds.label_id', '=', 'labels.id')
            ->join('sounds', 'dvds.sound_id', '=', 'sounds.id')
            ->join('formats', 'dvds.format_id', '=', 'formats.id')
            ->where('dvds.id', '=', "$id")
            ->get();

        $reviews = DB::table('reviews')
            ->select('title', 'description', 'rating')
            ->where('dvd_id', '=', "$id")
            ->get();

        return view('details', [
            'dvds' => $dvds,
            'id' => $id,
            'reviews' => $reviews
        ]);

    }
    public function reviews(Request $request)
    {
        $id = $request -> input('id');

        $validation = Validator::make($request->all(), [
            'rating' => 'Integer|Min:1|Max:10',
            'title' => 'Required|Min:5',
            'description' => 'Required|Min:10',
            'id' => 'Required'
        ]);

        $rating = $request -> input('rating');
        $title = $request -> input('title');
        $description = $request -> input('description');

        if ($validation->fails()) {
            return redirect("/dvds/$id")
                ->withInput()
                ->withErrors($validation);
        }

        else {
            DB::table('reviews')->insert([
                'title' => $title,
                'rating' => $rating,
                'description' => $description,
                'dvd_id' => $id
            ]);
            return redirect("dvds/$id")->with('success', true);
        }

    }

    public function create()
    {
        $formats = Format::all();
        $genres = Genre::all();
        $labels = Label::all();
        $ratings = Rating::all();
        $sounds = Sound::all();

        return view('create', [
            'formats' => $formats,
            'labels' => $labels,
            'genres' => $genres,
            'ratings' => $ratings,
            'sounds' => $sounds
        ]);
    }

    public function addDvd(Request $request)
    {
        $title = $request -> input('title');
        $genre_id = $request -> input('genre_id');
        $rating_id = $request -> input('rating_id');
        $format_id = $request -> input('format_id');
        $label_id = $request -> input('label_id');
        $sound_id = $request -> input('sound_id');

        $dvd = new Dvd();
        $dvd -> title = $title;
        $dvd -> genre_id = $genre_id;
        $dvd -> rating_id = $rating_id;
        $dvd -> format_id = $format_id;
        $dvd -> label_id = $label_id;
        $dvd -> sound_id = $sound_id;

        $validation = Validator::make($request->all(), [
            'title' => 'Required'
        ]);

        if ($validation->fails()) {
            return redirect("/dvds/create")
                ->withInput()
                ->withErrors($validation);
        }

        else{
            $dvd -> save();
            return redirect("dvds/create")->with('success', true);
        }

    }
    public function genres($id)
    {
        $genre = Genre::find($id);
        $dvds = Dvd::with('genre', 'rating', 'label')
            ->where('genre_id', '=', "$id")
            ->get();

        return view('genre', [
            'dvds' => $dvds,
            'genre' => $genre
        ]);

    }
}
