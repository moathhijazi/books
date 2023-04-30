<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CRUD ;
use App\Http\Controllers\web ;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', [CRUD::class , 'index']);
Route::post('/signup' , [web::class , 'create']);
Route::post('/signin' , [web::class , 'check']);
Route::post('/show' , [web::class , 'show']);
Route::post('/new' , [web::class , 'new']);
