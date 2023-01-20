<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
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

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'loginPage'])->name('loginPage');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});

Route::middleware('auth')->group(function () {
    // Companies
    Route::get('/companies', [CompanyController::class, 'companiesPage'])->name('companiesPage');
    Route::get('/companies/all', [CompanyController::class, 'getCompanies'])->name('getCompanies');

    Route::get('/company/{company_id}/details', [CompanyController::class, 'companyDetails'])->name('companyDetails');
    Route::get('/company/{company_id}/employees', [CompanyController::class, 'getCompanyEmployees'])->name('getCompanyEmployees');

    Route::get('/company/create', [CompanyController::class, 'createCompanyPage'])->name('createCompanyPage');
    Route::post('/company/create', [CompanyController::class, 'createCompany'])->name('createCompany');

    Route::get('/company/{company_id}/edit', [CompanyController::class, 'editCompanyPage'])->name('editCompanyPage');
    Route::post('/company/{company_id}/edit', [CompanyController::class, 'editCompany'])->name('editCompany');

    Route::post('/company/{company_id}/delete', [CompanyController::class, 'deleteCompany'])->name('deleteCompany');

    // Employees
    Route::get('/employees', [EmployeeController::class, 'employeesPage'])->name('employeesPage');
    Route::get('/employees/all', [EmployeeController::class, 'getEmployees'])->name('getEmployees');

    Route::get('/{employee_id}/details', [EmployeeController::class, 'employeeDetails'])->name('employeeDetails');
    Route::post('/{employee_id}/delete', [EmployeeController::class, 'deleteEmployee'])->name('deleteEmployee');

    Route::get('/employee/create/{company_id?}', [EmployeeController::class, 'createEmployeePage'])->name('createEmployeePage');
    Route::post('/employee/create', [EmployeeController::class, 'createEmployee'])->name('createEmployee');

    Route::get('/employee/{company_id}/edit', [EmployeeController::class, 'editEmployeePage'])->name('editEmployeePage');
    Route::post('/employee/{company_id}/edit', [EmployeeController::class, 'editEmployee'])->name('editEmployee');


    Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
});
