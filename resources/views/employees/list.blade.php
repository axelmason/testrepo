@extends('layout.app')

@section('content')
    <div class="container">
        <a href="{{ route('createEmployeePage') }}" class="btn btn-outline-dark my-3">Добавить</a>
        @if (session()->has('success'))
            <div class="alert alert-success">
                <p>{{ session()->get('success') }}</p>
            </div>
        @endif
        <div class="table-wrapper">
            <table class="table table-striped employees-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Компания</th>
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
            ajax: "{{ route('getEmployees') }}",
            columns: [{
                    data: 'DT_RowIndex',
                    name: 'DT_RowIndex'
                },
                {
                    data: 'company',
                    name: 'company'
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
