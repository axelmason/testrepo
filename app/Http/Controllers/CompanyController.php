<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Employee;
use DataTables;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class CompanyController extends Controller
{
    public function companiesPage()
    {
        return view('companies.list');
    }

    public function createCompanyPage()
    {
        return view('companies.create');
    }

    public function createCompany(Request $r)
    {
        $validation = $r->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'address' => 'required|string',
            'logo' => 'required|dimensions:min_width=100,min_height=100',
        ]);
        $file = $r->file('logo');
        $filename = 'company_' . $r->name . '_logo.' . $file->getClientOriginalExtension();

        $file->storeAs('companies', $filename, 'public');

        $create = Company::create($r->only(['name', 'email', 'address']) + ['logo' => $filename]);

        if ($create) {
            return to_route('companyPage')->with('success', 'Компания ' . $create->name . ' создана.');
        }
        return back()->withErrors(['msg' => 'Что-то пошло не так...']);
    }

    public function companyDetails($company_id)
    {
        $company = Company::findOrFail($company_id);

        return view('companies.details', compact('company'));
    }

    public function getCompanies()
    {
        $data = Company::all();

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                $btn = '<a href="' . route('companyDetails', $row->id) . '">Подробнее</a>';

                return $btn;
            })
            ->make(true);
    }

    public function getCompanyEmployees($company_id)
    {
        $data = Employee::where('company_id', $company_id)->get();

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                $btn = '<a href="' . route('employeeDetails', $row->id) . '">Подробнее</a>';

                return $btn;
            })
            ->make(true);
    }

    public function deleteCompany($company_id)
    {
        $company = Company::find($company_id);

        Storage::disk('public')->delete('companies/' . $company->logo);

        $company->delete();

        return to_route('companiesPage')->with('success', 'Компания удалена.');
    }

    public function editCompanyPage($company_id)
    {
        $company = Company::find($company_id);

        return view('companies.edit', compact('company'));
    }

    public function editCompany(Request $r, $company_id)
    {
        $rules = [
            'name' => 'required|string',
            'email' => 'required|email',
            'address' => 'required|string',
        ];
        if ($r->file('logo')) {
            $rules[] = Rule::dimensions()->width(100)->height(100);
        }
        $validation = $r->validate($rules);

        $company = Company::find($company_id);
        $company->name = $r->name;
        $company->email = $r->email;
        $company->address = $r->address;
        if ($r->file('logo')) {
            Storage::disk('public')->delete('companies/' . $company->logo);
            $filename = 'company_' . $r->name . '_logo.' . $r->file('logo')->getClientOriginalExtension();

            $r->file('logo')->storeAs('companies', $filename, 'public');
            $company->logo = $filename;
        }
        $company->save();

        return to_route('companyDetails', $company_id)->with('success', 'Компания изменена.');
    }
}
