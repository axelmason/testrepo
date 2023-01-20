@extends('layout.app')

@section('content')
    <div class="container">
        <div class="card py-2 px-4">
            @if (session()->has('success'))
                <div class="alert alert-success">
                    <p>{{ session()->get('success') }}</p>
                </div>
            @endif
            <h1>{{ $employee->name }}</h1>
            <p>Email: {{ $employee->email }}</p>
            <p>Номер телефона: {{ $employee->phone }}</p>
            <p>Компания: {{ $employee->company->name }}</p>
            <div class="d-flex">
                <form action="{{ route('deleteEmployee', $employee->id) }}" method="post">
                    @csrf
                    <input type="submit" value="Удалить" class="btn btn-danger">
                </form>
                <a href="{{ route('editEmployeePage', $employee->id) }}" class="btn btn-info ms-2">Изменить</a>
            </div>
        </div>
    </div>
@endsection
