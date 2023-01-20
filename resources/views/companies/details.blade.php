@extends('layout.app')

@section('content')
    <div class="container">
        <div class="card py-2 px-4">
            @if (session()->has('success'))
                <div class="alert alert-success">
                    <p>{{ session()->get('success') }}</p>
                </div>
            @endif
            <div class="row">
                <div class="col-3">
                    <h1>{{ $company->name }}</h1>
                    <div class="logo-wrapper" style="width: 200px;"><img
                            src="{{ asset('storage/companies/' . $company->logo) }}" alt="" style="width: 100%;"></div>
                    <p>Email: {{ $company->email }}</p>
                    <p>Адрес: {{ $company->address }}</p>
                    <div class="d-flex">
                        <form action="{{ route('deleteCompany', $company->id) }}" method="post">
                            @csrf
                            <input type="submit" value="Удалить" class="btn btn-danger">
                        </form>
                        <a href="{{ route('editCompanyPage', $company->id) }}" class="btn btn-info ms-2">Изменить</a>
                    </div>
                </div>
                <div class="col-9">
                    <iframe src="https://yandex.ru/maps/?text={{ $company->address }}" frameborder="0" width="100%"
                        height="500px"></iframe>
                </div>
            </div>

            <hr>
            <h3>Сотрудники</h3>
            <a href="{{ route('createEmployeePage', $company->id) }}" class="btn btn-outline-dark my-3">Добавить</a>
            <table class="table table-striped employees-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Имя</th>
                        <th>Email</th>
                        <th>Телефон</th>
                        <th>Действия</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
@endsection

@section('extra-script')
    <script>
        $('.employees-table').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('getCompanyEmployees', "+$company->id+") }}",
            columns: [{
                    data: 'DT_RowIndex',
                    name: 'DT_RowIndex'
                },
                {
                    data: 'name',
                    name: 'name'
                },
                {
                    data: 'email',
                    name: 'email'
                },
                {
                    data: 'phone',
                    name: 'phone'
                },
                {
                    data: 'action',
                    name: 'action',
                    orderable: false,
                    searchable: false
                }
            ]
        })
    </script>
@endsection
