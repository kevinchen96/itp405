<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dvd extends Model
{
    protected $hidden = ['created_at', 'updated_at', 'sound_id', 'label_id', 'format_id', 'release_date'];

    public function genre()
    {
        return $this->belongsTo('App\Models\Genre');
    }
    public function rating()
    {
        return $this->belongsTo('App\Models\Rating');
    }
    public function label()
    {
        return $this->belongsTo('App\Models\Label');
    }
}
