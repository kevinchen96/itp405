<?php
/**
 * Created by PhpStorm.
 * User: Kevin
 * Date: 3/1/16
 * Time: 4:49 PM
 */

namespace App\Services\API;
use Cache;

class GoogleBooks{

    public function __construct(){

    }

    public function books($url){
        if(Cache::get($url)){
            $jsonString = Cache::get($url);
        }
        else {
            $jsonString = file_get_contents($url);
            Cache::put($url, $jsonString, 30);
        }
        $books = json_decode($jsonString);
        return $books;
    }

}