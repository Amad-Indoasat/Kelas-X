<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use App\Models\Menu;

class CartController extends Controller
{
    public function beli($idmenu)
    {
        $menu = Menu::where('idmenu', $idmenu)->first();

        echo $menu->idmenu . "<br>";
        echo $menu->menu . "<br>";
        echo $menu->harga . "<br>";

        $cart = session()->get('cart', []);

        if (isset($cart[$idmenu])) {
            $cart[$idmenu]['jumlah']++;
        } else {
            $cart[$idmenu] = [
                'idmenu' => $menu->idmenu,
                'menu'   => $menu->menu,
                'harga'  => $menu->harga,
                'jumlah' => 1,
            ];
        }

        session()->put('cart', $cart);

        return redirect('cart');
    }

    public function cart()
    {
        $kategoris = Kategori::all();
        return view('cart', ['kategoris' => $kategoris]);
    }

    public function hapus($idmenu)
    {
        $cart = session()->get('cart');
        if (isset($cart[$idmenu])) {
            unset($cart[$idmenu]);
            session()->put('cart', $cart);
        }
        return redirect('cart');
    }

    public function batal()
    {
        session()->forget('cart');
        return redirect('/');
    }
}
