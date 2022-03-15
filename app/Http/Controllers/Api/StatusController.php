<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Status;

class StatusController extends Controller
{
    public function index()
    {
        //          SELECT * FROM `statuses` ORDER BY `name` ASC
        $statuses = Status::orderBy('name', 'asc')->get();

        return $statuses;
    }
}
