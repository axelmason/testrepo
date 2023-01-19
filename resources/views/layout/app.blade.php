<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>@yield('title')</title>
</head>

<body>
    @section('header')
        <header class="bg-dark py-3 text-white">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <h3 class="col-lg-6 col-12 header-title">Админ-панель</h3>
                    <div class="col-lg-5 col-12 text-end">
                        <a href="{{ route('logout') }}" class="btn btn-light">Выйти</a>
                    </div>
                </div>
            </div>
        </header>
    @stop
    <main>@yield('content')</main>
</body>

</html>
