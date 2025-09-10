@extends('front')

@section('content')
    
    <div class="row">
        <div class="col-6">
            <form action="" method="post">

                <div class="mt-2">
                    <label class="form-label" for="pelanggan">Pelanggan:</label>
                    <input class="form-control" type="text" name="pelanggan" id="">
                </div>
                <div class="mt-2">
                    <label class="form-label" for="alamat">Alamat:</label>
                    <input class="form-control" type="text" name="alamat" id="">
                </div>
                <div class="mt-2">
                    <label class="form-label" for="telp">No Telp:</label>
                    <input class="form-control" type="text" name="telp" id="">
                </div>
                <div class="mt-2">
                    <label class="form-label" for="jenis kelamin">Jenis Kelamin:</label>
                    <select class="form-select" name="jenis kelamin" id="">
                        <option value="l" selected>L</option>
                        <option value="p">P</option>
                    </select>
                </div>
                <div class="mt-2">
                    <label class="form-label" for="email">Email:</label>
                    <input class="form-control" type="email" name="email" id="">
                </div>
                <div class="mt-2">
                    <label class="form-label" for="password">Password:</label>
                    <input class="form-control" type="text" name="password" id="">
                </div>
                <div class="mt-4">
                  
                    <button class="btn btn-primary" type="submit" >Register</button>
                </div>

            </form>
        </div>
    </div>

@endsection