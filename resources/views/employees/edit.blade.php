@extends('layout.app')

@section('content')
    <div class="container">
        <div class="card py-2 px-4">
            <form action="{{ route('editEmployee', $employee->id) }}" class="employee-edit-form" method="post">
                @csrf
                <div class="input-group">
                    <div class="col-12 mb-2">
                        <label for="name" class="form-label">Имя</label>
                        <input type="text" name="name" id="name" class="form-control"
                            value="{{ $employee->name }}">
                        @error('name')
                            <p class="text-danger">{{ $message }}</p>
                        @enderror
                    </div>
                </div>
                <div class="input-group">
                    <div class="col-12 mb-2">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" name="email" id="email" class="form-control"
                            value="{{ $employee->email }}">
                        @error('email')
                            <p class="text-danger">{{ $message }}</p>
                        @enderror
                    </div>
                </div>
                <div class="input-group">
                    <div class="col-12 mb-2">
                        <label for="phone" class="form-label">Номер телефона</label>
                        <input type="text" name="phone" id="phone" class="form-control"
                            value="{{ $employee->phone }}">
                        @error('phone')
                            <p class="text-danger">{{ $message }}</p>
                        @enderror
                    </div>
                </div>
                <div class="input-group">
                    <div class="col-12 mb-2">
                        <label for="company" class="form-label">Компания</label>
                        <select class="form-select" name="company" id="company">
                            <option selected disabled>Выбрать компанию...</option>
                            @foreach ($companies as $c)
                                <option value="{{ $c->id }}" @if ($c->id == $employee->company_id) selected @endif>
                                    {{ $c->name }}</option>
                            @endforeach
                        </select>
                        @error('company')
                            <p class="text-danger">{{ $message }}</p>
                        @enderror
                    </div>
                </div>
                <input type="submit" value="Изменить" class="btn btn-outline-dark">
            </form>
        </div>
    </div>
@endsection
