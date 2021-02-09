<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\contactController;
use App\Http\Controllers\providerController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post("/contacts", [contactController::class, 'store']);

Route::get("/contact", [contactController::class, 'index']);

Route::get("/contact/{id}/edit", [contactController::class, 'edit']);

Route::put("/contact/{id}", [contactController::class, 'update']);

Route::delete("/contact/{id}", [contactController::class, 'destroy']);

Route::get("/allproviders", [providerController::class, 'index']);

Route::get("/providers/{id}", [providerController::class, 'findRelated']);