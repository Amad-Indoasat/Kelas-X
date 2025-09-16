@extends('Backend.back')

@section('admincontent')
<div>
    <h2>Insert Data</h2>
</div>
    
      <div class="container">
        <div class="row mt-5 justify-content-center">
            <div class="col-4">
                <h1 class="text-center">Login Admin</h1>
                  <form action="{{ url('admin/menu') }}" method="post" enctype="multipart/form-data">
                @csrf

                 <select class="form-select" name="idkategori" onchange="this.form.submit()">
                    @foreach ($kategoris as $kategori)
                        <option value="{{ $kategori->idkategori }}">{{ $kategori->kategori }}</option>
                    @endforeach
                </select>

                <div class="mt-2">
                    <label class="form-label" for="email">Menu</label>
                    <input class="form-control" type="text" name="menu" id="">
                     <span class="text-danger">
                        @error('menu')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-2">
                    <label class="form-label" for="email">Deskripsi</label>
                    <input class="form-control" type="text" name="deskripsi" id="">
                     <span class="text-danger">
                        @error('deskripsi')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-2">
                    <label class="form-label" for="email">Harga</label>
                    <input class="form-control" type="number" name="harga" id="">
                     <span class="text-danger">
                        @error('harga')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-2">
                    <label class="form-label" for="email">Gambar</label>
                    <input class="form-control" type="file" name="gambar" id="">
                     <span class="text-danger">
                        @error('gambar')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-4">
                  
                    <button class="btn btn-primary" type="submit" >Simpan</button>
                </div>

            </form>
            </div>
        </div>
    </div>
     <script src="{{ asset('bootstrap/js/bootstrap.min.js') }}"></script>

@endsection