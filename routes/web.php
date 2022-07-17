<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/admin/{vue?}', function () {
   return view('app');
})->where('vue', '[\/\w\.-]*')->name('admin');

Route::get('/portal-admin', function() {
   return view('app');
})->where('vue', '[\/\w\.-]*]')->name('portal-admin');
