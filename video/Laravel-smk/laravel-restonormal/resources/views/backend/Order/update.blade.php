@extends('Backend.back')

@section('admincontent')
    
      <div class="container">
        <div class="row mt-5 justify-content-center">
            <div>
                <h1>{{ number_format($order->total) }}</h1>
            </div>
            <div class="col-4">
                <h1 class="text-center">Bayar</h1>
                  <form action="{{ url('admin/order/'.$order->idorder) }}" method="post">
                @csrf
                @method('PUT')

                <div class="mt-2">
                    <label class="form-label" for="">Total</label>
                    <input class="form-control" min="{{ $order->total }}" value="{{ $order->total }}" type="number" name="total" id="">
                     <span class="text-danger">
                        @error('kategori')
                            {{ $message }}
                        @enderror
                    </span>
                </div>
                <div class="mt-4">
                  
                    <button class="btn btn-primary" type="submit" >BAYAR</button>
                </div>

            </form>
            </div>
        </div>
    </div>
     <script src="{{ asset('bootstrap/js/bootstrap.min.js') }}"></script>

@endsection