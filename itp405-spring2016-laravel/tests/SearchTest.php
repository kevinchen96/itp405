<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SearchTest extends TestCase
{
    public function testSubsetFromSearch()
    {
    	$books = [
		  [ 'title' => 'Introduction to HTML and CSS', 'pages' => 432 ],
		  [ 'title' => 'Learning JavaScript Design Patterns', 'pages' => 32 ],
		  [ 'title' => 'Object Oriented JavaScript', 'pages' => 42 ],
		  [ 'title' => 'JavaScript Web Applications', 'pages' => 99 ],
		  [ 'title' => 'PHP Object Oriented Solutions', 'pages' => 80 ],
		  [ 'title' => 'PHP Design Patterns', 'pages' => 300 ],
		  [ 'title' => 'Head First Java', 'pages' => 200 ]
		];

		$search = new \App\Services\BookSearch($books);
		$results = $search->find('javascript');

		$expected =[ 
		  [ 'title' => 'Learning JavaScript Design Patterns', 'pages' => 32 ],
		  [ 'title' => 'Object Oriented JavaScript', 'pages' => 42 ],
		  [ 'title' => 'JavaScript Web Applications', 'pages' => 99 ],
		];
		$this->assertEquals($expected, $results);
    }

    public function testExactSubsetFromSearch()
    {
    	$books = [
		  [ 'title' => 'Introduction to HTML and CSS', 'pages' => 432 ],
		  [ 'title' => 'Learning JavaScript Design Patterns', 'pages' => 32 ],
		  [ 'title' => 'Object Oriented JavaScript', 'pages' => 42 ],
		  [ 'title' => 'JavaScript Web Applications', 'pages' => 99 ],
		  [ 'title' => 'PHP Object Oriented Solutions', 'pages' => 80 ],
		  [ 'title' => 'PHP Design Patterns', 'pages' => 300 ],
		  [ 'title' => 'Head First Java', 'pages' => 200 ]
		];

		$search = new \App\Services\BookSearch($books);
		$results = $search->find('javascript web applications', true);

		$expected =[ 
		  [ 'title' => 'JavaScript Web Applications', 'pages' => 99 ]
		];
		$this->assertEquals($expected, $results);
    }

    public function testFalseSubsetFromSearch()
    {
    	$books = [
		  [ 'title' => 'Introduction to HTML and CSS', 'pages' => 432 ],
		  [ 'title' => 'Learning JavaScript Design Patterns', 'pages' => 32 ],
		  [ 'title' => 'Object Oriented JavaScript', 'pages' => 42 ],
		  [ 'title' => 'JavaScript Web Applications', 'pages' => 99 ],
		  [ 'title' => 'PHP Object Oriented Solutions', 'pages' => 80 ],
		  [ 'title' => 'PHP Design Patterns', 'pages' => 300 ],
		  [ 'title' => 'Head First Java', 'pages' => 200 ]
		];

		$search = new \App\Services\BookSearch($books);
		$results = $search->find('The Definitive Guide to Symfony', true);

		$this->assertEquals(false, $results);
    }

   	public function testSearchResultsPage(){
   		$this
   			->visit('/search')
   			->type('dalmatian', 'title')
   			->press('submit')
   			->seePageIs("/dvds?genre_id=-1&rating_id=-1&submit=Search&title=dalmatian");
   	}
}
