<?php

namespace App\Services;

class BookSearch{
	public function __construct($books)
	{
		$this->books = $books;
    }
    public function find($query, $exact = false)
	{
		$results = [];
		if($exact){
			foreach ($this -> books as $book){
				if(preg_match("/^$query$/i", $book['title'])){
					array_push($results, $book);
				}
			}
			if(count($results) == 0){
				return false;
			}
		}
		else{
			foreach ($this -> books as $book){
				if(preg_match("/$query/i", $book['title'])){
					array_push($results, $book);
				}
			}
		}
		return $results;
	}
}