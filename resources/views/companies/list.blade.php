@extends('layout.app')

@section('content')
    <div class="container">
        <a href="{{ route('createCompanyPage') }}" class="btn btn-outline-dark my-3">Добавить</a>
        @if (session()->has('success'))
            <div class="alert alert-success">
                <p>{{ session()->get('success') }}</p>
            </div>
        @endif
        <div class="table-wrapper">
            <table class="table table-striped dashboard-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Email</th>
                        <th>Адрес</th>
                        <th>Действия</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
@endsection

@section('extra-script')
    <script>
        $('.dashboard-table').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('getCompanies') }}",
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
                    data: 'address',
                    name: 'address'
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
