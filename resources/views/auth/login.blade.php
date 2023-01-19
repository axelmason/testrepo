@extends('layout.app')

@section('title', 'Авторизация')

@section('content')
    <div style="height: 100vh;" class="bg-dark">
        <div class="d-flex flex-column align-items-center justify-content-center h-100">
            <h1 class="text-center text-white">Авторизация</h1>
            <div class="form-wrapper bg-white px-4 py-3 rounded">
                @if ($errors->any())
                    <div class="alert alert-danger">{{ $errors->first() }}</div>
                @endif
                <form action="{{ route('login') }}" method="post">
                    @csrf
                    <div class="col-12 mb-2">
                        <label for="login" class="form-label">Логин</label>
                        <input type="text" name="login" id="login" class="form-control"
                            value="{{ old('login') }}">
                    </div>
                    <div class="col-12 my-2">
                        <label for="password" class="form-label">Пароль</label>
                        <input type="password" name="password" id="password" class="form-control">
                    </div>
                    <div class="col-12 my-2">
                        <input type="submit" value="Войти" class="btn btn-outline-dark w-100">
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
