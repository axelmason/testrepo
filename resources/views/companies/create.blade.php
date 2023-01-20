@extends('layout.app')

@section('content')
    <div class="container">
        <div class="card py-2 px-4">
            <form action="{{ route('createCompany') }}" class="company-create-form" method="post"
                enctype="multipart/form-data">
                @csrf
                <div class="input-group">
                    <div class="col-12 mb-2">
                        <label for="name" class="form-label">Название</label>
                        <input type="text" name="name" id="name" class="form-control"
                            value="{{ old('name') }}">
                        @error('name')
                            <p class="text-danger">{{ $message }}</p>
                        @enderror
                    </div>
                </div>
                <div class="input-group">
                    <div class="col-12 mb-2">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" name="email" id="email" class="form-control"
                            value="{{ old('email') }}">
                        @error('email')
                            <p class="text-danger">{{ $message }}</p>
                        @enderror
                    </div>
                </div>
                <div class="input-group">
                    <div class="col-12 mb-2">
                        <label for="address" class="form-label">Адрес</label>
                        <input type="text" name="address" id="address" class="form-control"
                            value="{{ old('address') }}">
                        @error('address')
                            <p class="text-danger">{{ $message }}</p>
                        @enderror
                    </div>
                </div>
                <div class="input-group">
                    <div class="col-12 mb-2">
                        <label for="logo" class="form-label">Логотип</label>
                        <input type="file" name="logo" id="logo" class="form-control" accept="image/*">
                    </div>
                    @error('logo')
                        <p class="text-danger">{{ $message }}</p>
                    @enderror
                </div>
                <input type="submit" value="Создать" class="btn btn-outline-dark">
            </form>
        </div>
    </div>
@endsection
