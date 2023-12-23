<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TurnoCajaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('auth.login');
})->middleware('guest');

Auth::routes(['register' => false]);

Route::group(['middleware' => 'auth'], function () {
    Route::get('/home', 'HomeController@index')
        ->name('home');

    Route::get('/sales-purchases/chart-data', 'HomeController@salesPurchasesChart')
        ->name('sales-purchases.chart');

    Route::get('/current-month/chart-data', 'HomeController@currentMonthChart')
        ->name('current-month.chart');

    Route::get('/payment-flow/chart-data', 'HomeController@paymentChart')
        ->name('payment-flow.chart');

        // Rutas de caja
        Route::resource('turnos', TurnoCajaController::class)->only(['index', 'create', 'store', 'show']);
        Route::get('/turnos/{turno}/cerrar', 'TurnoCajaController@showCerrar')->name('turnos.cerrar.show');
        Route::post('/turnos/{turno}/cerrar', 'TurnoCajaController@cerrar')->name('turnos.cerrar');


});



