<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Provider;

class Contact extends Model
{
    protected $fillable = ["fullname", "email", "phone"];

    public function providers(){
        return $this->belongsTo(Provider::class);
    }
}
