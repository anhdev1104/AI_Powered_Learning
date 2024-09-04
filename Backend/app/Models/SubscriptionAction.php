<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionAction extends Model
{
    use HasFactory;

    protected $table = 'subscription_actions';

    protected $filable = [
        'name',
        'description',
        'subscription_id',
    ];
}
