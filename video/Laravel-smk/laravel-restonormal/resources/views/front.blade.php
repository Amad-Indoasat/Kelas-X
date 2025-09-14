<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Restoran Normale</title>
    <link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.min.css') }}">
</head>
<body>
    <div class="container">
        <div class="mt-2">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a href="/"><img style="width: 100px" src="{{ asset('gambar/Starwalker.png') }}" alt=""></a>
                    <ul class="navbar-nav gap-5">
                        @if (session()->has('cart'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url('cart') }}">
                                    Cart ({{ count(session('cart')) }})
                                </a>
                            </li>
                        @else
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url('cart') }}">🛒 Cart (0)</a>
                            </li>
                        @endif

                        

                        @if (session()->missing('idpelanggan'))
                        <li class="nav-item"><a href="{{ url('register') }}">Register</a></li>
                        <li class="nav-item"><a href="{{ url('login') }}">Login</a></li>                                                   
                        @endif

                        <li class="nav-item">
                            @if (session()->has('idpelanggan'))
                            {{ session('idpelanggan')['email'] }}
                            <li class="nav-item"><a href="{{ url('logout') }}">Logout</a></li>                                  
                            @endif
                        </li>                        
                    </ul>
                </div>
            </nav>
        </div>
        <div class="row mt-4">
            <div class="col-2">
                <ul class="list-group">
                    @foreach ($kategoris as $kategori)
                        <li class="list-group-item"><a href="{{ url('show/'.$kategori->idkategori) }}">{{ $kategori -> kategori }}</a></li>
                    @endforeach
                </ul>
                
            </div>
            <div class="col-10">
                 @yield('content')
            </div>
        </div>
        <div class="bg-light mt-5">
            <p class="text-center">Github:Amad_Indoasat</p>
        </div>
    </div>

    <script src="{{ asset('bootstrap/js/bootstrap.min.js') }}"></script>
</body>
</html>