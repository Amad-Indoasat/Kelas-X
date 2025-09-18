@extends('Backend.back')

@section('admincontent')
    
      <div class="container">
        <div class="row mt-5 justify-content-center">
            <div class="col-4">
                <h1 class="text-center">Tambah Data</h1>
                  <form action="{{ url('admin/kategori') }}" method="post">
                @csrf

                <div class="mt-2">
                    <label class="form-label" for="">Level</label>
                    <select class="form-select" name="level" id="">
                        <option value="manager">manager</option>
                        <option value="kasir">kasir</option>
                        <option value="admin">admin</option>
                    </select>
                </div>

                <div class="mt-2">
                    <label class="form-label" for="">Nama</label>
                    <input class="form-control" value="{{ old('name') }}" type="text" name="name" id="">
                     <span class="text-danger">
                        @error('name')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-2">
                    <label class="form-label" for="">Emsil</label>
                    <input class="form-control" value="{{ old('email') }}" type="email" name="email" id="">
                     <span class="text-danger">
                        @error('email')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-2">
                    <label class="form-label" for="">Password</label>
                    <input class="form-control" value="{{ old('password') }}" type="password" name="password" id="">
                     <span class="text-danger">
                        @error('password')
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