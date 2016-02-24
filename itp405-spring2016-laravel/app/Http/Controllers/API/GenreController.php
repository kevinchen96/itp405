<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Genre;
use Response;

class GenreController extends Controller
{
    public function index()
    {
        return [
            'genres' => Genre::all()
        ];
    }
    public function show($id)
    {
        $genres = Genre::find($id);

        if(!$genres)
        {
            return Response::json([
                'error' => 'Genre not found'
            ], 404);
        }
        return [
            'genres' => $genres
        ];
    }
}
