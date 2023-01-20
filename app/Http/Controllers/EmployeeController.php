<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Models\Employee;
use DataTables;

class EmployeeController extends Controller
{
    public function employeesPage()
    {
        return view('employees.list');
    }

    public function createEmployeePage($company_id = 0)
    {
        $companies = Company::all();
        return view('employees.create', compact('companies', 'company_id'));
    }

    public function getEmployees()
    {
        $data = Employee::with('company')->get();

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                $btn = '<a href="' . route('employeeDetails', $row->id) . '">Подробнее</a>';

                return $btn;
            })
            ->addColumn('company', function ($row) {
                return $row->company->name;
            })
            ->make(true);
    }

    public function employeeDetails($employee_id)
    {
        $employee = Employee::with('company')->findOrFail($employee_id);

        return view('employees.details', compact('employee'));
    }

    public function deleteEmployee($employee_id)
    {
        Employee::find($employee_id)->delete();

        return to_route('employeesPage')->with('success', 'Сотрудник удалён.');
    }

    public function createEmployee(Request $r)
    {
        $validation = $r->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'company' => 'required'
        ]);
        $company = Company::find($r->company);

        $create = $company->employees()->create($r->only(['name', 'email', 'phone']));

        if ($create) {
            $createdFromId = explode('/', url()->previous())[5] ?? false;
            if (isset($createdFromId)) {
                return to_route('companyDetails', $createdFromId)->with('success', 'Сотрудник ' . $create->name . ' создан.');
            }

            return to_route('employeesPage')->with('success', 'Сотрудник ' . $create->name . ' создан.');
        }

        return back()->withErrors(['msg' => 'Что-то пошло не так...']);
    }

    public function editEmployeePage($employee_id)
    {
        $employee = Employee::with('company')->find($employee_id);
        $companies = Company::all();

        return view('employees.edit', compact('employee', 'companies'));
    }

    public function editEmployee(Request $r, $employee_id)
    {
        $validation = $r->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'company' => 'required'
        ]);

        $employee = Employee::find($employee_id);
        $employee->name = $r->name;
        $employee->email = $r->email;
        $employee->phone = $r->phone;
        $employee->company_id = $r->company;
        $employee->save();

        return to_route('employeeDetails', $employee_id)->with('success', 'Сотрудник изменён.');
    }
}
