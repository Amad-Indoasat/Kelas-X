@extends('Backend.back')

@section('admincontent')
    
      <div class="container">
        <div class="row mt-5 justify-content-center">
            <div class="col-4">
                <h1 class="text-center">Login Admin</h1>
                  <form action="{{ url('admin/kategori') }}" method="post">
                @csrf

                <div class="mt-2">
                    <label class="form-label" for="email">kategori</label>
                    <input class="form-control" value="{{ old('kategori') }}" type="text" name="kategori" id="">
                     <span class="text-danger">
                        @error('kategori')
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