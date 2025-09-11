@extends('front')

@section('content')
<div class="container py-5">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        @foreach ($menus as $menu)
            <div class="col">
                <div class="card shadow-sm border-0 h-100">
                    <img src="{{ asset('gambar/'.$menu->gambar) }}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ $menu->menu }}</h5>
                        <p class="card-text text-muted">{{ $menu->deskripsi }}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="fw-bold text-primary">{{ $menu->harga }}</span>
                            <a href="{{  url('beli/'.$menu->idmenu) }}" class="btn btn-sm btn-outline-primary">Beli</a>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
    <div class="d-flex justify-content-center mt-5">
    {{ $menus->links() }}
    </div>
</div>
@endsection